import axios from "axios";


export const api_base_url = process.env.NEXT_PUBLIC_API_URL || "https://coconut-sever.online";

export const Api = axios.create({
  baseURL: api_base_url + "/api",
  headers: {
    "Content-Type": "application/json",
    },
    timeout: 10000, // Set a timeout of 10 seconds
});