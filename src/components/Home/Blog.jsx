import { CardBlog } from "../CardBlog";
import styles from "../Home/Blog.module.css";
import florest from "../../assets/florestImg.jpg";

export function Blog() {
  return (
    <section className={styles.idBlog}>
      <article>
        <h1>Nosso Blog</h1>
        <h2>Acompanhe Nossos Artigos Mais Recentes</h2>
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
      </article>
    </section>
  );
}
