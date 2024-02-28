import axios from "axios";

export const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

export const getPosts = async (pageParam = 1) => {
	const response = await api.get(`/posts?_page=${pageParam}`);
	return response.data;
};

export const getSearch = async () => {
	const response = await api.get("/posts");
	return response.data;
};
