import axios from "axios";

const token = JSON.parse(localStorage.getItem("user")!) || null;
const newRequest = axios.create({
  baseURL: "https://localhost:5001/api/",
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});

export default newRequest;
