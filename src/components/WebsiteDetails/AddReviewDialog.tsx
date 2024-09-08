import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Rating } from '@mui/material';

interface AddReviewDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (review: { username: string; comment: string; rating: number }) => void;
}

const AddReviewDialog: React.FC<AddReviewDialogProps> = ({ open, onClose, onSubmit }) => {
  const [review, setReview] = useState({ username: '', comment: '', rating: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(review);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add a Review</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="username"
          label="Username"
          type="text"
          fullWidth
          value={review.username}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="comment"
          label="Comment"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={review.comment}
          onChange={handleChange}
        />
        <Rating
          name="rating"
          value={review.rating}
          onChange={(event, newValue) => setReview((prevReview) => ({ ...prevReview, rating: newValue ?? 0 }))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddReviewDialog;
