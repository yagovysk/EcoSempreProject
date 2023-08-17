import { Link } from 'react-router-dom'
import { useFetchData } from '../../hooks/useFetchData'

import Loader from '../Loader'

import styles from './AsideBlog.module.css'

export function AsideBlog() {
  const { data: recentPosts, isLoading: isLoadingRecentPosts } = useFetchData(
    '/articles?_sort=timestamp&_order=desc&_limit=3',
  )
  const { data: tags, isLoading: isLoadingTags } = useFetchData('/tags')
  const { data: categories, isLoading: isLoadingCategories } =
    useFetchData('/categories')

  if (isLoadingRecentPosts && isLoadingCategories && isLoadingTags) {
    return <Loader />
  }

  return (
    <aside className={styles.aside}>
      <section className={styles.box_aside_posts}>
        <h3 className={styles.title_box_aside}>Posts Recentes</h3>
        <div className={styles.recent_post_container}>
          {recentPosts &&
            recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/posts/${post.id}`}
                className={styles.recent_post_wrapper}
              >
                <picture className={styles.recent_post_wrapper_img}>
                  <img
                    src={post.imgURL}
                    alt=""
                    className={styles.recent_post_img}
                  />
                </picture>
                <time className={styles.recent_post_timestamp}>
                  {post.timestamp}
                </time>
                <p className={styles.recent_post_title}>{post.title}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className={styles.box_aside}>
        <h3 className={styles.title_box_aside}>Categorias</h3>
        <div className={styles.categories_wrapper}>
          {categories &&
            categories.map((category) => (
              <Link key={category} to={`/`} className={styles.category_aside}>
                {category}
              </Link>
            ))}
        </div>
      </section>

      <section className={styles.box_aside}>
        <h3 className={styles.title_box_aside}>Tags</h3>
        <div className={styles.tags_wrapper_aside}>
          {tags &&
            tags.map((tag) => (
              <Link key={tag} to={`/`} className={styles.tag}>
                {tag}
              </Link>
            ))}
        </div>
      </section>
    </aside>
  )
}
