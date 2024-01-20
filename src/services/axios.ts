import axios from "axios";

const apiService = axios.create({
  baseURL: 'http://localhost:5173/',
  timeout: 90000,
});// Add a request interceptor
const defaultHeader = {
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded",
}

apiService.interceptors.request.use((
  config) => {
  let accessToken = `Bearer ${localStorage["token"]}`;
  if (localStorage["token"]) {
    // token = localStorage["token"];
    config.headers = {
      ...defaultHeader,
      authorization: accessToken,
    };
  } else {
    // console.log(token);
    config.headers = {
      ...defaultHeader,
    };
  }
  return config;
},
  (error) => {
    return Promise.reject(error);
  });


apiService.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default apiService