import { ROOT_PATH } from "../../api/api";

export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE = "RESET_MOVIE";

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch(ROOT_PATH);
    const data = await res.json();
    console.log('data', data);
    return dispatch({
      type: 'GET_MOVIES',
      data: data.results,
    });
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
    );
    const movie = await res.json();
    console.log('movie', movie);
    return dispatch({
      type: 'GET_MOVIE',
      data: movie,
    });
  };
}

export function resetMovie() {
  return {
    type: 'RESET_MOVIE',
  }
}
