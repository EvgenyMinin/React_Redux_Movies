import { GET_MOVIES } from "./actions";

const initialState = {
  movies: [],
  isMovieListLoaded: false,
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data, isMovieListLoaded: true };
    default:
      return state;
  }
}
