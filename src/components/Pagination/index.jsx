import { Icon } from '@iconify/react'
import styles from './Pagination.module.css'

export function Pagination({
  pageIndex,
  onNextPage,
  postsPerPage,
  postsLength,
}) {
  const sizePagination = Math.ceil(postsLength / postsPerPage)

  const sizePagesArr = Array.from(
    Array(sizePagination),
    (n, index) => index + 1,
  )
  return (
    <div
      className={styles.wrapper_pagination}
      role="navigation"
      aria-label="Paginação"
    >
      {sizePagesArr.map((page, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onNextPage(index)}
          className={`${styles.btn_pagination} ${
            page === pageIndex + 1 && styles.active
          }`}
          aria-label={`Página atual, Página ${page}`}
          aria-current={page === pageIndex + 1 ? 'true' : 'false'}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        disabled={pageIndex + 1 >= sizePagination}
        onClick={() => onNextPage(pageIndex + 1)}
        className={`${styles.btn_pagination} ${styles.btn_arrow} `}
        aria-label={
          pageIndex + 1 >= sizePagination
            ? 'Fim das páginas'
            : `Ir para a página ${pageIndex + 2}`
        }
      >
        <Icon icon="octicon:arrow-right-16" />
      </button>
    </div>
  )
}
