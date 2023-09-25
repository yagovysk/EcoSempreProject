import { useFieldArray, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../components/Form/ErrorMessage'
import { useFetchData } from '../../hooks/useFetchData'
import { Combobox } from '@headlessui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useAdmin } from '../../contexts/AdminContext'
import { Spinner } from '../../components/Loader/Spinner'
import api from '../../lib/axios'

export function FormCategories() {
  const [newCategory, setNewCategory] = useState('')
  const {
    data: categories,
    isLoading: isLoadingCategories,
    mutate,
    isValidating,
  } = useFetchData('/category-article')
  const { admin } = useAdmin()

  const {
    formState: { errors },
  } = useFormContext()

  const {
    fields: categoriesField,
    append: appendCategory,
    remove: removeCategory,
  } = useFieldArray({
    name: 'categories',
  })

  if (isLoadingCategories) {
    return <div className="font-medium text-gray-800">Carregando...</div>
  }

  const filteredCategories =
    categories &&
    categories.filter((category) =>
      category.name
        .toLowerCase()
        .replaceAll('-', ' ')
        .includes(newCategory.toLowerCase()),
    )

  async function handleAddNewCategory(name, id) {
    if (id) {
      appendCategory({
        id_category: id,
        name,
      })
      setNewCategory('')
      return
    }

    try {
      const idNewCategory = await api
        .post(
          '/category-article',
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
      appendCategory({
        id_category: idNewCategory.id,
        name,
      })
      mutate()
      setNewCategory('')
    } catch (err) {
      alert('Ocorreu um erro! Não conseguimos adicionar sua categoria.')
    }
  }

  function handleRemoveCategory(index) {
    removeCategory(index)
  }

  return (
    <label className="flex flex-col gap-2 col-span-2">
      <span className="font-medium text-gray-800">Adicione categorias</span>
      <div className="relative">
        <Combobox
          value={newCategory}
          onChange={(value) => {
            setNewCategory(() => value.name)
            handleAddNewCategory(value.name, value.id)
          }}
          disabled={categoriesField.length === 2}
        >
          <div className="relative">
            <Combobox.Input
              placeholder="Ex: Sustentabilidade"
              value={newCategory}
              onChange={(e) => {
                setNewCategory(e.target.value)
              }}
              className={`input-form w-full disabled:cursor-not-allowed ${
                errors.categories &&
                'border-red-500 shadow-error animate-shake focus:border-red-500 focus:shadow-error'
              }`}
            />
            {isValidating && (
              <Spinner className="border-gray-600 border-b-transparent absolute z-10 top-5 right-6" />
            )}

            {errors.categories && (
              <ErrorMessage className="!static mt-3">
                {errors.categories.message}
              </ErrorMessage>
            )}
          </div>
          <Combobox.Options className="absolute max-h-56 overflow-y-auto top-20 w-full shadow-md bg-white py-4 z-10 rounded-lg">
            {filteredCategories && filteredCategories.length > 0 ? (
              filteredCategories.map((field) => (
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
                value={{ name: newCategory, id: null }}
                className=" data-[headlessui-state='active']:bg-green-300 text-base py-1 data-[headlessui-state='active']:text-gray-200 transition-colors duration-200 cursor-pointer px-4 text-gray-[#3A3A3C]"
              >
                <button type="button" className="flex items-center gap-3">
                  <Icon icon="ic:round-plus" className="w-5 h-5" />
                  Adicionar categoria {`"${newCategory}"`}{' '}
                </button>
              </Combobox.Option>
            )}
          </Combobox.Options>
        </Combobox>

        <div className="flex gap-2 mt-4">
          {!!categoriesField &&
            categoriesField.map((category, index) => {
              return (
                <div
                  key={category.id}
                  className="bg-green-300 text-sm flex items-center gap-2 text-white py-1 px-2 rounded-lg w-max"
                >
                  {category.name.replaceAll('-', ' ')}
                  <button
                    type="button"
                    className="opacity-60 transition-opacity hover:opacity-100"
                    onClick={() => handleRemoveCategory(index)}
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
