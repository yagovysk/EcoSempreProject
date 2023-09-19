import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../../../../contexts/AdminContext'
import { Icon } from '@iconify/react'
import { DropdownMenu } from '../../../components/DropdownMenu'
import { usePostLabels } from '..'

import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../../../../components/Form/Input'
import { ErrorMessage } from '../../../../components/Form/ErrorMessage'
import { Spinner } from '../../../../components/Loader/Spinner'
import { AdminModal } from '../../../components/AdminModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import * as Dialog from '@radix-ui/react-dialog'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import api from '../../../../lib/axios'

const editTagFormSchema = z.object({
  id: z.coerce.number(),
  name: z.string().nonempty(),
})

export function TagsBox() {
  const [modalId, setModalId] = useState(null)
  const { admin } = useAdmin()

  const {
    tags: {
      data: tags,
      isLoading: isLoadingTags,
      error: errorTags,
      mutate: mutateTags,
    },
  } = usePostLabels()

  const editTagForm = useForm({
    resolver: zodResolver(editTagFormSchema),
  })

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = editTagForm

  if (isLoadingTags) {
    return (
      <div className="font-roboto text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  if (errorTags && errorTags.response.status === 404) {
    return (
      <div className="font-roboto text-zinc-900 font-medium text-lg max-w-md">
        Não existe nenhuma tag no Blog ainda. Adicione uma postagem no blog para
        criar novas tags.
        <Link
          to="/admin/new-post"
          className="flex mt-4 items-center gap-1 border-b border-transparent hover:border-b-green-300 w-max transition-all text-green-300 group"
        >
          Criar postagem
          <Icon
            icon="ph:arrow-right-bold"
            className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-300"
          />
        </Link>
      </div>
    )
  }

  if (errorTags) {
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

  async function handleEditTag(data) {
    try {
      await api.put(
        '/tag',
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
      mutateTags()
      setModalId(null)
    } catch (err) {
      alert('Não conseguimos editar a tag. Tente novamente mais tarde.')
      setModalId(null)
    }
  }

  async function handleDeleteTag(id) {
    const agreed = confirm('Tem certeza que você deseja deletar essa tag?')

    if (!agreed) return

    try {
      await api.delete('/tag', {
        data: {
          tag_id: id,
        },
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      })

      mutateTags()
    } catch (err) {
      alert(
        'Erro! Não conseguimos deletar essa tag. Tente novamente mais tarde.',
      )
    }
  }
  return (
    <div className="inline-flex flex-wrap gap-2 max-w-lg w-full">
      {tags.map((tag) => (
        <Fragment key={tag.id}>
          <DropdownMenuPrimitive.Root modal={false}>
            <DropdownMenuPrimitive.Trigger className="py-0.5 px-3 cursor-pointer transition-colors hover:bg-blue bg-green-300 text-white rounded-lg">
              {tag.name.replaceAll('-', ' ')}
            </DropdownMenuPrimitive.Trigger>

            <DropdownMenu>
              <DropdownMenuPrimitive.Item className="outline-0">
                <button
                  onClick={() => {
                    handleOpenModal(tag.id)
                    setValue('name', tag.name.replaceAll('-', ' '))
                  }}
                  className="flex items-center gap-2 border-2 border-blue text-blue duration-300 transition-colors p-2 hover:bg-blue hover:text-white rounded"
                >
                  <Icon icon="fe:edit" className="w-5 h-5" />
                </button>
              </DropdownMenuPrimitive.Item>

              <DropdownMenuPrimitive.Item className="outline-0">
                <button
                  type="button"
                  onClick={() => handleDeleteTag(tag.id)}
                  className="flex items-center gap-2 border-2 border-red-500 text-red-500 rounded p-2 transition-colors duration-300 hover:bg-red-500 hover:text-white"
                >
                  <Icon icon="ant-design:delete-filled" className="w-5 h-5" />
                </button>
              </DropdownMenuPrimitive.Item>

              <DropdownMenuPrimitive.Arrow fill="#fff" />
            </DropdownMenu>
          </DropdownMenuPrimitive.Root>

          <Dialog.Root
            open={modalId === tag.id}
            onOpenChange={() => handleOpenModal(tag.id)}
          >
            <AdminModal>
              <Dialog.Title className="text-zinc-800 font-IBM-plex-sans font-semibold text-2xl">
                Editar a tag &quot;
                {tag.name.replaceAll('-', ' ')}
                &quot;
              </Dialog.Title>

              <form className="mt-4" onSubmit={handleSubmit(handleEditTag)}>
                <FormProvider {...editTagForm}>
                  <Input.Root>
                    <Input.Field name="name" placeholder="Renomeia a sua tag" />
                    {errors.name && (
                      <ErrorMessage className="!static">
                        {errors.name.message}
                      </ErrorMessage>
                    )}
                  </Input.Root>

                  <input type="hidden" {...register('id')} value={tag.id} />

                  <button
                    type="submit"
                    className={`w-full mt-6 mb-3 flex justify-center items-center gap-4 btn text-white font-medium h-12 hover:bg-blue disabled:opacity-70 disabled:hover:bg-green-300 disabled:cursor-not-allowed`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner />
                      </>
                    ) : (
                      'Enviar'
                    )}
                  </button>
                </FormProvider>
              </form>
            </AdminModal>
          </Dialog.Root>
        </Fragment>
      ))}
    </div>
  )
}
