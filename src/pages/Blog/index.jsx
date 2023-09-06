import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import { useBreakpoint } from '../../hooks/useBreakpoint'

import { CardBlog } from '../../components/CardBlog'
import { HeaderSection } from '../../components/HeaderSection'
import { Pagination } from '../../components/Pagination'
import { ScrollReveal } from '../../components/ScrollReveal'
import { Loader } from './components/Loader'

import styles from './styles.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Blog',
  },
]
let POSTS_PER_PAGE = 6

export function Blog() {
  const widthWindow = useBreakpoint()
  POSTS_PER_PAGE = widthWindow <= 500 ? 3 : 6

  const [currentPage, setCurrentPage] = useState(0)

  const {
    data: posts,
    isLoading,
    error,
  } = useFetchData(`/articles?page=${currentPage + 1}&limit=${POSTS_PER_PAGE}`)

  if (!isLoading && error) {
    throw new Response('', {
      status: error.request.status <= 0 ? 500 : error.request.status,
      statusText: error.request.statusText || 'Internal Server Error',
      message: error.message,
    })
  }

  const startIndex = currentPage * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const postsPerPage = !isLoading && posts.slice(startIndex, endIndex)

  return (
    <main>
      <HeaderSection
        className={styles.header}
        title="Nosso Blog"
        linksMenu={linksMenu}
      />

      {isLoading ? (
        <ScrollReveal origin="bottom">
          <Loader />
        </ScrollReveal>
      ) : (
        <>
          <ScrollReveal origin="bottom">
            <article className={`${styles.posts_container} container`}>
              {postsPerPage.map((post) => (
                <CardBlog key={post.id} post={post} />
              ))}
            </article>
          </ScrollReveal>

          <ScrollReveal origin="top">
            <div className={styles.pagination_container}>
              <Pagination
                postsPerPage={POSTS_PER_PAGE}
                currentPage={currentPage}
                onNextPage={setCurrentPage}
                postsLength={posts.length}
              />
            </div>
          </ScrollReveal>
        </>
      )}
    </main>
  )
}
