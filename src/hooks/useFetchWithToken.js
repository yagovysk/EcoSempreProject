import useSWR from 'swr'
import api from '../lib/axios'

async function fetchWithToken(url, token) {
  const response = await api
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)
  return response
}

export function useFetchWithToken(endpoint, token, options = {}) {
  const response = useSWR(
    [endpoint, token],
    ([url, token]) => fetchWithToken(url, token),
    options,
  )

  return {
    ...response,
  }
}
