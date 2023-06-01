import { Icon } from "@iconify/react";
import styles from "./Pagination.module.css";

export function Pagination({ size, currentPage }) {
  const sizePagesArr = Array.from(Array(size), (n, index) => index + 1);

  return (
    <div className={styles.wrapper_pagination}>
      {sizePagesArr.map((page) => (
        <button
          key={page}
          type="button"
          className={`${styles.btn_pagination} ${
            page === currentPage && styles.active
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className={`${styles.btn_pagination} ${styles.btn_arrow} `}
      >
        <Icon icon="octicon:arrow-right-16" />
      </button>
    </div>
  );
}
