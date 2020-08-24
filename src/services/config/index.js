import axios from "axios";

export const createInstance = () => axios.create({
 baseURL: "",
 headers: {
  Authorization: localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : ""
 }
});
