import { Icon } from "@iconify/react";
import styles from "./CardBlog.module.css";

export function CardBlog({
  img,
  imgAlt,
  categories,
  title,
  timestamp,
  description,
}) {
  const copyCategories = [...categories].join(", ");

  return (
    <article className={styles.card_wrapper}>
      <div className={styles.img_wrapper}>
        <img src={img} alt={imgAlt} />
      </div>

      <div className={styles.categories_wrapper}>
        <span>{copyCategories}</span>
      </div>

      <section className={styles.content_text}>
        <h4 className={styles.title}>{title}</h4>

        <div className={styles.timestamp_wrapper}>
          <span>{timestamp}</span>
          <span>EcoSempre</span>
        </div>

        <p className={styles.description}>{description}</p>

        <button type="button" className={styles.btn}>
          <a className={styles.btn_link} href="">
            Saiba Mais
            <Icon
              className={styles.arrow_icon}
              icon="material-symbols:arrow-circle-right-rounded"
            />
          </a>
        </button>
      </section>

      <div className={styles.trace}></div>
    </article>
  );
}
