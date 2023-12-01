import { Select } from '../Form/Select'
import { SelectItem } from '../Form/Select/SelectItem'
import useSWR from 'swr'
import { apiPostman } from '../../lib/axios'
import { forwardRef } from 'react'

export const StatesSelectInput = forwardRef((props, ref) => {
  const {
    data: country,
    isLoading,
    error,
  } = useSWR(
    '/countries/states',
    async (url) => {
      const response = await apiPostman
        .post(url, {
          country: 'Brazil',
        })
        .then((response) => response.data)
      return response
    },
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  )

  if (error) {
    throw new Response('', {
      status: error.response.status,
      statusText: error.response.statusText,
    })
  }

  return (
    <Select ref={ref} disabled={isLoading} {...props}>
      {country &&
        country.data.states.map((state) => (
          <SelectItem key={state.state_code} value={state.name}>
            {state.name}
          </SelectItem>
        ))}
    </Select>
  )
})

StatesSelectInput.displayName = 'StatesSelectInput'
