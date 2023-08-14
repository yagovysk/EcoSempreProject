import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={styles.loader_wrapper}>
      <div className={`${styles.loader_posts_wrapper}`}>
        <span className={`${styles.loader}`}></span>
        <span className={`${styles.loader}`}></span>
        <span className={`${styles.loader}`}></span>
      </div>
      <div className={`${styles.loader_posts_wrapper}`}>
        <span className={`${styles.loader}`}></span>
        <span className={`${styles.loader}`}></span>
      </div>
    </div>
  )
}

export default Loader
