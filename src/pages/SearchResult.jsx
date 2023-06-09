import { Link, useFormAction } from "react-router-dom";
import { HeaderSection } from "../components/HeaderSection";
import { AsideBlog } from "../components/AsideBlog";
import { useState } from "react";
import { useGetData } from "../helpers";
import styles from "./SearchResult.module.css";
import { Pagination } from "../components/Pagination";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Busca",
  },
];
const POSTS_PER_PAGE = 3;

export function SearchResult() {
  const [posts, setPosts] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  const query = useFormAction().replace("/search?q=", "");

  useGetData(`/articles?title_like=${query}`, setPosts, [...query]);

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  return (
    <main>
      <HeaderSection
        title="Resultados da busca"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <div className={`${styles.container_content} container`}>
        <div className={styles.posts_container}>
          {posts &&
            postsPerPage.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                imgURL={post.imgURL}
              />
            ))}

          <Pagination
            postsPerPage={POSTS_PER_PAGE}
            pageIndex={pageIndex}
            onNextPage={setPageIndex}
            postsLength={posts.length}
          />
        </div>

        <AsideBlog />
      </div>
    </main>
  );
}

function Card({ id, title, content, imgURL }) {
  return (
    <article className={styles.card_wrapper}>
      <div className={styles.card_img_wrapper}>
        <img src={imgURL} alt={title} />
      </div>

      <section className={styles.card_texts_wrapper}>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_content}>{content}</p>
        <Link
          to={`/articles/${id}`}
          className={`link_more ${styles.card_link}`}
        >
          Saiba Mais
        </Link>
      </section>
    </article>
  );
}
