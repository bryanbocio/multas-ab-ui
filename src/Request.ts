import axios from "axios";
const newRequest = (token:string) => {
  return axios.create({
    baseURL: "https://localhost:5001/api/",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};




export default newRequest;
