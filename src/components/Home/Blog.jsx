import { CardBlog } from "../CardBlog";
import styles from "../Home/Blog.module.css";
import florest from "../../assets/florestImg.jpg";
import { Link } from "react-router-dom";

export function Blog() {
  return (
    <div className={`${styles.idBlog} container`}>
      <section className={`textsContainer ${styles.texts}`}>
        <span className="small-text">Nosso Blog</span>
        <h2 className="title">Acompanhe Nossos Artigos Mais Recentes</h2>
      </section>
      <div className={styles.grid_cards}>
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
      </div>

      <Link to="/blog" className={styles.link_more}>
        Veja Mais Notícias!
      </Link>
    </div>
  );
}
