import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getSearchMovies, clearSearch } from "./actions";

const Search = () => {
  const searchTerm = useSelector(state => state.searchedMovies.searchQuery);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(getSearchMovies(searchTerm));
    } else {
      dispatch(clearSearch());
    }
  };

  const handleChange = (e) => {
    dispatch(getSearchMovies(e.target.value));
  };

  return (
    <SearchBoxWrapper>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </SearchBoxWrapper>
  );
};

export default Search;

const SearchBoxWrapper = styled.section`
  width: 100%;
  max-width: 400px;
  input {
    width: 100%;
    height: 40px;
    border-radius: 40px;
    border: 1px solid gray;
    background-color: transparent;
    border-color: white;
    color: white;
    padding: 0.5rem 1.5rem;
    &:focus {
      outline: 0;
    }
  }
`;
