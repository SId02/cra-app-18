import axios from "axios"



export const paginate = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const getPosts = async (pageParam = 1) => {
    const response = await paginate.get(`/posts?_page=${pageParam}`)
    return response.data
}