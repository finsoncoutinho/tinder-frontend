import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-9tvs.onrender.com/",
});

export default instance;
