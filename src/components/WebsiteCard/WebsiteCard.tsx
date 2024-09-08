import React from 'react';
import { Card, CardContent, CardActions, Typography, Link, Button, Chip, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Website } from '../../types/website';
import { AppRoute } from '../../routes/constants';
import { getTranslation } from '../../services/translationService';

interface WebsiteCardProps {
  website: Website;
}

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website }) => {
  return (
    <Card sx={{
      display: 'flex', flexDirection: 'column',
      height: '100%', width: '100%'
    }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link component={RouterLink} to={`/website/${website.id}`} underline="none">
            {website.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {website.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {website.tags.map(tag => <Chip label={tag} variant="outlined" />)}
        </Stack>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto' }}>
        <Link component={RouterLink} to={AppRoute.WEBSITE_DETAIL + '/' + website.id} underline='none'>
          <Button size='small' color='primary'>
            {getTranslation('READ_MORE')}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default WebsiteCard;

