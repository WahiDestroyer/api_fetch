import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Conten-Type": "application/json",
  },
});

api.interceptors.request.use(
  (confiq) => {
    const token = "tokenasdlkfjsd asdvalj;l asdjgds";
    console.log(token);

    if (token) {
      confiq.headers.Authorization = token;
    }
    return confiq;
  },

  (err) => {
    return Promise.reject(err);
  }
);

export const blogservices = {
  blog: async () => {
    const res = await api.get("/products");
    return res.data;
  },
  blogdetails: async (id) => {
    const res = await api.get(`/products/${id}`);
    return res.data;
  },
};
