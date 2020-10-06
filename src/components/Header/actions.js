import { SEARCH_MOVIE } from "../../api/api";

export const GET_SEARCH_MOVIE = "GET_SEARCH_MOVIE";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export function getSearchMovies(searchQuery) {
  return async function (dispatch) {
    const res = await fetch(`${SEARCH_MOVIE}${searchQuery}`);
    const data = await res.json();
    return dispatch({
      type: "GET_SEARCH_MOVIE",
      data: data.results,
      searchQuery: searchQuery
    });
  };
}

export function clearSearch() {
  return {
    type: "CLEAR_SEARCH",
  };
}
