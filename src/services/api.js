import axios from "axios";

// Instância de axios
const api = axios.create({
  baseURL: "https://dhodonto.ctdprojetos.com.br",
});

export default api;
