import axios from 'axios'

const api = axios.create({
    baseURL: '/backend',
})

export const commandOutput = payload => api.post(`/javascript/test`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

const compute = {
    commandOutput,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
}

export default compute