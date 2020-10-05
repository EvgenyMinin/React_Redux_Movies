import {combineReducers} from 'redux';

import toggle from './components/Toggle/reducer';
import movies from './components/Movies/reducer';
import searchedMovies from './components/Header/reducer';

const rootReducer = combineReducers({
  toggle,
  movies,
  searchedMovies
});

export default rootReducer;
