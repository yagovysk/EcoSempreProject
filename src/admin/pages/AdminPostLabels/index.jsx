import { HeadingAdmin } from '../../components/HeadingAdmin'
import { BoxResume } from '../../components/BoxResume'
import { useFetchData } from '../../../hooks/useFetchData'
import { TagsBox } from './components/TagsBox'
import { CategoriesBox } from './components/CategoriesBox'
import { createContext, useContext } from 'react'
import { Link } from 'react-router-dom'

const AdminPostLabelsContext = createContext({})

export function AdminPostLabels() {
  const tagsData = useFetchData('/tags')
  const { data: tags, isLoading: isLoadingTags } = tagsData

  const categoriesData = useFetchData('/category-article')
  const { data: categories, isLoading: isLoadingCategories } = categoriesData

  if (isLoadingTags || isLoadingCategories) {
    return (
      <div className="font-roboto text-zinc-900 animate-pulse">
        Carregando...
      </div>
    )
  }

  return (
    <AdminPostLabelsContext.Provider
      value={{
        tags: {
          ...tagsData,
        },
        categories: {
          ...categoriesData,
        },
      }}
    >
      <header>
        <HeadingAdmin>Categorias e Tags do Blog</HeadingAdmin>
        <p className="text-sm mt-3 text-gray-600 flex items-center">
          Para adicionar novas tags e categorias
          <Link to="/admin/new-post" className="ml-1 text-green-300 underline">
            clique aqui
          </Link>
          .
        </p>
      </header>

      <main className="mt-10 flex flex-col gap-6">
        <div className="flex gap-6 pb-8 border-b">
          <BoxResume
            title="Quantidade de categorias"
            number={categories ? categories.length : 0}
          />
          <BoxResume
            title="Quantidade de tags"
            number={tags ? tags.length : 0}
          />
        </div>

        <div className="flex flex-wrap gap-8">
          <Box title="Categorias">
            <CategoriesBox />
          </Box>

          <Box title="Tags">
            <TagsBox />
          </Box>
        </div>
      </main>
    </AdminPostLabelsContext.Provider>
  )
}

function Box({ title, children }) {
  return (
    <div className="text-blue flex flex-col gap-6 bg-[#f4f4f4] py-8 px-10 rounded-lg overflow-hidden border-t-4 border-t-green-300">
      <strong className="text-lg font-bold">{title}</strong>

      {children}
    </div>
  )
}

export const usePostLabels = () => useContext(AdminPostLabelsContext)
