import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from "./actions";

const initialState = {
  movies: [],
  isMovieListLoaded: false,
  movie: {},
  isMovieItemLoaded: false,
};

export default function (state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: data, isMovieListLoaded: true };
    case GET_MOVIE:
      return { ...state, movie: data, isMovieItemLoaded: true };
    case RESET_MOVIE:
      return { ...state, movie: {}, isMovieItemLoaded: false };
    default:
      return state;
  }
}
