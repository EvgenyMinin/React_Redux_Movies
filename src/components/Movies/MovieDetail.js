import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { getMovie, resetMovie } from "./actions";

import { Poster } from "./Movie";

import { BACKDROP_PATH, POSTER_PATH } from "../../api/api";

const MovieDetail = ({ movie, getMovie, isLoadedMovie, resetMovie }) => {
  const { id } = useParams();

  useEffect(() => {
    if (!isLoadedMovie) {
      getMovie(id);
    }

    return () => {
      resetMovie();
    };
  }, []);

  if (!movie.id) return null;

  const { backdrop_path, poster_path, title, release_date, overview } = movie;

  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
      <MoreInfo>
        <PosterWrapper>
          <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
        </PosterWrapper>
        <InfoWrapper>
          <h1>{title}</h1>
          <h3>{release_date}</h3>
          <p>{overview}</p>
        </InfoWrapper>
      </MoreInfo>
    </MovieWrapper>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  isLoadedMovie: state.movies.isMovieItemLoaded,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getMovie,
      resetMovie,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MoreInfo = styled.div`
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  justify-content: center;
  background-color: white;
  img {
    width: auto;
    position: relative;
    top: -5rem;
  }
`;

const PosterWrapper = styled.div`
  margin-right: 32px;
`;

const InfoWrapper = styled.div`
  max-width: 50%;
`;
