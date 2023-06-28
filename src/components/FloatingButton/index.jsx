import { Icon } from "@iconify/react";
import styles from "./FloatingButton.module.css";

export const FloatingButton = () => {
  return (
    <a
      href="tel:+(61) 98378-1438"
      role="button"
      aria-label="Abrir whatsapp da EcoSempre"
      className={styles.btn}
    >
      <Icon icon="ic:baseline-whatsapp" />
    </a>
  );
};
