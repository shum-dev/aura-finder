import { SET_REPO_LIST, RESET_REPO_LIST } from '../actionTypes';
import apiCall from '../../services/ajax';
import { setError } from './error';

const setReposList = (repos) => ({
  type: SET_REPO_LIST,
  repos,
});

export const resetReposList = () => ({
  type: RESET_REPO_LIST,
});

export const fetchRepos = (username) => async (dispatch) => {
  try {
    const data = await apiCall('get', `/users/${username}/repos`);
    dispatch(setReposList(data));
    return data;
  } catch (err) {
    dispatch(setError(err));
    throw err;
  }
};
