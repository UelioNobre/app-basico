
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

async function Get(endpoint = "") {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados GET", error);
    throw error;
  }
}

async function Post(endpoint = "", data = null) {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar dados POST", error);
    throw error;
  }
}

async function Put(endpoint = "", data = null) {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar dados PUT", error);
    throw error;
  }
}

async function Delete(endpoint) {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar dados DELETE", error);
    throw error;
  }
}

export default { Get, Post, Put, Delete };
