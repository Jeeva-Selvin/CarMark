import axios from "axios";

const instance = axios.create({
  baseURL: "https://carmark.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;