import { HeadingAdmin } from '../../components/HeadingAdmin'
import { BoxResume } from '../../components/BoxResume'
import { useFetchData } from '../../../hooks/useFetchData'
import { TagsBox } from './components/TagsBox'
import { CategoriesBox } from './components/CategoriesBox'
import { createContext, useContext } from 'react'
import { CategoriesColetas } from './components/CategoriesColetas'
import { AddNewLabelsForm } from './components/AddNewLabelsForm'

const AdminLabelsContext = createContext({})

export function AdminLabels() {
  const tagsData = useFetchData('/tags')
  const { data: tags, isLoading: isLoadingTags } = tagsData

  const categoriesData = useFetchData('/category-article')
  const { data: categories, isLoading: isLoadingCategories } = categoriesData

  const categoriesColetasData = useFetchData('/categories-collection-points')
  const { data: categoriesColetas, isLoading: isLoadingCategoriesColetas } =
    categoriesColetasData

  if (isLoadingTags || isLoadingCategories || isLoadingCategoriesColetas) {
    return (
      <div className="font-roboto text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  return (
    <AdminLabelsContext.Provider
      value={{
        tags: {
          ...tagsData,
        },
        categories: {
          ...categoriesData,
        },
        categoriesColetas: {
          ...categoriesColetasData,
        },
      }}
    >
      <header>
        <HeadingAdmin>Categorias e Tags</HeadingAdmin>
      </header>

      <main className="mt-10 flex flex-col gap-8">
        <div className="flex gap-6">
          <BoxResume
            title="Quantidade de categorias no Blog"
            number={categories ? categories.length : 0}
          />
          <BoxResume
            title="Quantidade de tags no Blog"
            number={tags ? tags.length : 0}
          />
          <BoxResume
            title="Quantidade de categorias dos Pontos de Coleta"
            number={categoriesColetas ? categoriesColetas.length : 0}
          />
        </div>

        <hr />
        <AddNewLabelsForm />
        <hr />

        <div className="flex flex-wrap gap-8">
          <Box title="Categorias do Blog">
            <CategoriesBox />
          </Box>

          <Box title="Tags do Blog">
            <TagsBox />
          </Box>
        </div>

        <hr />

        <div className="flex">
          <Box title="Categorias dos Pontos de Coleta">
            <CategoriesColetas />
          </Box>
        </div>
      </main>
    </AdminLabelsContext.Provider>
  )
}

function Box({ title, children }) {
  return (
    <div className="text-blue flex flex-col max-h-[24rem] overflow-y-auto gap-6 bg-[#f4f4f4] py-8 px-10 rounded-lg overflow-hidden border-t-4 border-t-green-300">
      <strong className="text-lg font-bold">{title}</strong>

      {children}
    </div>
  )
}

export const useLabels = () => useContext(AdminLabelsContext)
