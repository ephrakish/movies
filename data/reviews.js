const mongoCollections = require('../config/mongoCollections');
const {ObjectId} = require('mongodb');
const movies = mongoCollections.movies;

const createReview = async (
  movieId,
  reviewTitle,
  reviewerName,
  review,
  rating
) => {
  const newDate = new Date()
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/');
  }
  const newestDate = formatDate(newDate)
  console.log(newestDate);

  const reviewData = {
    id: ObjectId(),
    reviewTitle: reviewTitle,
    reviewerName: reviewerName,
    review: review,
    rating: rating,
    reviewDate: newestDate
  }
  
  const movieCollection = await movies();
  await movieCollection.updateOne(
    {_id: ObjectId(movieId)},
    {$addToSet: {reviews: reviewData}}
  );
  return await movieCollection.findOne({_id: ObjectId(movieId)});
};

const getAllReviews = async (movieId) => {
  const movieCollection = await movies();
  const reviews = await movieCollection.findOne({_id: ObjectId(movieId)}, {projection: {reviews: 1}});
  if (!reviews) throw 'Movie not found';
  return reviews;
};


const getReview = async (reviewId) => {
  const movieCollection = await movies();
  const reviews = await movieCollection.findOne({reviews: {$elemMatch: {id: ObjectId(reviewId)}}}, {projection: {'reviews.$': 1, _id: 0}});
  // const review = await movieCollection.findOne({'reviews.id': ObjectId(reviewId)}, {'reviews.id.$': 1});
  if (!reviews) throw 'Review not found';
  const review = reviews.reviews[0];
  return review;
};

const removeReview = async (reviewId) => {
  const movieCollection = await movies();
  const reviews = await movieCollection.findOne({reviews: {$elemMatch: {id: ObjectId(reviewId)}}}, {projection: {'reviews.$': 1, _id: 1}});
  if (reviews === null) {
    throw 'Review not found'
  };
  console.log(reviews._id)
  const removedReviews = await movieCollection.updateOne(
    {_id: reviews._id}, 
    {"$pull": {reviews: {id: ObjectId(reviewId)}}}, 
    { multi: true });
  return removedReviews;
};

module.exports = {createReview, getAllReviews, getReview, removeReview};
