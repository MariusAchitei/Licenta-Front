import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Retrieve the token from session storage
    const token = sessionStorage.getItem("token");

    // If a token exists, add it to the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (config.data) {
      config.data = transformObjectKeys(config.data, camelToKebabCase);
    }

    return config;
  },
  function (error) {
    // Handle any errors
    return Promise.reject(error);
  },
);

function transformObjectKeys(obj, transformKey) {
  if (obj !== null && typeof obj === "object") {
    if (Array.isArray(obj)) {
      return obj.map((item) => transformObjectKeys(item, transformKey));
    } else {
      return Object.keys(obj).reduce((acc, key) => {
        const kebabKey = transformKey(key);
        acc[kebabKey] = transformObjectKeys(obj[key], transformKey);
        return acc;
      }, {});
    }
  }
  return obj;
}

function camelToKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export default axiosInstance;
