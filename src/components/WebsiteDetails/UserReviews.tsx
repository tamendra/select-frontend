import React from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Review {
  username: string;
  comment: string;
  rating: number;
}

interface UserReviewsProps {
  reviews: Review[];
  onAddReview: () => void;
}

const UserReviews: React.FC<UserReviewsProps> = ({ reviews, onAddReview }) => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h3" gutterBottom>
        User Reviews
      </Typography>
      <List>
        {reviews.map((review, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={review.username}
                secondary={
                  <>
                    <Typography variant="body2" color="text.secondary">
                      {review.comment}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Rating: {review.rating} / 5
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < reviews.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
      <Button variant="outlined" color="primary" sx={{ mt: 2 }} onClick={onAddReview}>
        Add a Review
      </Button>
    </Box>
  );
};

export default UserReviews;
