import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { useAdmin } from '../../contexts/AdminContext'
import { Combobox } from '@headlessui/react'
import { Spinner } from '../../components/Loader/Spinner'
import { ErrorMessage } from '../../components/Form/ErrorMessage'
import { Icon } from '@iconify/react'
import { Controller, useFormContext } from 'react-hook-form'

import api from '../../lib/axios'

export function CollectionPointCategoryInput() {
  const {
    data: categories,
    isValidating,
    mutate,
    isLoading,
    error,
  } = useFetchData('/categories-collection-points')
  const { admin } = useAdmin()

  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext()

  const category = watch('category')
  const [query, setQuery] = useState(() => category.name)

  if (isLoading) {
    return <div className="text-gray-800 animate-pulse">Carregando...</div>
  }

  if (error && error.request.status !== 404) {
    return (
      <div className="font-roboto text-gray-600">
        Ocorreu um erro no servidor. Verifique a sua conexão com a internet ou
        tente novamente mais tarde.
      </div>
    )
  }

  const filteredCategories =
    categories &&
    categories.filter((categoryData) =>
      categoryData.name
        .toLowerCase()
        .replaceAll('-', ' ')
        .includes(query.toLowerCase()),
    )

  async function handleAddNewCategory(name, id) {
    if (id) return

    try {
      const newCategoryId = await api
        .post(
          '/category-collection-points',
          {
            name,
          },
          {
            headers: {
              Authorization: `Bearer ${admin.token}`,
            },
          },
        )
        .then((res) => res.data)
      setValue('category', {
        name,
        id: newCategoryId,
      })
      mutate()
    } catch (err) {
      alert('Ocorreu um erro! Não conseguimos adicionar sua categoria.')
    }
  }

  return (
    <Controller
      name="category"
      control={control}
      render={({ field }) => {
        return (
          <div className="relative">
            <Combobox
              value={field.value}
              onChange={(value) => {
                field.onChange(value)
                setQuery(value.name)
                if (!value.id) {
                  handleAddNewCategory(value.name, value.id)
                }
              }}
            >
              <div className="relative">
                <Combobox.Input
                  placeholder="Ex: Sustentabilidade"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    if (!e.target.value) {
                      field.onChange(undefined)
                    }
                  }}
                  className={`input-form w-full disabled:cursor-not-allowed ${
                    errors.category &&
                    'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
                  }`}
                />
                {isValidating && (
                  <Spinner className="border-gray-600 border-b-transparent absolute z-10 top-5 right-6" />
                )}

                {errors.category && (
                  <ErrorMessage className="!static mt-3">
                    {errors.category.message}
                  </ErrorMessage>
                )}
              </div>
              <Combobox.Options className="absolute max-h-56 overflow-y-auto top-20 w-full shadow-md bg-white py-4 z-10 rounded-lg">
                {filteredCategories && filteredCategories.length > 0 ? (
                  filteredCategories.map((category) => (
                    <Combobox.Option
                      className="capitalize data-[headlessui-state='active']:bg-green-300 text-sm py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
                      key={category.id}
                      value={{
                        id: category.id,
                        name: category.name.replaceAll('-', ' '),
                      }}
                    >
                      {category.name.replaceAll('-', ' ')}
                    </Combobox.Option>
                  ))
                ) : (
                  <Combobox.Option
                    value={{ name: query, id: null }}
                    className="data-[headlessui-state='active']:bg-green-300 text-base py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
                  >
                    <button type="button" className="flex items-center gap-3">
                      <Icon icon="ic:round-plus" className="w-5 h-5" />
                      Adicionar categoria &quot;{query}&quot;
                    </button>
                  </Combobox.Option>
                )}
              </Combobox.Options>
            </Combobox>
          </div>
        )
      }}
    />
  )
}
