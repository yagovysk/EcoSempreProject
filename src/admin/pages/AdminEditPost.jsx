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
import { FormCategories } from '../components/FormCategories'
import { FormTags } from '../components/FormTags'

import api from '../../lib/axios'

export async function loader({ params }) {
  let post = null

  try {
    post = await api.get(`/article/${params.key}`).then((res) => res.data)
  } catch (err) {
    throw new Response('', {
      status: err.response.status,
      statusText: err.response.statusText,
    })
  }

  return {
    post,
  }
}

const editPostFormSchema = z.object({
  title: z
    .string()
    .nonempty('Obrigatório')
    .max(70, 'Tamanho máximo de caracteres excedido. '),
  content: z.string().nonempty('Obrigatório'),
  imageURL: z.string().url('URL inválida'),
  categories: z
    .array(
      z.object({
        id_category: z.number(),
        name: z.string().transform((name) => name.split()),
      }),
    )
    .max(2, 'Adicione no máximo 2 categorias')
    .nonempty('Adicione pelo menos 1 categoria')
    .transform((categories) =>
      // Remove old categories and return only its id
      categories
        .filter((category) => category.id_category)
        .map((category) => category.id_category),
    ),
  tags: z
    .array(
      z.object({
        name: z.string().transform((name) => name.split()),
        id_tag: z.number().min(1),
      }),
    )
    .max(3, 'Adicione no máximo 3 tags')
    .nonempty('Adicione pelo menos 1 tag')
    .transform((tags) =>
      // Remove old tags and return only its id
      tags.filter((tag) => tag.id_tag).map((tag) => tag.id_tag),
    ),
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
      categories: post.categories.map((category) => ({
        name: category,
      })),
      tags: post.tags.map((tag) => ({ name: tag })),
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
          tags_ids: data.tags,
          categories: data.categories,
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

            {imageURLField && (
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

            <FormCategories />
            <FormTags />

            <button
              type="submit"
              className={`col-span-full flex justify-center items-center gap-4 btn text-white font-medium h-14 hover:bg-blue disabled:opacity-70 disabled:hover:bg-green-300 disabled:cursor-not-allowed`}
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
      </main>
    </>
  )
}
