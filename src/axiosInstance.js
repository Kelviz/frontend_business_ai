import axios from "axios";
import store from "./store";
import { refreshAccessToken, logout } from "./actions/Auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add the access token to the request headers
    const accessToken = store.getState().auth.accessToken;
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized access detected
      const originalRequest = error.config;

      // Attempt to refresh the access token
      try {
        await store.dispatch(refreshAccessToken());
        const newAccessToken = store.getState().auth.accessToken;

        if (newAccessToken) {
          // Update the request headers with the new access token
          originalRequest.headers.Authorization = `JWT ${newAccessToken}`;

          // Retry the original request with the new access token
          return api(originalRequest);
        } else {
          // If the access token couldn't be refreshed, logout the user
          store.dispatch(logout());
          return Promise.reject(error);
        }
      } catch (refreshError) {
        // Handle refresh token error
        store.dispatch(logout());
        return Promise.reject(refreshError);
      }
    }

    // Handle other error responses
    return Promise.reject(error);
  }
);

export default api;
