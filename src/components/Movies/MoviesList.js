import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ROOT_PATH } from "../../api/api";

import Movie from "./Movie";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await fetch(ROOT_PATH);
        const data = await res.json();
        setMovies(data.results);
      };
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

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
