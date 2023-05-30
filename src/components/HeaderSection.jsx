import styles from "./HeaderSection.module.css";
import { Breadcrump } from "./Breadcrump";

export function HeaderSection({ title, linksMenu, className }) {
  return (
    <div className={`${styles.header} ${className}`}>
      <h1 className={styles.titleHeader}>{title}</h1>
      <Breadcrump content={linksMenu} />
    </div>
  );
}
