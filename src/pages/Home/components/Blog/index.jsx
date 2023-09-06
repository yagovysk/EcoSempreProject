import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useFetchData } from '../../../../hooks/useFetchData'

import { CardBlog } from '../../../../components/CardBlog'
import { ScrollReveal } from '../../../../components/ScrollReveal'
import { Dots } from '../../../../components/Loader/Dots'

import styles from './Blog.module.css'

export function Blog({ isMobile }) {
  const {
    data: posts,
    isLoading,
    error,
  } = useFetchData('/articles?page=1&limit=3')

  return (
    <div className={`${styles.idBlog} container ${isMobile && styles.mobile}`}>
      <section className={`textsContainer ${styles.texts}`}>
        <ScrollReveal origin="bottom">
          <span className="small-text">Nosso Blog</span>
          <h2 className="title">Acompanhe Nossos Artigos Mais Recentes</h2>
        </ScrollReveal>
      </section>
      <ScrollReveal origin="top">
        <div className={styles.grid_cards}>
          {isLoading && !error && (
            <div className={`${styles.wrapper_loader} container`}>
              <Dots />
            </div>
          )}

          {!isLoading &&
            !error &&
            posts.map((post) => <CardBlog key={post.id} post={post} />)}

          {error && (
            <div className="grid place-content-center place-items-center min-h-[100px] sm:min-h-[200px] gap-6">
              <Icon
                icon="fa-regular:sad-tear"
                className="w-12 h-12 text-blue"
              />
              <p className="text-gray-500 text-lg font-roboto max-w-md text-center font-medium">
                Oops! Parece que ocorreu um erro no servidor. Recarregue a
                página ou tente novamente mais tarde.
              </p>
            </div>
          )}
        </div>
      </ScrollReveal>

      <ScrollReveal origin="top">
        <div className={styles.wrapper_link_more}>
          <Link to="/blog" className={`link_more ${styles.link_more}`}>
            Veja Mais Notícias!
          </Link>
        </div>
      </ScrollReveal>
    </div>
  )
}
