import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { dateFormatter } from '../../utils/dateFormatter'

import styles from './CardBlog.module.css'

export function CardBlog({ post }) {
  // const copyCategories = [...categories].join(', ')
  const timestamp = dateFormatter(post.createdAt)

  return (
    <article className={styles.card_wrapper}>
      <div className={`${styles.img_wrapper} img_loading`}>
        <img
          loading="lazy"
          src={post.img || 'https://source.unsplash.com/random/500x500'}
          alt=""
        />
      </div>

      <div className={styles.categories_wrapper}>
        <span>Sustentabilidade, Ecologia</span>
      </div>

      <section className={styles.content_text}>
        <h3 className={styles.title}>{post.title}</h3>

        <div className={styles.timestamp_wrapper}>
          <span>{timestamp}</span>
          <span>{post.author}</span>
        </div>

        <p className={styles.description}>{post.content}</p>

        <Link
          aria-label="Saiba mais sobre o post"
          className={`${styles.btn}`}
          to={`/posts/${post.slug}`}
          role="button"
        >
          Saiba Mais
          <Icon
            className={styles.arrow_icon}
            icon="material-symbols:arrow-circle-right-rounded"
            aria-hidden
          />
        </Link>
      </section>

      <div aria-hidden className={styles.trace}></div>
    </article>
  )
}
