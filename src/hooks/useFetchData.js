import useSWR from 'swr'
import api from '../lib/axios'

const fetcher = async (url) => {
  const response = await api.get(url).then((res) => res.data)
  return response
}

export function useFetchData(endpoint, options = {}) {
  const response = useSWR(endpoint, fetcher, options)

  return {
    ...response,
  }
}
