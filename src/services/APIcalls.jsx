import axios from "axios";

export const getProducts = axios.get("/api/products");

export const getCategories = axios.get("/api/categories");
