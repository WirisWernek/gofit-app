// 192.168.18.19

import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.18.19:5000",
});

export default api;
