import { FormProvider, useForm } from 'react-hook-form'
import { useAdmin } from '../../../../contexts/AdminContext'
import { ButtonAdmin } from '../../../components/ButtonAdmin'
import { Input } from '../../../../components/Form/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLabels } from '..'
import { Spinner } from '../../../../components/Loader/Spinner'
import api from '../../../../lib/axios'

const addNewCategoryBlogSchema = z.object({
  name: z.string().nonempty('Obrigatório'),
})

const addNewTagBlogSchema = z.object({
  name: z.string().nonempty('Obrigatório'),
})

const addNewCategoryCollectionPointSchema = z.object({
  name: z.string().nonempty('Obrigatório'),
})

export function AddNewLabelsForm() {
  const { tags, categories, categoriesColetas } = useLabels()
  const { admin } = useAdmin()

  const addNewCategoryBlogForm = useForm({
    resolver: zodResolver(addNewCategoryBlogSchema),
  })
  const {
    isSubmitting: isSubmittingCategories,
    reset: resetCategoryBlog,
    handleSubmit: handleCategoryBlogSubmit,
  } = addNewCategoryBlogForm

  const addNewTagBlogForm = useForm({
    resolver: zodResolver(addNewTagBlogSchema),
  })
  const {
    isSubmitting: isSubmittingTags,
    reset: resetTagBlog,
    handleSubmit: handleTagBlogSubmit,
  } = addNewTagBlogForm

  const addNewCategoryCollectionPointForm = useForm({
    resolver: zodResolver(addNewCategoryCollectionPointSchema),
  })
  const {
    isSubmitting: isSubmittingCategoriesColetas,
    reset: resetCategoryCollectionPoint,
    handleSubmit: handleCategoryCollectionPointSubmit,
  } = addNewCategoryCollectionPointForm

  async function handleAddNewLabel(data, endpoint) {
    try {
      await api.post(
        endpoint,
        {
          name: data.name,
        },
        {
          headers: {
            Authorization: `Bearer ${admin.token}`,
          },
        },
      )
      tags.mutate()
      categories.mutate()
      categoriesColetas.mutate()
    } catch (err) {
      if (err.response.status === 409) {
        alert(`Oops! "${data.name}" já existe. Tente outro nome.`)
        return
      }

      alert(
        `Oops! Ocorreu um erro ao tentarmos adicionar "${data.name}". Tente novamente mais tarde.`,
      )
    }
  }

  return (
    <div className="flex gap-8 w-full max-w-7xl flex-wrap">
      <form
        onSubmit={handleCategoryBlogSubmit((data) => {
          handleAddNewLabel(data, '/category-article')
          resetCategoryBlog()
        })}
      >
        <FormProvider {...addNewCategoryBlogForm}>
          <label
            htmlFor="category-blog"
            className="block text-blue font-semibold mb-2"
          >
            Adicionar categorias ao Blog
          </label>

          <InputForm id="category-blog" isSubmitting={isSubmittingCategories} />
        </FormProvider>
      </form>

      <form
        onSubmit={handleTagBlogSubmit((data) => {
          handleAddNewLabel(data, '/tag')

          resetTagBlog()
        })}
      >
        <FormProvider {...addNewTagBlogForm}>
          <label
            htmlFor="tag-blog"
            className="block text-blue font-semibold mb-2"
          >
            Adicionar tags ao Blog
          </label>

          <InputForm
            id="tag-blog"
            isTag={true}
            isSubmitting={isSubmittingTags}
          />
        </FormProvider>
      </form>

      <form
        onSubmit={handleCategoryCollectionPointSubmit((data) => {
          handleAddNewLabel(data, '/category-collection-points')
          resetCategoryCollectionPoint()
        })}
      >
        <FormProvider {...addNewCategoryCollectionPointForm}>
          <label
            htmlFor="category-collection-point"
            className="block text-blue font-semibold mb-2"
          >
            Adicionar novas categorias de Pontos de Coleta
          </label>

          <InputForm
            id="category-collection-point"
            isSubmitting={isSubmittingCategoriesColetas}
          />
        </FormProvider>
      </form>
    </div>
  )
}

function InputForm({ isTag = false, isSubmitting, ...props }) {
  return (
    <>
      <div className="flex gap-3 w-full">
        <Input.Root className="w-full">
          <Input.Field
            name="name"
            className="py-4"
            placeholder={
              isTag ? 'Digite uma nova tag' : 'Digite uma nova categoria'
            }
            {...props}
          />
        </Input.Root>
        <ButtonAdmin disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner />
            </>
          ) : (
            'Adicionar'
          )}
        </ButtonAdmin>
      </div>
      <p className="text-gray-600 text-xs mt-1.5">
        Atenção! Não adicione {!isTag ? 'categorias' : 'tags'} repetidas
      </p>
    </>
  )
}
