import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';
axios.defaults.headers.common.Accept = 'github.v3';

function apiCall(method, path) {
  return new Promise((resolve, reject) => {
    axios[method](path)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err.message));
  });
}

export default apiCall;
