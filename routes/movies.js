//require express and express router as shown in lecture code
const express = require('express');
const router = express.Router();
const data = require('../data');
const movieData = data.movies;
const validate = require('../helpers')

// createMovie, getAllMovies, getMovieById, removeMovie, updateMovie

router
  .get('/', async (req, res) => {
    //code here for GET
    try {
      const movieList = await movieData.getAllMovies();
      res.json(movieList);
    } catch (e) {
      res.status(500).json({error: e});
    }
  })
  .post('/', async (req, res) => {
    //code here for POST
    const moviePostData = req.body;
    // console.log(moviePostData)
    const {title, plot, genres, rating, studio, director, castMembers, dateReleased, runTime} = moviePostData;
    validate.checkDate(dateReleased);
    validate.checkArray(genres);
    validate.checkArray(castMembers);
    validate.checkRunningTime(runTime);
    validate.checkString(title);
    validate.checkString(plot);
    validate.checkString(rating);
    validate.checkString(studio);
    validate.checkString(director);
    validate.checkString(dateReleased);
    validate.checkString(runTime);
    validate.checkMissingValues(title);
    validate.checkMissingValues(plot);
    validate.checkMissingValues(genres);
    validate.checkMissingValues(rating);
    validate.checkMissingValues(studio);
    validate.checkMissingValues(director);
    validate.checkMissingValues(castMembers);
    validate.checkMissingValues(dateReleased);
    validate.checkMissingValues(runTime);
    try {
      const newMovie = await movieData.createMovie(title, plot, genres, rating, studio, director, castMembers, dateReleased, runTime);
      res.json(newMovie);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  })

router
  .get('/:movieId', async (req, res) => {
    //code here for GET
    const movieId = req.params.movieId;
    validate.checkId(movieId);
    // console.log(movieId)
    try {
      const movie = await movieData.getMovieById(movieId);
      res.json(movie);
    } catch (e) {
      res.status(404).json({error: e});
    }
  })
  .delete('/:movieId', async (req, res) => {
    //code here for DELETE
    const movieId = req.params.movieId;
    validate.checkId(movieId);
    try {
      await movieData.getMovieById(movieId);
    } catch (e) {
      return res.status(404).json({error: e});
    }
    try {
      await movieData.removeMovie(movieId);
      res.status(200).json({movieId: movieId, deleted: true});
    } catch (e) {
      res.status(500).json({error: e});
    }
  })
  .put('/:movieId', async (req, res) => {
    //code here for PUT
    const movieId = req.params.movieId;
    const moviePostData = req.body;
    const {title, plot, genres, rating, studio, director, castMembers, dateReleased, runTime} = moviePostData;
    validate.checkDate(dateReleased);
    validate.checkArray(genres);
    validate.checkArray(castMembers);
    validate.checkId(movieId);
    validate.checkRunningTime(runTime);
    validate.checkString(movieId);
    validate.checkString(title);
    validate.checkString(plot);
    validate.checkString(rating);
    validate.checkString(studio);
    validate.checkString(director);
    validate.checkString(dateReleased);
    validate.checkString(runTime);
    validate.checkMissingValues(movieId);
    validate.checkMissingValues(title);
    validate.checkMissingValues(plot);
    validate.checkMissingValues(genres);
    validate.checkMissingValues(rating);
    validate.checkMissingValues(studio);
    validate.checkMissingValues(director);
    validate.checkMissingValues(castMembers);
    validate.checkMissingValues(dateReleased);
    validate.checkMissingValues(runTime);

    try {
      await movieData.getMovieById(movieId);
    } catch (e) {
      return res.status(404).json({error: e});
    }
    try {
      const updatedMovie = await movieData.updateMovie(movieId, title, plot, genres, rating, studio, director, castMembers, dateReleased, runTime);
      res.json(updatedMovie);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  });

  module.exports = router;
