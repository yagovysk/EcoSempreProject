import { Editor } from '@tinymce/tinymce-react'
import { Input } from '../../../components/Form/Input'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '../../../components/Form/ErrorMessage'
import { FormCategories } from './components/FormCategories'
import { FormTags } from './components/FormTags'
import { useAdmin } from '../../../contexts/AdminContext'
import { Spinner } from '../../../components/Loader/Spinner'
import { HeadingAdmin } from '../components/HeadingAdmin'
import api from '../../../lib/axios'
import { PostEditorContent } from '../components/PostEditorContent'

const newPostFormSchema = z.object({
  title: z
    .string()
    .nonempty('Obrigatório')
    .max(70, 'Tamanho máximo de caracteres excedido. '),
  author: z.string().nonempty('Obrigatório'),
  authorId: z.number(),
  imageURL: z.string().url('URL inválida'),
  content: z.string().nonempty('Obrigatório'),
  categories: z
    .array(
      z.object({
        name: z.string(),
        id_category: z.number().min(1),
      }),
    )
    .max(2, 'Adicione no máximo 2 categorias')
    .nonempty('Adicione pelo menos 1 categoria')
    .transform((categories) =>
      categories.map((category) => category.id_category),
    ),
  tags: z
    .array(
      z.object({
        name: z.string(),
        id_tag: z.number().min(1),
      }),
    )
    .max(3, 'Adicione no máximo 3 tags')
    .nonempty('Adicione pelo menos 1 tag')
    .transform((tags) => tags.map((tag) => tag.id_tag)),
})

export function AdminNewPost() {
  const {
    token,
    posts: { mutate: mutatePosts },
  } = useAdmin()

  const formNewPost = useForm({
    resolver: zodResolver(newPostFormSchema),
    defaultValues: {
      title: '',
      author: 'EcoSempre',
      authorId: 4,
      content: 'Adicione aqui o conteúdo da sua postagem',
      imageURL: '',
      categories: [],
      tags: [],
    },
  })

  const {
    watch,
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = formNewPost

  const titleField = watch('title')
  const imageURLField = watch('imageURL')

  async function handleCreateNewPost(data) {
    try {
      await api.post(
        '/article',
        {
          title: data.title,
          content: data.content,
          thumbnail_url: data.imageURL,
          author: data.author,
          author_id: data.authorId,
          tags_ids: data.tags,
          categories: data.categories,
        },
        {
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        },
      )
      mutatePosts()
      alert('Uhuul 🎉! Postagem adicionada com sucesso!')
      reset()
    } catch (err) {
      alert(
        'Erro! Não conseguimos criar a sua postagem. Verifique a conexão com a internet ou tente novamente mais tarde.',
      )
    }
  }

  return (
    <>
      <header className="pb-8 border-b">
        <HeadingAdmin>Adicione um novo post ao Blog</HeadingAdmin>
      </header>

      <main className="mt-8">
        <form
          onSubmit={handleSubmit(handleCreateNewPost)}
          className="grid grid-cols-new-post-form gap-y-8 gap-x-6"
        >
          <FormProvider {...formNewPost}>
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

            <Input.Root>
              <label className="font-medium text-gray-800" htmlFor="author">
                Autor
              </label>
              <Input.Field
                id="author"
                name="author"
                placeholder="Digite o autor dessa postagem"
              />

              {errors.author && (
                <ErrorMessage className="!static">
                  {errors.author.message}
                </ErrorMessage>
              )}
            </Input.Root>

            <input type="hidden" value={4} {...register('authorId')} />

            <Input.Root className="col-span-3">
              <label className="font-medium text-gray-800" htmlFor="imageURL">
                Adicione a URL da imagem
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
