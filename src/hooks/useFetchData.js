import useSWR from 'swr'
import api from '../api/posts'

const fetcher = async (...args) => {
  const response = await api.get(...args).then((res) => res.data)

  if (response.error) {
    throw new Response('', {
      status: response.error.status,
      statusText: response.error.statusText,
      message: response.error.message,
    })
  }

  return response
}

export function useFetchData(endpoint) {
  const response = useSWR(endpoint, fetcher)

  if (response.error) {
    try {
      throw new Response('', {
        status: response.error.request.status,
        statusText: response.error.request.statusText,
        message: response.error.message,
      })
    } catch (err) {
      throw new Response('', {
        status: 500,
        statusText: response.error.message,
      })
    }
  }

  return {
    ...response,
  }
}
