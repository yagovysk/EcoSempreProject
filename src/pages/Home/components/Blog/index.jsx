import { Link } from 'react-router-dom'
import { useFetchData } from '../../../../hooks/useFetchData'

import { CardBlog } from '../../../../components/CardBlog'
import { ScrollReveal } from '../../../../components/ScrollReveal'
import { Dots } from '../../../../components/Loader/Dots'

import styles from './Blog.module.css'

export function Blog({ isMobile }) {
  const { data: posts, isLoading } = useFetchData('/articles?_page=1&_limit=3')

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
          {!isLoading ? (
            posts.map((post) => (
              <CardBlog
                key={post.id}
                img={post.imgURL}
                imgAlt="Imagem de floresta"
                categories={post.categories}
                title={post.title}
                timestamp={post.timestamp}
                description={post.content}
                path={post.id}
              />
            ))
          ) : (
            <div className={`${styles.wrapper_loader} container`}>
              <Dots />
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
