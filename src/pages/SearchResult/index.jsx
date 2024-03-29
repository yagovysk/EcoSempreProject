import { Link, useLoaderData, useNavigation, Form } from 'react-router-dom'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { HeaderSection } from '../../components/HeaderSection'
import { AsideBlog } from '../../components/AsideBlog'
import { Pagination } from '../../components/Pagination'
import parse from 'html-react-parser'
import api from '../../lib/axios'

import './SearchResult.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Busca',
  },
]
const POSTS_PER_PAGE = 3

export async function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const category = url.searchParams.get('category')
  const tag = url.searchParams.get('tag')

  const filteredPostsByTag =
    tag &&
    (await api
      .get(`/articles/tag/${tag}`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Response('', {
          status: err.request.status || 500,
          statusText: err.request.statusText || 'Internal Server Error',
        })
      }))

  if (filteredPostsByTag) {
    return {
      posts: filteredPostsByTag,
      tag,
    }
  }

  const filteredPostsByCategory =
    category &&
    (await api
      .get(`/articles/category/${category}`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Response('', {
          status: err.request.status || 500,
          statusText: err.request.statusText || 'Internal Server Error',
        })
      }))

  if (filteredPostsByCategory) {
    return {
      posts: filteredPostsByCategory,
      category,
    }
  }

  const posts =
    q &&
    (await api
      .get(`/articles`)
      .then((response) => response.data)
      .catch((err) => {
        throw new Response('', {
          status: err.request.status || 500,
          statusText: err.request.statusText || 'Internal Server Error',
        })
      }))

  const filteredPostsByTitle = posts
    ? posts.filter((post) => post.title.toLowerCase().includes(q.toLowerCase()))
    : []

  return { posts: filteredPostsByTitle, q, category, tag }
}

export function SearchResult() {
  const { posts, q, category, tag } = useLoaderData()
  const [currentPage, setCurrentPage] = useState(0)

  const startIndex = currentPage * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const postsPerPage = posts.slice(startIndex, endIndex)

  const suffixTitleHeader = category
    ? `- ${category.replaceAll('-', ' ')}`
    : tag
    ? `- ${tag.replaceAll('-', ' ')}`
    : ''

  return (
    <main className={`main_search_result`}>
      <HeaderSection
        title={'Resultados da busca ' + suffixTitleHeader}
        linksMenu={linksMenu}
        className={'header'}
      />

      <div className={`container_content container`}>
        {posts.length ? (
          <div className={'posts_container'}>
            {postsPerPage.map((post) => (
              <article key={post.id} className={'card_wrapper'}>
                <div className={'card_img_wrapper'}>
                  <img src={post.thumbnail_url} alt="" />
                </div>

                <section className={'card_texts_wrapper'}>
                  <h2 className={`title title_card`}>{post.title}</h2>
                  <p className={'content'}>{parse(post.content)}</p>
                  <Link
                    to={`/posts/${post.slug}`}
                    className={`link_more ${'card_link'}`}
                  >
                    Saiba Mais
                  </Link>
                </section>
              </article>
            ))}

            <Pagination
              postsPerPage={POSTS_PER_PAGE}
              currentPage={currentPage}
              onNextPage={setCurrentPage}
              postsLength={posts.length}
            />
          </div>
        ) : (
          <section className={'error_wrapper'}>
            <h2 className={'title'}>Nenhum Resultado Encontrado!</h2>
            <p className={'content_error'}>
              Desculpe, não encontramos resultados para a sua busca. Mas não
              desista! Continue explorando nosso site para encontrar outras
              informações valiosas sobre reciclagem e sustentabilidade.
            </p>

            <FormSearch key={q} placeholder="Pesquisar..." />
          </section>
        )}

        <AsideBlog />
      </div>
    </main>
  )
}

function FormSearch({ placeholder }) {
  const [search, setSearch] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const navigation = useNavigation()

  return (
    <Form
      role="search"
      className={`search_form ${isTouched ? 'active' : ''}`}
      onFocus={() => setIsTouched(true)}
      onBlur={() => setIsTouched(false)}
    >
      <Icon className="search_icon" icon="fa6-solid:magnifying-glass" />
      <input
        type="text"
        name="q"
        aria-label={placeholder}
        placeholder={placeholder}
        className="search_input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        disabled={navigation.state === 'loading'}
      />
    </Form>
  )
}
