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
  const [pageIndex, setPageIndex] = useState(0)

  const { data: posts, isLoading } = useFetchData('/articles')

  POSTS_PER_PAGE = widthWindow <= 500 ? 3 : 6

  const startIndex = pageIndex * POSTS_PER_PAGE
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
                <CardBlog
                  key={post.id}
                  img={post.imgURL}
                  categories={post.categories}
                  title={post.title}
                  timestamp={post.timestamp}
                  description={post.content}
                  path={post.id}
                />
              ))}
            </article>
          </ScrollReveal>

          <ScrollReveal origin="top">
            <div className={styles.pagination_container}>
              <Pagination
                postsPerPage={POSTS_PER_PAGE}
                pageIndex={pageIndex}
                onNextPage={setPageIndex}
                postsLength={posts.length}
              />
            </div>
          </ScrollReveal>
        </>
      )}
    </main>
  )
}
