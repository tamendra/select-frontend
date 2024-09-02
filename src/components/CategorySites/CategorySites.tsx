import React from 'react';
import { Typography } from '@mui/material';
import { fetchWebsitesByCategory } from '../../services/websiteService';
import useFetchData from '../../hooks/fetchData';
import { Website } from '../../types';
import { useParams } from 'react-router-dom';
import WebsiteCard from '../WebsiteCard/WebsiteCard';

const CategoriesSites: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: websites } = useFetchData<Website>(fetchWebsitesByCategory);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Sites in Category {id}
      </Typography>
      {websites.map((website) => (
        <WebsiteCard website={website} />
      ))}
    </>
  );
};

export default CategoriesSites;
