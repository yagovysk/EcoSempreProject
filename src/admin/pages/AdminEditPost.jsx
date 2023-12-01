import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Icon } from '@iconify/react'
import { zodResolver } from '@hookform/resolvers/zod'

import { HeadingAdmin } from '../components/HeadingAdmin'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { Input } from '../../components/Form/Input'
import { ErrorMessage } from '../../components/Form/ErrorMessage'
import { Spinner } from '../../components/Loader/Spinner'
import { PostEditorContent } from '../components/PostEditorContent'
import { useAdmin } from '../../contexts/AdminContext'
import { ButtonAdmin } from '../components/ButtonAdmin'

import api from '../../lib/axios'

export async function loader({ params }) {
  let post = null

  try {
    post = await api.get(`/article/${params.key}`).then((res) => res.data)
  } catch (err) {
    throw new Response('', {
      status: err.request.status || 500,
      statusText: err.request.statusText || 'Internal Server Error',
    })
  }

  return {
    post,
  }
}

const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i

const editPostFormSchema = z.object({
  title: z
    .string()
    .nonempty('Obrigatório')
    .max(70, 'Tamanho máximo de caracteres excedido. '),
  content: z.string().nonempty('Obrigatório'),
  imageURL: z.string().url('URL inválida'),
})

export function AdminEditPost() {
  const { post } = useLoaderData()

  const {
    admin,
    posts: { mutate: mutatePosts },
  } = useAdmin()

  const editPostForm = useForm({
    resolver: zodResolver(editPostFormSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
      imageURL: post.thumbnail_url,
    },
  })

  const navigate = useNavigate()

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = editPostForm

  const titleField = watch('title')
  const imageURLField = watch('imageURL')

  async function handleEditPost(data) {
    try {
      await api.put(
        `/article/${post.id}`,
        {
          title: data.title,
          content: data.content,
          thumbnail_url: data.imageURL,
        },
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        },
      )
      mutatePosts()
      alert('Uhuul 🎉! Postagem editada com sucesso!')
      navigate('/admin/posts')
    } catch (err) {
      alert(
        'Erro! Não conseguimos editar a sua postagem. Verifique a conexão com a internet ou tente novamente mais tarde.',
      )
    }
  }

  return (
    <>
      <header>
        <HeadingAdmin>Editar &quot;{post.title}&quot;</HeadingAdmin>
        <Link
          to="/admin/posts"
          className="flex mt-4 items-center gap-1 border-b border-transparent hover:border-b-green-300 w-max transition-all text-green-300 group"
        >
          <Icon
            icon="ph:arrow-left-bold"
            className="w-5 h-5 transition-transform group-hover:-translate-x-1 duration-300"
          />
          Voltar
        </Link>
      </header>

      <main className="mt-10">
        <form
          onSubmit={handleSubmit(handleEditPost)}
          className="grid grid-cols-new-post-form gap-y-8 gap-x-6"
        >
          <FormProvider {...editPostForm}>
            <Input.Root className="col-span-full">
              <label className="font-medium text-gray-800" htmlFor="title">
                Título
              </label>
              <Input.Field
                id="title"
                name="title"
                placeholder="Digite o título dessa postagem"
              />
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  ({titleField ? titleField.length : 0}/70)
                </span>

                {errors.title && (
                  <ErrorMessage className="!static">
                    {errors.title.message}
                  </ErrorMessage>
                )}
              </div>
            </Input.Root>

            <div className="col-span-full">
              <Controller
                name="content"
                control={control}
                render={({ field }) => {
                  return (
                    <PostEditorContent
                      value={field.value}
                      onEditorChange={(newValue) =>
                        setValue('content', newValue)
                      }
                    />
                  )
                }}
              />
              {errors.content && (
                <ErrorMessage className="!static mt-3">
                  {errors.content.message}
                </ErrorMessage>
              )}
            </div>

            <Input.Root className="col-span-full">
              <label className="font-medium text-gray-800" htmlFor="imageURL">
                Edite a URL da imagem
              </label>
              <Input.Field
                id="imageURL"
                name="imageURL"
                placeholder="Ex: https://example.com/image.jpg"
              />

              {errors.imageURL && (
                <ErrorMessage className="!static">
                  {errors.imageURL.message}
                </ErrorMessage>
              )}
            </Input.Root>

            {urlRegex.test(imageURLField) && (
              <div className="col-span-full flex flex-col gap-3">
                <span className="font-medium text-gray-800">
                  Preview da Imagem
                </span>

                <div className="max-w-4xl h-[32.875rem] w-full border">
                  <img
                    src={imageURLField}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}

            <ButtonAdmin
              type="submit"
              className={`col-span-full`}
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
      </main>
    </>
  )
}
