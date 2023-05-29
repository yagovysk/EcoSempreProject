import styles from "./HeaderSection.module.css";
import { Submenu } from "./Submenu";

export function HeaderSection({ title, linksMenu, className }) {
  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={styles.titleHeader}>{title}</h1>
      <Submenu content={linksMenu} />
    </div>
  );
}
