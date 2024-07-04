import axios from "axios";
import { config } from "Constants"

export default axios.create({
  baseURL: config.url.API_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});