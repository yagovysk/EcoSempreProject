import styles from "../Home/Blog.module.css";
import { CardBlog } from "../CardBlog";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";
import { useBlog } from "../../context/BlogContext";

export function Blog() {
  const { posts } = useBlog();

  return (
    <div className={`${styles.idBlog} container`}>
      <section className={`textsContainer ${styles.texts}`}>
        <span className="small-text">Nosso Blog</span>
        <h2 className="title">Acompanhe Nossos Artigos Mais Recentes</h2>
      </section>
      <div className={styles.grid_cards}>
        {posts.length > 0 &&
          posts.map((post) => (
            <CardBlog
              img={post.imgURL}
              imgAlt="Imagem de floresta"
              categories={post.categories}
              title={post.title}
              timestamp={post.timestamp}
              description={post.content}
              path={post.id}
            />
          ))}
      </div>

      <Link
        onClick={scrollToTop}
        to="/blog"
        className={`link_more ${styles.link_more}`}
      >
        Veja Mais Notícias!
      </Link>
    </div>
  );
}
