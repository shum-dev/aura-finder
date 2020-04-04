import { combineReducers } from 'redux';

import repos from './repos';
import error from './error';

const rootReducer = combineReducers({
  repos,
  error,
});

export default rootReducer;
