import { Icon } from "@iconify/react";
import styles from "./ButtonToTop.module.css";

export const ButtonToTop = () => {
  const handleScrollToTop = () => {
    document.body.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Voltar ao topo"
      type="button"
      className={styles.back_to_top}
      onClick={handleScrollToTop}
    >
      <Icon icon="material-symbols:arrow-upward-rounded" aria-hidden={true} />
    </button>
  );
};
