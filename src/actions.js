import { ROOT_PATH } from "./api/api";

export const TOGGLE_MESSAGE = "TOGGLE_MESSAGE";
export const GET_MOVIES = "GET_MOVIES";

export function toggleMessage() {
  return {
    type: "TOGGLE_MESSAGE",
  };
}

export function getMovies() {
  return async function (dispatch) {
    const res = await fetch(ROOT_PATH);
    const data = await res.json();
    return dispatch({
      type: "GET_MOVIES",
      data: data.results,
    });
  };
}
