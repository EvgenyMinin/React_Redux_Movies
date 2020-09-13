import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Poster } from "../MoviesList/Movie";

import { BACKDROP_PATH, POSTER_PATH } from "../../api/api";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchMovie = async () => {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      };
      fetchMovie();
    } catch (e) {
      console.log(e);
    }
  }, [id]);

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

export default MovieDetail;

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
