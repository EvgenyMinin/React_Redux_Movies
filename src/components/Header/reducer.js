import { GET_SEARCH_MOVIE, CLEAR_SEARCH } from "./actions";

const initialState = {
  searchedMovies: [],
  searchQuery: '',
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_SEARCH_MOVIE:
      return { ...state, searchedMovies: data };
    case CLEAR_SEARCH:
      return { ...state, searchedMovies: [] };
    default:
      return state;
  }
}
