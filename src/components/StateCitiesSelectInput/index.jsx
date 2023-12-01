import { Select } from '../Form/Select'
import { SelectItem } from '../Form/Select/SelectItem'
import useSWR from 'swr'
import { apiPostman } from '../../lib/axios'
import { forwardRef } from 'react'

export const StateCitiesSelectInput = forwardRef(
  ({ state = '', ...props }, ref) => {
    const {
      data: country,
      isLoading,
      error,
    } = useSWR(
      state ? ['/countries/state/cities', state] : null,
      async ([url, _]) => {
        const response = await apiPostman
          .post(url, {
            country: 'Brazil',
            state,
          })
          .then((response) => response.data)
        return response
      },
      {
        revalidateOnFocus: false,
        revalidateIfStale: false,
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
      <Select ref={ref} {...props}>
        {isLoading && <SelectItem>Carregando...</SelectItem>}

        {!isLoading &&
          country &&
          country.data.map((city) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
      </Select>
    )
  },
)

StateCitiesSelectInput.displayName = 'StateCitiesSelectInput'
