import React from 'react';
import { Typography } from '@mui/material';
import useFetchData from '../../hooks/fetchData';
import { fetchWebsites } from '../../services/websiteService';
import { Website } from '../../types/website';
import WebsiteCard from '../WebsiteCard/WebsiteCard';


//TO DO Website listing page & website card
const WebsiteList: React.FC = () => {
  const { data: websites, loading, error } = useFetchData<Website>(fetchWebsites);

  return (
    <div>
      {loading ? <Typography>Loading</Typography> : <></>}
      {error ? <Typography>Some Error Occured</Typography> : <></>}
      {websites.map((website) => (
        <WebsiteCard website={website} />
      ))}
    </div>
  );
};

export default WebsiteList;
