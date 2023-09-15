import { Link } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'
import { dateFormatter } from '../../utils/dateFormatter'

import Loader from '../Loader'

import styles from './AsideBlog.module.css'

export function AsideBlog() {
  const { data: recentPosts, isLoading: isLoadingRecentPosts } = useFetchData(
    '/articles?page=1&limit=3',
  )
  const { data: tags, isLoading: isLoadingTags } = useFetchData('/tags')
  const { data: categories, isLoading: isLoadingCategories } =
    useFetchData('/category-article')

  if (isLoadingRecentPosts || isLoadingTags || isLoadingCategories) {
    return <Loader />
  }

  return (
    <aside className={styles.aside}>
      <section className={styles.box_aside_posts}>
        <strong className={styles.title_box_aside}>Posts Recentes</strong>
        <div>
          {recentPosts &&
            recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.slug}`}
                className={styles.recent_post_wrapper}
              >
                <picture className={styles.recent_post_wrapper_img}>
                  <img
                    src={
                      post.thumbnail_url ||
                      'https://source.unsplash.com/random/500x500'
                    }
                    alt=""
                    className={styles.recent_post_img}
                  />
                </picture>
                <time className={styles.recent_post_timestamp}>
                  {dateFormatter(post.createdAt)}
                </time>
                <p className={styles.recent_post_title}>{post.title}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className={styles.box_aside}>
        <strong className={styles.title_box_aside}>Categorias</strong>
        {categories ? (
          <div className={styles.categories_wrapper}>
            {categories &&
              categories.map((category) => (
                <Link
                  key={category}
                  to={`/buscar?category=${category.name}`}
                  className={styles.category_aside}
                >
                  {category.name.replaceAll('-', ' ')}
                </Link>
              ))}
          </div>
        ) : (
          <p className="font-roboto text-gray-500">
            Não conseguimos encontrar nenhuma categoria no momento.
          </p>
        )}
      </section>

      <section className={styles.box_aside}>
        <strong className={styles.title_box_aside}>Tags</strong>
        {!tags ? (
          <p className={`font-roboto text-gray-500`}>
            Não conseguimos encontrar nenhuma tag no momento.
          </p>
        ) : (
          <div className={`${styles.tags_wrapper_aside}`}>
            {tags &&
              tags.map((tag) => (
                <Link
                  key={tag.id}
                  to={`/buscar?tag=${tag.name}`}
                  className={styles.tag}
                >
                  {tag.name.replaceAll('-', ' ')}
                </Link>
              ))}
          </div>
        )}
      </section>
    </aside>
  )
}
