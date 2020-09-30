import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { POSTER_PATH } from "../../api/api";

const Movie = ({ movie: { id, poster_path, title, vote_average } }) => {
  let ratingColor = '';
  if (vote_average >= 8) {
    ratingColor = 'green';
  } else if (vote_average >= 6) {
    ratingColor = 'orange'
  } else {
    ratingColor = 'red';
  }
  return (
    <Link to={`/${id}`}>
      <PosterWrapper>
        <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
        <MovieInfo>
          <Title>{title}</Title>
          <Rating className={ratingColor}>{vote_average.toFixed(1)}</Rating>
        </MovieInfo>
      </PosterWrapper>
    </Link>
  );
};

export default Movie;

const PosterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 24px;
  width: 100%;
`;

export const Poster = styled.img`
  width: 100%;
  box-shadow: 0 0 35px black;
`;

const MovieInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #373d6c;
`;

const Title = styled.h3`
  font-family: "Arial";
  font-size: 21px;
  line-height: 32px;
  color: white;
  margin: 0 12px 0 0;

`;

const Rating = styled.span`
  background-color: #21284B;
  border-radius: 4px;
  padding: 0.5rem;
  &.green {
    color: green;
  }
  &.orange {
    color: orange;
  }
  &.red {
    color: #f04c57;
  }
`;
