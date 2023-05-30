// // axiosConfig.js
// import axios from 'axios';

// // Set the base URL for your API
// axios.defaults.baseURL = 'http://your-api-url.com';

// // Create an Axios instance
// const instance = axios.create();

// // Add an interceptor to modify the requests before they are sent
// instance.interceptors.request.use((config) => {
//   const accessToken = // Get the access token from wherever it is stored (e.g., localStorage)

//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }

//   return config;
// });

// export default instance;
import axios from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;