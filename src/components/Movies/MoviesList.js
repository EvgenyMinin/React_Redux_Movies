import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getSearchMovies } from "../Header/actions";
import { getMovies } from "./actions";

import Movie from "./Movie";

const MoviesList = () => {
  const dispatch = useDispatch();
  const moviesState = useSelector(
    (state) => ({
      movies: state.movies.movies,
      searchedMovies: state.searchedMovies.searchedMovies,
      searchQuery: state.searchedMovies.searchQuery,
      isLoaded: state.movies.isMovieListLoaded,
      moviesLoadedAt: state.movies.moviesLoadedAt,
    }),
    shallowEqual
  );

  const { searchQuery, isLoaded, moviesLoadedAt } = moviesState;

  let movies;
  if (searchQuery) {
    movies = moviesState.searchedMovies;
  } else {
    movies = moviesState.movies;
  }

  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour) {
      dispatch(getMovies());
    }

    if (searchQuery) {
      dispatch(getSearchMovies(searchQuery));
    } else {
      dispatch(getMovies());
    }
  }, [isLoaded, searchQuery]);

  if (!isLoaded) return <h1>Loading...</h1>;

  if (searchQuery && moviesState.searchedMovies.length === 0) return <h2>No results were found for your search.</h2>

  return (
    <MoviesGrid>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesGrid>
  );
};

export default MoviesList;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1360px;
  margin: 0 auto;
  a {
    display: flex;
    max-width: 250px;
    width: 100%;
    text-decoration: none;
    margin: 1rem;
  }
`;
