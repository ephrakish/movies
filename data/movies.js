const mongoCollections = require('../config/mongoCollections');
const {ObjectId} = require('mongodb');
const movies = mongoCollections.movies;

const createMovie = async (
  title,
  plot,
  genres,
  rating,
  studio,
  director,
  castMembers,
  dateReleased,
  runtime
) => {
  const newMovie = {
    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    director: director,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime,
    reviews: [],
    overallRating: 0
  }
  const movieCollection = await movies();
  const newInsertedMovie = await movieCollection.insertOne(newMovie);
    const newId = newInsertedMovie.insertedId;
    return await movieCollection.findOne({_id: ObjectId(newId)});
};

const getAllMovies = async () => {
  const movieCollection = await movies();
  return await movieCollection.find({}, {projection: {_id: 1, title: 1}}).toArray();
};

const getMovieById = async (movieId) => {
  const movieCollection = await movies();
  const movie = await movieCollection.findOne({_id: ObjectId(movieId)});

  if (!movie) throw 'Movie not found';
  return movie;
};

const removeMovie = async (movieId) => {
  const movieCollection = await movies();
  const deletedMovieInfo = await movieCollection.deleteOne({_id: ObjectId(movieId)});
    if (deletedMovieInfo.deletedCount === 0) {
      throw `Could not delete movie with id of ${movieId}`;
    }
    return true;
};

const updateMovie = async (
  movieId,
  title,
  plot,
  genres,
  rating,
  studio,
  castMembers,
  dateReleased,
  runtime
) => {
  const updatedMovieFields = {
    title: title,
    plot: plot,
    genres: genres,
    rating: rating,
    studio: studio,
    castMembers: castMembers,
    dateReleased: dateReleased,
    runtime: runtime
  };
  const movieCollection = await movies();
  await movieCollection.updateOne(
    {_id: ObjectId(movieId)},
    {$set: updatedMovieFields}
  );
  return await movieCollection.findOne({_id: ObjectId(movieId)});
};

const renameMovie = async (id, newName) => {
  //Not used for this lab
};

module.exports = {createMovie, getAllMovies, getMovieById, removeMovie, updateMovie};
