// src/axiosInstance.js
import axios from "axios";

// Create an axios instance
const axiosAppointments = axios.create({
  baseURL: "http://localhost:8081/api/v1", // replace with your default root link
});

// Add a request interceptor to include the Bearer token
axiosAppointments.interceptors.request.use(
  (config) => {
    // Get the token from localStorage
    const token = localStorage.getItem("idToken");
    if (token) {
      // If the token exists, include it in the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

export default axiosAppointments;
