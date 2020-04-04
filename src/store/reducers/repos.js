import { SET_REPO_LIST, RESET_REPO_LIST } from '../actionTypes';


export default (state = [], action) => {
  switch (action.type) {
    case SET_REPO_LIST:
      return action.repos;
    case RESET_REPO_LIST:
      return [];
    default:
      return state;
  }
};
