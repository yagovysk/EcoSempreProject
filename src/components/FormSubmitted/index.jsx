import { Icon } from "@iconify/react";
import styles from "./FormSubmitted.module.css";

export function FormSubmitted({ reset, title, description }) {
  return (
    <div className={styles.form_submitted_wrapper}>
      <div className={styles.icon_submitted_wrapper}>
        <Icon
          className={styles.icon_submitted}
          icon="icon-park-solid:check-one"
          aria-hidden={true}
        />
      </div>
      <h2 className={`title ${styles.title_submitted}`}>{title}</h2>
      <p className={styles.paragraph_submitted}>{description}</p>
      <button
        type="button"
        onClick={reset}
        className={`btn btn-link ${styles.btn_submitted}`}
      >
        Concluído
      </button>
    </div>
  );
}
