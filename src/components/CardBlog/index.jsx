import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import styles from './CardBlog.module.css'

export function CardBlog({
  img,
  categories,
  title,
  timestamp,
  description,
  path,
}) {
  const copyCategories = [...categories].join(', ')

  return (
    <article className={styles.card_wrapper}>
      <div className={`${styles.img_wrapper} img_loading`}>
        <img loading="lazy" src={img} alt="" />
      </div>

      <div className={styles.categories_wrapper}>
        <span>{copyCategories}</span>
      </div>

      <section className={styles.content_text}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.timestamp_wrapper}>
          <span>{timestamp}</span>
          <span>EcoSempre</span>
        </div>

        <p className={styles.description}>{description}</p>

        <Link
          aria-label="Saiba mais sobre o post"
          className={`${styles.btn}`}
          to={`/posts/${path}`}
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
