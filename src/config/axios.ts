import { apiService } from "../services";


apiService.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    apiService.interceptors.request.use(
      (config) => {
        if (localStorage.getItem("token")) {
          token = localStorage.getItem("token");
          config.headers = {
            ...headerDefaults,
            Authorization: `Bearer ${token}`,
          }
        } else {
          config.headers = {
            ...headerDefaults,
          }
        }
      }
    )
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
apiService.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });