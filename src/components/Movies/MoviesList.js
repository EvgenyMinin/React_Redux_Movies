import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "./actions";

import Movie from "./Movie";

const MoviesList = ({ movies, getMovies, isLoaded, moviesLoadedAt }) => {
  useEffect(() => {
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || new Date() - new Date(moviesLoadedAt) > oneHour) {
      getMovies();
    }
  }, [isLoaded]);

  if (!isLoaded) return <h1>Loading...</h1>;

  return (
    <MoviesGrid>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MoviesGrid>
  );
};

const mapStateToProps = (state) => ({
  movies: state.searchedMovies.searchedMovies.length > 0 ? state.searchedMovies.searchedMovies : state.movies.movies,
  isLoaded: state.movies.isMovieListLoaded,
  moviesLoadedAt: state.movies.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

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
