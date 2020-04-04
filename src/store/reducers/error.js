import { SET_ERROR, REMOVE_ERROR } from '../actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    case REMOVE_ERROR:
      return null;
    default:
      return state;
  }
};
