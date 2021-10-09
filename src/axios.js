import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}`,
  timeout: 1000,
});

export default axiosInstance;
