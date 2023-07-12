import { CardBlog } from "../../components/CardBlog";
import { HeaderSection } from "../../components/HeaderSection";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";
import { useBreakpoint } from "../../helpers.js";
import { ScrollReveal } from "../../components/ScrollReveal";
import styles from "./Blog.module.css";
import api from "../../api/posts";
import { useLoaderData } from "react-router-dom";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Blog",
  },
];
let POSTS_PER_PAGE = 6;

export async function loader() {
  const posts = await api
    .get("/articles")
    .then((response) => response.data)
    .catch((err) => {
      throw new Response("", {
        status: err.response.status,
        statusText: err.response.statusText,
      });
    });
  return { posts };
}

export function Blog() {
  const widthWindow = useBreakpoint();
  POSTS_PER_PAGE = widthWindow <= 500 ? 3 : 6;

  return (
    <main>
      <HeaderSection
        className={styles.header}
        title="Nosso Blog"
        linksMenu={linksMenu}
      />

      <Posts />
    </main>
  );
}

function Posts() {
  const [pageIndex, setPageIndex] = useState(0);
  const { posts } = useLoaderData();

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  return (
    <>
      <ScrollReveal origin="bottom">
        <article className={`${styles.posts_container} container`}>
          {postsPerPage.map((post) => (
            <CardBlog
              key={post.id}
              img={post.imgURL}
              imgAlt="Imagem de floresta"
              categories={post.categories}
              title={post.title}
              timestamp={post.timestamp}
              description={post.content}
              path={post.id}
            />
          ))}
        </article>
      </ScrollReveal>

      <ScrollReveal origin="top">
        <div className={styles.pagination_container}>
          <Pagination
            postsPerPage={POSTS_PER_PAGE}
            pageIndex={pageIndex}
            onNextPage={setPageIndex}
            postsLength={posts.length}
          />
        </div>
      </ScrollReveal>
    </>
  );
}
