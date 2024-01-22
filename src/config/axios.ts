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
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


apiService.interceptors.response.use(
  (response) => {
    return response;
  }, (error) => {
    return Promise.reject(error);
  });