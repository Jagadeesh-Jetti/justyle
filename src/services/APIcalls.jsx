import axios from "axios";

export const getProducts = async () => axios.get("/api/products");

export const getCategories = async () => axios.get("/api/categories");
