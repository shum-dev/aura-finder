import { SET_REPO_LIST, RESET_REPO_LIST } from "../actionTypes";
import apiCall from "../../services/ajax";
import { setError } from "./error";

const setReposList = (repos) => ({
  type: SET_REPO_LIST,
  repos,
});

export const resetReposList = () => ({
  type: RESET_REPO_LIST,
});

export const fetchRepos = (username) => async (dispatch) => {
  let repoList = [];
  let page = 1;
  let lastPage = false;

  try {
    while (!lastPage) {
      const { data, headers } = await apiCall(
        "get",
        `/users/${username}/repos?page=${page}&per_page=100`
      );

      repoList = [...repoList, ...data];
      dispatch(setReposList(repoList));
      lastPage = !headers.link?.includes('rel="next"');
      page++;
    }
  } catch (err) {
    dispatch(setError(err));
    throw err;
  }
};
