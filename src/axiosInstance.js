import axios from "axios";
import { clearUserData, logout } from "./actions/Auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      logout();
    }
    window.location.href = "/login";
    return Promise.reject(error);
  }
);

export default api;
