import { z } from 'zod'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { Icon } from '@iconify/react'

import { Select } from '../../../../components/Form/Select'
import { SelectItem } from '../../../../components/Form/Select/SelectItem'
import { ScrollReveal } from '../../../../components/ScrollReveal'
import { Input } from '../../../../components/Form/Input'
import { ErrorMessage } from '../../../../components/Form/ErrorMessage'

import styles from './styles.module.css'
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete'
import { Combobox } from '@headlessui/react'
import { useColetasContext } from '../../../../contexts/ColetasContext'
import { Link } from 'react-router-dom'
import { useFetchData } from '../../../../hooks/useFetchData'

const queryCollectFormSchema = z.object({
  address: z.string().nonempty('Digite um endereço'),
  category: z.string().optional(),
})

export function QueryCollectForm() {
  const fieldsId = useId()
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data, loading },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      componentRestrictions: {
        country: 'br',
      },
      language: 'pt-BR',
    },
  })

  const {
    updateUserAddressCoordinates,
    mapRef,
    error: apiError,
  } = useColetasContext()

  const { data: categories, isLoading } = useFetchData(
    '/categories-collection-points',
  )

  const queryCollect = useForm({
    resolver: zodResolver(queryCollectFormSchema),
    defaultValues: {
      address: '',
      category: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = queryCollect

  const handleSelect = async (val) => {
    setValue(val, false)
    clearSuggestions()

    const results = await getGeocode({
      address: val,
    })

    const { lat, lng } = getLatLng(results[0])
    const position = {
      lat,
      lng,
    }

    updateUserAddressCoordinates(position)
    mapRef && mapRef.current.panTo(position)
  }

  function queryPontosColeta(data) {
    handleSelect(data.address)
  }

  return (
    <ScrollReveal origin="top" className={`h-auto w-auto flex-1 mx-6 xl:mx-0`}>
      <form
        onSubmit={handleSubmit(queryPontosColeta)}
        className={`bg-white rounded grid gap-5 sm:gap-6 sm:px-6 lg:p-11 lg:shadow-[0px_12px_56px_0px_#10295421]`}
        method="post"
      >
        <FormProvider {...queryCollect}>
          <Input.Root>
            <Controller
              name="address"
              control={control}
              render={({ field }) => {
                return (
                  <Combobox
                    value={value}
                    onChange={(e) => {
                      handleSelect(e)
                      field.onChange(e)
                    }}
                    disabled={!ready || apiError}
                  >
                    <Combobox.Input
                      placeholder="Digite um endereço"
                      aria-label="Digite um endereço"
                      value={value}
                      onChange={(e) => {
                        setValue(e.target.value)
                        field.onChange(e)
                      }}
                      aria-describedby={`${fieldsId}-address`}
                      className={`input-form disabled:cursor-not-allowed ${
                        errors.address &&
                        'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
                      }`}
                    />
                    <Combobox.Options className="absolute top-20 w-full shadow-md bg-white py-4 rounded-lg">
                      {status === 'OK' && data ? (
                        data.map(({ place_id: placeId, description }) => (
                          <Combobox.Option
                            className="data-[headlessui-state='active']:bg-green-300 text-sm py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
                            key={placeId}
                            value={description}
                          >
                            {description}
                          </Combobox.Option>
                        ))
                      ) : (
                        <Combobox.Option className="px-4 py-1 text-sm text-gray-[#3A3A3C]">
                          Nenhum endereço encontrado
                        </Combobox.Option>
                      )}
                    </Combobox.Options>
                  </Combobox>
                )
              }}
            />
            {errors.address && (
              <ErrorMessage id={`${fieldsId}-address`} className="!static">
                {errors.address.message}
              </ErrorMessage>
            )}
          </Input.Root>

          <Controller
            name="category"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  disabled={!ready || apiError || isLoading}
                  placeholder="Selecione uma categoria"
                  {...field}
                >
                  {categories ? (
                    categories.map((category) => {
                      return (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      )
                    })
                  ) : (
                    <SelectItem value={null}>
                      Nenhuma categoria encontrada
                    </SelectItem>
                  )}
                </Select>
              )
            }}
          />

          <div className={styles.location_input}>
            <Icon icon="icon-park-solid:local-two" aria-hidden />
            <span>Minha Localização Atual</span>
          </div>
        </FormProvider>

        <Link
          to="/pontos-de-coleta"
          className={`btn ${styles.btn_collects} text-center`}
        >
          Ver Todos os Pontos de Coleta
        </Link>
      </form>
    </ScrollReveal>
  )
}
