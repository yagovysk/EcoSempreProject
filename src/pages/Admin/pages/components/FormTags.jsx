import { useFieldArray, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../../../components/Form/ErrorMessage'
import { useFetchData } from '../../../../hooks/useFetchData'
import { Combobox } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useAdmin } from '../../../../contexts/AdminContext'
import { Spinner } from '../../../../components/Loader/Spinner'
import api from '../../../../lib/axios'

export function FormTags() {
  const [query, setQuery] = useState('')
  const {
    data: tags,
    isLoading: isLoadingTags,
    mutate,
    isValidating,
  } = useFetchData('/tags')
  const { token } = useAdmin()

  const {
    formState: { errors },
  } = useFormContext()

  const {
    fields: tagsField,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    name: 'tags',
  })

  if (isLoadingTags) {
    return <div className="font-medium text-gray-800">Carregando...</div>
  }

  const filteredTags =
    tags &&
    tags.filter((tag) =>
      tag.name.toLowerCase().replaceAll('-', ' ').includes(query.toLowerCase()),
    )

  async function handleAddNewTag(name, id) {
    if (id) {
      appendTag({
        id_tag: id,
        name,
      })
      setQuery('')
      return
    }

    try {
      await api.post(
        '/tag',
        {
          name,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        },
      )
      mutate()
      setQuery('')
      appendTag({
        id_tag: id,
        name,
      })
    } catch (err) {
      alert('Ocorreu um erro! Não conseguimos adicionar sua tag.')
    }
  }

  function handleRemoveTag(index) {
    removeTag(index)
  }

  return (
    <label className="flex flex-col gap-2 col-span-2">
      <span className="font-medium text-gray-800">Adicione Tags</span>
      <div className="relative">
        <Combobox
          value={query}
          onChange={(value) => {
            setQuery(() => value.name)
            handleAddNewTag(value.name, value.id)
          }}
          disabled={tagsField.length === 3}
        >
          <div className="relative">
            <Combobox.Input
              placeholder="Ex: Ecologia"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
              }}
              className={`input-form w-full disabled:cursor-not-allowed ${
                errors.tags &&
                'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
              }`}
            />
            {isValidating && (
              <Spinner className="border-gray-600 border-b-transparent absolute z-10 top-5 right-6" />
            )}

            {errors.tags && (
              <ErrorMessage className="!static mt-3">
                {errors.tags.message}
              </ErrorMessage>
            )}
          </div>
          <Combobox.Options className="absolute max-h-56 overflow-y-auto top-20 w-full shadow-md bg-white py-4 z-10 rounded-lg">
            {filteredTags && filteredTags.length > 0 ? (
              filteredTags.map((field) => (
                <Combobox.Option
                  className="capitalize data-[headlessui-state='active']:bg-green-300 text-sm py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
                  key={field.id}
                  value={{
                    name: field.name.replaceAll('-', ' '),
                    id: field.id,
                  }}
                >
                  {field.name.replaceAll('-', ' ')}
                </Combobox.Option>
              ))
            ) : (
              <Combobox.Option
                value={{ name: query, id: null }}
                className=" data-[headlessui-state='active']:bg-green-300 text-base py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
              >
                <button type="button" className="flex items-center gap-3">
                  <Icon icon="ic:round-plus" className="w-5 h-5" />
                  Adicionar tag {`"${query}"`}{' '}
                </button>
              </Combobox.Option>
            )}
          </Combobox.Options>
        </Combobox>

        <div className="flex gap-2 mt-4">
          {!!tagsField &&
            tagsField.map((query, index) => {
              return (
                <div
                  key={query.id}
                  className="bg-green-300 text-sm flex items-center gap-2 text-white py-1 px-2 rounded-lg w-max"
                >
                  {query.name}
                  <button
                    type="button"
                    className="opacity-60 transition-opacity hover:opacity-100"
                    onClick={() => handleRemoveTag(index)}
                  >
                    <Icon icon="ph:x" />
                  </button>
                </div>
              )
            })}
        </div>
      </div>
    </label>
  )
}
