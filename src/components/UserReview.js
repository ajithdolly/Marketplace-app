import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Review = () => {
  const [review, setReview] = useState('');
  const [submittedReview, setSubmittedReview] = useState('');

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = () => {

    setSubmittedReview(review);
  };

  return (
    <Container maxWidth="sm" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '16px', width: '100%', maxWidth: '400px' }}>
        <Typography variant="h4" align="center">Write a Review</Typography>
        <TextField
          label="Your Review"
          multiline
          rows={4}
          value={review}
          onChange={handleReviewChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleReviewSubmit} fullWidth>
          Submit Review
        </Button>
        {submittedReview && (
          <Paper elevation={2} style={{ marginTop: '16px', padding: '16px' }}>
            <Typography variant="h6">Your Review:</Typography>
            <Typography variant="body1">{submittedReview}</Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  );
};



export default Review
