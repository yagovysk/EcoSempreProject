import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { dateFormatter } from '../../utils/dateFormatter'
import parse from 'html-react-parser'

import styles from './CardBlog.module.css'

export function CardBlog({ post }) {
  const timestamp = dateFormatter(post.createdAt)
  const categories = post.categories
    ? post.categories.join(', ').replaceAll('-', ' ')
    : null

  return (
    <article className={styles.card_wrapper}>
      <div className={`${styles.img_wrapper} img_loading`}>
        <img
          loading="lazy"
          src={
            post.thumbnail_url || 'https://source.unsplash.com/random/500x500'
          }
          alt=""
        />
      </div>

      <div className={styles.categories_wrapper}>
        <span title={categories}>{categories}</span>
      </div>

      <section className={styles.content_text}>
        <h3 className={styles.title}>{post.title}</h3>

        <div className={styles.timestamp_wrapper}>
          <span>{timestamp}</span>
          <span>{post.author}</span>
        </div>

        <p className={styles.description}>{parse(post.content)}</p>

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
