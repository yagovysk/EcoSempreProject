import { HeaderSection } from "../components/HeaderSection.jsx";
import styles from "../pages/Blog.module.css";

const linksMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
  },
];

export function Blog() {
  return (
    <main>
      <HeaderSection
        className={styles.header}
        title="Nosso Blog"
        linksMenu={linksMenu}
      />
    </main>
  );
}
