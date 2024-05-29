import axios from "axios";

export const API = axios.create({
    baseURL: "https://farmacia-nest.onrender.com/"
})