import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import { getSearchMovies, clearSearch } from "./actions";

const Search = ({ getSearchMovies, clearSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getSearchMovies(searchTerm);
    } else {
      clearSearch()
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
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

const mapStateToProps = (state) => ({
  movies: state.searchedMovies.searchedMovies,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getSearchMovies,
      clearSearch
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);

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
