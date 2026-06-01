import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (+error.status === 400) {
      throw error.response.data;
    }
  },
);

export default axiosInstance;
