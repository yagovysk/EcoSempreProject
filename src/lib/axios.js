import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
})

export const apiPostman = axios.create({
  baseURL: 'https://countriesnow.space/api/v0.1',
})
