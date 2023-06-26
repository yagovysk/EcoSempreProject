import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "../ScrollReveal";
import styles from "./HeaderSection.module.css";

export function HeaderSection({ title, linksMenu, className }) {
  const contentWithoutLastLink = linksMenu.slice(0, linksMenu.length - 1);
  const lastLink = linksMenu[linksMenu.length - 1];
  return (
    <div className={`${styles.header} ${className}`}>
      <ScrollReveal origin="bottom" immediately={true}>
        <h1 className={styles.titleHeader}>{title}</h1>
      </ScrollReveal>
      <ScrollReveal origin="bottom" immediately={true}>
        <div className={styles.menu}>
          {contentWithoutLastLink.map((link) => (
            <Fragment key={link.name}>
              <Link
                to={link.path}
                className={`${styles.menu_item} ${styles.menu_item_active}`}
              >
                {link.name}
              </Link>
              <Icon
                icon="iconamoon:arrow-right-2"
                className={styles.small_arrow}
              />
            </Fragment>
          ))}
          <span key={lastLink.name} className={styles.menu_item}>
            {lastLink.name}
          </span>
        </div>
      </ScrollReveal>
    </div>
  );
}
