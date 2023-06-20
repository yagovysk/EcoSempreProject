import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";
import styles from "./CardBlog.module.css";

export function CardBlog({
  img,
  imgAlt,
  categories,
  title,
  timestamp,
  description,
  path,
}) {
  const copyCategories = [...categories].join(", ");

  return (
    <article className={styles.card_wrapper}>
      <div className={styles.img_wrapper}>
        <img loading="lazy" src={img} alt={imgAlt} />
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

        <button type="button" onClick={scrollToTop} className={styles.btn}>
          <Link
            aria-label="Saiba mais sobre o post"
            className={styles.btn_link}
            to={`/articles/${path}`}
          >
            Saiba Mais
            <Icon
              className={styles.arrow_icon}
              icon="material-symbols:arrow-circle-right-rounded"
            />
          </Link>
        </button>
      </section>

      <div className={styles.trace}></div>
    </article>
  );
}
