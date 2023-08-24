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

const queryCollectFormSchema = z.object({
  address: z.string().nonempty('Digite um endereço'),
  category: z.string().optional(),
})

const categories = ['Óleo', 'Tecnologia', 'Resíduos']

const pontosColeta = [
  {
    id: 1,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 2,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 3,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 4,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 5,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 6,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 7,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 8,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
  {
    id: 9,
    title: 'Ministério do Meio Ambiente',
    address:
      'Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília',
    cep: '70068-900',
    state: 'Brasília - DF',
  },
]

export function QueryCollectForm({ setPontosColeta, setCoordinates }) {
  const fieldsId = useId()

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    callbackName: 'Loading',
  })

  console.log(status)
  console.log(value)

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

    setCoordinates({
      lat,
      lng,
    })
    setPontosColeta(pontosColeta)
  }

  function queryPontosColeta(data) {
    handleSelect(data.address)
    console.log(data)
    setPontosColeta(pontosColeta)
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
              render={({ field }) => (
                <Combobox
                  value={value}
                  onChange={(e) => {
                    handleSelect(e)
                    field.onChange(e)
                  }}
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
                    className={`input-form ${
                      errors.address &&
                      'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
                    }`}
                    disabled={!ready}
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
                // <Input.Field
                //   placeholder="Digite um endereço"
                //   aria-label="Digite um endereço"
                //   aria-describedby={`${fieldsId}-address`}
                //   value={value}
                //   onChange={(e) => setValue(e.target.value)}
                //   disabled={!ready}
                // />
              )}
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
                <Select placeholder="Selecione uma categoria" {...field}>
                  {categories.map((category) => {
                    return (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    )
                  })}
                </Select>
              )
            }}
          />

          <div className={styles.location_input}>
            <Icon icon="icon-park-solid:local-two" aria-hidden />
            <span>Minha Localização Atual</span>
          </div>
        </FormProvider>

        <button type="submit" className={`btn ${styles.btn_collects}`}>
          Ver Todos os Pontos de Coleta
        </button>
      </form>
    </ScrollReveal>
  )
}
