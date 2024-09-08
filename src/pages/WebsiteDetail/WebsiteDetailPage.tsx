import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import AddReviewDialog from '../../components/WebsiteDetails/AddReviewDialog';
import BreadcrumbsNavigation from '../../components/WebsiteDetails/BreadcrumbsNavigation';
import RelatedWebsites from '../../components/WebsiteDetails/RelatedWebsites';
import UserReviews from '../../components/WebsiteDetails/UserReviews';
import WebsiteDetails from '../../components/WebsiteDetails/WebsiteDetails';
import WebsiteOverview from '../../components/WebsiteDetails/WebsiteOverview';
import { Website } from '../../types';
import useFetchData from '../../hooks/fetchData';
import { fetchWebsiteDetails } from '../../services/websiteService';

const WebsiteDetailPage: React.FC = () => {
  const { data, loading, error } = useFetchData<Website>(fetchWebsiteDetails);

  const website = data[0];

  const [reviews, setReviews] = useState([
    { username: 'Alice', comment: 'Great site for learning!', rating: 4 },
    { username: 'Bob', comment: 'Very useful resources.', rating: 5 },
  ]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const relatedWebsites = [
    { id: 1, title: 'Related Website 1', image: 'https://via.placeholder.com/140x100', shortDescription: 'Related site description' },
    { id: 2, title: 'Related Website 2', image: 'https://via.placeholder.com/140x100', shortDescription: 'Another related site description' },
  ];

  const handleAddReview = (review: { username: string; comment: string; rating: number }) => {
    setReviews((prevReviews) => [...prevReviews, review]);
  };

  return (

    < Container maxWidth="lg" >
      {loading ? <Typography>Loading</Typography> : <></>}
      {error ? <Typography>Some Error Occured</Typography> : <></>}
      {website ?
        <div>
          <BreadcrumbsNavigation />
          <WebsiteOverview website={website} />
          <WebsiteDetails description={website.description} features={website.tags} />
          <UserReviews reviews={reviews} onAddReview={() => setDialogOpen(true)} />
          <RelatedWebsites relatedWebsites={relatedWebsites} />
          <AddReviewDialog open={isDialogOpen} onClose={() => setDialogOpen(false)} onSubmit={handleAddReview} />
        </div >
        : <Typography>Some Error Occured</Typography>}
    </Container >
  )
}

export default WebsiteDetailPage;
