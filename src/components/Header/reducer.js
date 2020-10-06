import { GET_SEARCH_MOVIE, CLEAR_SEARCH } from "./actions";

const initialState = {
  searchedMovies: [],
  searchQuery: "",
};

export default function (state = initialState, action) {
  const { type, data, searchQuery } = action;

  switch (type) {
    case GET_SEARCH_MOVIE:
      return { ...state, searchedMovies: data, searchQuery: searchQuery };
    case CLEAR_SEARCH:
      return { ...state, searchedMovies: [], searchQuery: "" };
    default:
      return state;
  }
}
