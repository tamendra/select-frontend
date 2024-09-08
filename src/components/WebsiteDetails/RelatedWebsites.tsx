import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

interface RelatedWebsite {
  id: number;
  title: string;
  image: string;
  shortDescription: string;
}

interface RelatedWebsitesProps {
  relatedWebsites: RelatedWebsite[];
}

const RelatedWebsites: React.FC<RelatedWebsitesProps> = ({ relatedWebsites }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Related Websites
      </Typography>
      <Grid container spacing={4}>
        {relatedWebsites.map((website) => (
          <Grid item xs={12} sm={6} md={3} key={website.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={website.image}
                alt={website.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {website.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {website.shortDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedWebsites;
