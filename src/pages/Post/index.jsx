import { useParams } from 'react-router-dom'
import { Fragment } from 'react'
import { Icon } from '@iconify/react'
import parse from 'html-react-parser'

import { AsideBlog } from '../../components/AsideBlog'
import { Loader } from './components/Loader'
import { BreadcrumbLoader } from './components/BreadcrumbLoader'
import { useFetchData } from '../../hooks/useFetchData'
import { dateFormatter } from '../../utils/dateFormatter'

import styles from './styles.module.css'

export function Post() {
  const { key } = useParams()
  const {
    data: post,
    isLoading: isLoadingPost,
    error,
  } = useFetchData(`/article/${key}`)

  if (error) {
    throw new Response('', {
      status: error.request.status <= 0 ? 500 : error.request.status,
      statusText: error.request.statusText || 'Internal Server Error',
      message: error.message,
    })
  }

  const categories =
    !isLoadingPost &&
    post.categories.map((category) => category.replaceAll('-', ' '))

  const stringCategories = !isLoadingPost && categories.join(', ')
  const breadcrumb = !isLoadingPost && [
    'Início',
    'Blog',
    stringCategories,
    post.title,
  ]

  return (
    <main className={`container ${styles.container}`}>
      {!isLoadingPost ? (
        <section className={styles.breadcrumb}>
          {breadcrumb.map((subtile, index) => (
            <Fragment key={index}>
              <span
                className={`${styles.subtitle_breadcrumb} ${
                  index === breadcrumb.length - 1 &&
                  styles.last_subtitle_breadcrumb
                }`}
              >
                {subtile}
              </span>
              {index !== breadcrumb.length - 1 && (
                <Icon icon="iconamoon:arrow-right-2" />
              )}
            </Fragment>
          ))}
        </section>
      ) : (
        <BreadcrumbLoader />
      )}

      {isLoadingPost ? (
        <Loader />
      ) : (
        <article className={styles.post_container}>
          <div className={`${styles.wrapper_img_post} img_loading`}>
            <img
              src={
                post.thumbnail_url ||
                'https://source.unsplash.com/random/500x500'
              }
              alt=""
              className={styles.img_post}
            />
          </div>

          <div className={styles.content_post}>
            <section className={styles.content_post_title}>
              <div className={styles.wrapper_small_information}>
                <time className={styles.small_information}>
                  {dateFormatter(post.createdAt)}
                </time>
                <span
                  title={stringCategories}
                  className={`${styles.categories}`}
                >
                  {stringCategories}
                </span>
                <span className={styles.small_information}>{post.author}</span>
              </div>

              <h2 className={`title ${styles.title}`}>{post.title}</h2>
            </section>

            <p className={styles.paragraph}>{parse(post.content)}</p>
          </div>

          <section className={styles.wrapper_footer_post}>
            <div className={styles.tags_wrapper}>
              {post.tags.length &&
                post.tags.map((tag) => (
                  <span className={styles.tag} key={tag}>
                    {tag.replaceAll('-', ' ')}
                  </span>
                ))}
            </div>

            <div className={styles.social_media_wrapper}>
              <span className={styles.share}>Compartilhe</span>

              <a
                href="/"
                target="_blank"
                aria-label="Instagram"
                className={styles.social_media}
              >
                <Icon aria-hidden icon="entypo-social:instagram-with-circle" />
              </a>

              <a
                href="/"
                target="_blank"
                aria-label="Facebook"
                className={styles.social_media}
              >
                <Icon aria-hidden icon="ic:baseline-facebook" />
              </a>

              <a
                href="/"
                target="_blank"
                aria-label="WhatsApp"
                className={styles.social_media}
              >
                <Icon aria-hidden icon="ri:whatsapp-fill" />
              </a>
            </div>
          </section>
        </article>
      )}

      <AsideBlog />
    </main>
  )
}
