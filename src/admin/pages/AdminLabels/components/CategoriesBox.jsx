import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Fragment, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAdmin } from '../../../../contexts/AdminContext'
import { DropdownMenu } from '../../../components/DropdownMenu'
import { AdminModal } from '../../../components/AdminModal'
import { useLabels } from '..'
import { Input } from '../../../../components/Form/Input'
import { ErrorMessage } from '../../../../components/Form/ErrorMessage'
import { Spinner } from '../../../../components/Loader/Spinner'
import { ButtonAdmin } from '../../../components/ButtonAdmin'

import api from '../../../../lib/axios'
import {
  DropdownItemDeleteLabel,
  DropdownItemEditLabel,
} from './DropdownItemLabel'

const editCategoryFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string().nonempty('Obrigatório'),
})

export function CategoriesBox() {
  const [modalId, setModalId] = useState(null)
  const { admin } = useAdmin()

  const {
    categories: {
      data: categories,
      isLoading: isLoadingCategories,
      error: errorCategories,
      mutate: mutateCategories,
    },
  } = useLabels()

  const editCategoryForm = useForm({
    resolver: zodResolver(editCategoryFormSchema),
  })
  const {
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = editCategoryForm

  if (isLoadingCategories) {
    return (
      <div className="font-roboto text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  if (errorCategories && errorCategories.response.status === 404) {
    return (
      <div className="font-roboto text-zinc-900 font-medium text-lg max-w-md">
        Não existe nenhuma categoria no Blog ainda.
      </div>
    )
  }

  if (errorCategories) {
    return (
      <div className="font-roboto text-zinc-900 font-medium text-lg max-w-md">
        Ocorreu um erro no servidor. Verifique a sua conexão com a internet ou
        tente novamente mais tarde.
      </div>
    )
  }

  function handleOpenModal(id) {
    setModalId((prevId) => {
      if (prevId === id) {
        return null
      } else {
        return id
      }
    })
  }

  async function handleEditCategory(data) {
    try {
      await api.put(
        '/category-article',
        {
          id: data.id,
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        },
      )
      mutateCategories()
      setModalId(null)
    } catch (err) {
      alert('Não conseguimos editar a categoria. Tente novamente mais tarde.')
      setModalId(null)
    }
  }

  async function handleDeleteCategory(id) {
    const agreed = confirm(
      'Tem certeza que você deseja deletar essa categoria?',
    )

    if (!agreed) return

    try {
      await api.delete('/category-article', {
        data: {
          id,
        },
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      })

      alert('Categoria deletada com sucesso!')
      mutateCategories()
    } catch (err) {
      if (err.request.status === 422) {
        alert(
          'Erro! Não conseguimos deletar essa categoria pois ela pertence a uma postagem do Blog.',
        )
        return
      }

      alert(
        'Erro! Não conseguimos deletar essa categoria. Tente novamente mais tarde.',
      )
    }
  }

  return (
    <div className="flex flex-wrap gap-2 max-w-lg w-full">
      {categories.map((category) => (
        <Fragment key={category.id}>
          <DropdownMenuPrimitive.Root modal={false}>
            <DropdownMenuPrimitive.Trigger className="py-4 px-6 duration-300 font-roboto font-medium text-left cursor-pointer transition-colors bg-white hover:bg-green-300 hover:text-white">
              {category.name.replaceAll('-', ' ')}
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenu>
              <DropdownItemEditLabel
                onClick={() => {
                  handleOpenModal(category.id)
                  setValue('name', category.name.replaceAll('-', ' '))
                  setValue('id', category.id)
                }}
              />

              <DropdownItemDeleteLabel
                onClick={() => handleDeleteCategory(category.id)}
              />

              <DropdownMenuPrimitive.Arrow fill="#fff" />
            </DropdownMenu>
          </DropdownMenuPrimitive.Root>

          <Dialog.Root
            open={modalId === category.id}
            onOpenChange={() => handleOpenModal(category.id)}
          >
            <AdminModal>
              <Dialog.Title className="text-zinc-800 font-IBM-plex-sans font-semibold text-2xl">
                Editar a categoria &quot;
                {category.name.replaceAll('-', ' ')}
                &quot;
              </Dialog.Title>

              <form
                className="mt-4"
                onSubmit={handleSubmit(handleEditCategory)}
              >
                <FormProvider {...editCategoryForm}>
                  <Input.Root>
                    <Input.Field
                      name="name"
                      placeholder="Renomeie a sua categoria"
                    />
                    {errors.name && (
                      <ErrorMessage className="!static">
                        {errors.name.message}
                      </ErrorMessage>
                    )}
                  </Input.Root>

                  <Input.Field name="id" type="hidden" value={category.id} />

                  <ButtonAdmin
                    type="submit"
                    className={`w-full mt-6 mb-3 h-12`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner />
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </ButtonAdmin>
                </FormProvider>
              </form>
            </AdminModal>
          </Dialog.Root>
        </Fragment>
      ))}
    </div>
  )
}
