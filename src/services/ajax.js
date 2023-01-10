import axios from "axios";

axios.defaults.baseURL = "https://api.github.com";
axios.defaults.headers.common.Accept = "github.v3";

function apiCall(method, path) {
  return axios[method](path)
    .then((res) => res)
    .catch((err) => err.message);
}

export default apiCall;
