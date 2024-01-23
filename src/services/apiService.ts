import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const apiService: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 90000,
});

apiService.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers["Accept"] = "application/json";
    const accessToken = `Bearer ${localStorage["token"]}`;
    if (localStorage["token"]) {
      config.headers["authorization"] = accessToken;
    }
    console.log('config', config)
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiService;