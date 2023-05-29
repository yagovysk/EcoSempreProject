import { Link } from "react-router-dom";
import styles from "./Submenu.module.css";
import { CaretRight } from "@phosphor-icons/react";
import { Fragment } from "react";

export function Submenu({ content }) {
  const contentWithoutLastLink = content.slice(0, content.length - 1);
  const contentWithLastLink = content.slice(content.length - 1);
  return (
    <div className={styles.menu}>
      {contentWithoutLastLink.map((link) => (
        <Fragment key={link.path}>
          <Link
            to={link.path}
            className={`${styles.menu_item} ${styles.menu_item_active}`}
          >
            {link.name}
          </Link>
          <CaretRight weight="bold" className={styles.small_arrow} />
        </Fragment>
      ))}
      {contentWithLastLink.map((link) => (
        <span key={link.name} className={styles.menu_item}>
          {link.name}
        </span>
      ))}
    </div>
  );
}
