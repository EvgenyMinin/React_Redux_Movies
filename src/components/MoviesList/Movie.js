import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { POSTER_PATH } from "../../api/api";

const Movie = ({ movie: { id, poster_path, title } }) => {
  return (
    <Link to={`/${id}`}>
      <PosterWrapper>
        <Poster src={`${POSTER_PATH}${poster_path}`} alt={title} />
      </PosterWrapper>
    </Link>
  );
};

export default Movie;

const PosterWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 24px;
`;

export const Poster = styled.img`
  width: 100%;
  box-shadow: 0 0 35px white;
`;
