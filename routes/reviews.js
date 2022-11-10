//require express and express router as shown in lecture code
const express = require('express');
const router = express.Router();
const data = require('../data');
const validate = require('../helpers')
const reviewData = data.reviews;

router
  .get('/:movieId', async (req, res) => {
    //code here for GET
    const movieId = req.params.movieId;
    validate.checkMissingValues(movieId);
    validate.checkId(movieId);
    validate.checkString(movieId);

    try {
      const newReview = await reviewData.getAllReviews(movieId);
      res.json(newReview);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  })
  .post('/:movieId', async (req, res) => {
    //code here for POST
    const reviewPostData = req.body;
    const movieId = req.params.movieId;
    console.log(reviewPostData)
    console.log(movieId)
    const {reviewTitle, reviewerName, review, rating} = reviewPostData;
    validate.checkRating(rating);
    validate.checkId(movieId);
    validate.checkString(movieId);
    validate.checkString(reviewTitle);
    validate.checkString(reviewerName);
    validate.checkString(review);
    validate.checkMissingValues(movieId);
    validate.checkMissingValues(reviewTitle);
    validate.checkMissingValues(reviewerName);
    validate.checkMissingValues(review);
    validate.checkMissingValues(rating);

    try {
      const newReview = await reviewData.createReview(movieId, reviewTitle, reviewerName, review, rating);
      res.json(newReview);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  });

router
  .get('/review/:reviewId', async (req, res) => {
    //code here for GET
    const reviewId = req.params.reviewId;
    validate.checkMissingValues(reviewId);
    validate.checkId(reviewId);
    validate.checkString(reviewId);

    try {
      const review = await reviewData.getReview(reviewId);
      res.json(review);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  })
  .delete('/review/:reviewId', async (req, res) => {
    //code here for DELETE
    const reviewId = req.params.reviewId;
    validate.checkMissingValues(reviewId);
    validate.checkId(reviewId);
    validate.checkString(reviewId);

    try {
      const review = await reviewData.removeReview(reviewId);
      res.json(review);
    } catch (e) {
      res.status(500).json({error: e});
    }
  });

  module.exports = router;
