import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { HeadingAdmin } from '../components/HeadingAdmin'
import { useAdmin } from '../../contexts/AdminContext'
import { CardBlog } from '../../components/CardBlog'
import { Icon } from '@iconify/react'
import api from '../../lib/axios'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const searchPostsFormSchema = z.object({
  query: z.string(),
})

const INITIAL_QUANTITY_POSTS = 6

export function AdminPosts() {
  const [amountPostsPerView, setAmountPostsPerView] = useState(
    INITIAL_QUANTITY_POSTS,
  )
  const {
    posts: { data, mutate },
    admin,
  } = useAdmin()

  const { watch, register } = useForm({
    resolver: zodResolver(searchPostsFormSchema),
    defaultValues: {
      query: '',
    },
  })
  const querySearch = watch('query')

  const posts = data
    ? data
        .filter((post) =>
          post.title.toLowerCase().includes(querySearch.toLowerCase().split()),
        )
        .slice(0, amountPostsPerView)
    : []

  useEffect(() => {
    function handleLoadPosts() {
      const isEndOfScroll =
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      if (isEndOfScroll) {
        setAmountPostsPerView((state) => state + INITIAL_QUANTITY_POSTS)
      }
    }

    window.addEventListener('scroll', handleLoadPosts)

    return () => {
      window.removeEventListener('scroll', handleLoadPosts)
    }
  }, [])

  async function handleDeletePost(id) {
    const agreed = confirm('Você tem certeza que deseja deletar essa postagem?')

    if (!agreed) return

    try {
      await api.delete(`/article/${id}`, {
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
      })
      mutate()
      alert('Postagem deletada com sucesso!')
    } catch (err) {
      alert(
        'Não conseguimos deletar a sua postagem. Verifique a sua conexão de internet ou tente novamente mais tarde.',
      )
    }
  }

  return (
    <>
      <header className="pb-6">
        <HeadingAdmin className="text-4xl">Postagens</HeadingAdmin>
        <p className="text-sm mt-2 text-gray-600 flex items-center">
          Clique no ícone <Icon icon="pepicons-pencil:dots-y" /> para editar ou
          deletar a postagem.
        </p>
      </header>

      <div className="border-b flex items-center gap-4 max-w-3xl">
        <Icon icon="fa6-solid:magnifying-glass" className="text-blue w-5 h-5" />
        <input
          type="text"
          className="font-IBM-plex-sans text-lg py-5 outline-none text-zinc-500 placeholder:text-zinc-500 font-medium w-full"
          placeholder="Digite aqui para buscar uma postagem"
          {...register('query')}
        />
      </div>

      {data && data.length <= 0 && (
        <p className="text-gray-800 text-left">
          Não existe nenhuma postagem no Blog ainda.{' '}
          <Link
            to="/admin/new-post"
            className="block mt-0.5 w-max text-green-300 border-b border-green-300"
          >
            Clique aqui para adicionar
          </Link>
        </p>
      )}

      <main className="mt-10 grid gap-8 grid-cols-[repeat(auto-fit,_minmax(16.125rem,_23.125rem))]">
        {posts &&
          posts.map((post) => (
            <div className="relative" key={post.id}>
              <CardBlog className="h-full" post={post} />

              <DropdownMenu.Root modal={false}>
                <DropdownMenu.Trigger className="absolute top-1 z-10 right-0 p-1 transition-colors duration-200 hover:text-green-300">
                  <Icon
                    icon="pepicons-pencil:dots-y"
                    className="w-7 h-7"
                    aria-hidden
                  />
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="bg-white rounded space-y-1 p-3 shadow-md">
                    <DropdownMenu.Item className="outline-0">
                      <Link
                        to={`/admin/edit/post/${post.slug}`}
                        className="flex items-center gap-2 text-blue duration-300 transition-colors p-2 hover:bg-blue hover:text-white rounded"
                      >
                        <Icon icon="fe:edit" className="w-5 h-5" />
                        Editar postagem
                      </Link>
                    </DropdownMenu.Item>

                    <DropdownMenu.Item className="outline-0">
                      <button
                        type="button"
                        onClick={() => handleDeletePost(post.id)}
                        className="flex items-center gap-2 border border-red-500 text-red-500 rounded p-2 transition-colors duration-300 hover:bg-red-500 hover:text-white"
                      >
                        <Icon
                          icon="ant-design:delete-filled"
                          className="w-5 h-5"
                        />
                        Deletar postagem
                      </button>
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>
          ))}
      </main>
    </>
  )
}
