import axios from "axios";

const api = axios.create({
  baseURL: "https://api.dev.wdtek.xyz",
});

export default api;
