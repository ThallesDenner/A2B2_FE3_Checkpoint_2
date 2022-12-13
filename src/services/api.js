import axios from "axios";

// Instância de axios
const api = axios.create({
  baseURL: "http://dhodonto.ctdprojetos.com.br",
});

export default api;
