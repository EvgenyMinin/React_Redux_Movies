import {combineReducers} from 'redux';

import toggle from './components/Toggle/reducer';
import movies from './components/Movies/reducer';

const rootReducer = combineReducers({
  toggle,
  movies
});

export default rootReducer;
