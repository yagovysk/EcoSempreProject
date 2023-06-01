import { CardBlog } from "../components/CardBlog.jsx";
import { HeaderSection } from "../components/HeaderSection.jsx";
import florest from "../assets/florestImg.jpg";
import styles from "../pages/Blog.module.css";
import { Pagination } from "../components/Pagination.jsx";

const linksMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
  },
];

const temp_posts = [1, 2, 3, 4, 5, 6];

export function Blog() {
  return (
    <main>
      <HeaderSection
        className={styles.header}
        title="Nosso Blog"
        linksMenu={linksMenu}
      />

      <article className={`${styles.posts_container} container`}>
        {temp_posts.map((post) => (
          <CardBlog
            img={florest}
            imgAlt="Imagem de floresta"
            categories={["Sustentabilidade", "Ecologia"]}
            title="Explorando a Sustentabilidade: Dicas e Insights para um Futuro Mais Verde"
            timestamp="11 de maio, 2023"
            description={`Descubra como você pode fazer a diferença no mundo 
            e contribuir para um futuro mais verde. Aprenda a reduzir seu 
            impacto ambiental, reutilizar recursos, reciclar...`}
          />
        ))}
      </article>

      <div className={styles.pagination_container}>
        <Pagination size={2} currentPage={1} />
      </div>
    </main>
  );
}
