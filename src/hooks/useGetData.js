import { useEffect, useState } from 'react'
import api from '../api/posts'

export function useGetData(endpoint, dependencies = []) {
  const [data, setData] = useState('')
  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get(endpoint)
        setData(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    getData()
  }, dependencies)

  return data
}
