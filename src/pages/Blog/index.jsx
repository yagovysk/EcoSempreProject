import { CardBlog } from "../../components/CardBlog";
import { HeaderSection } from "../../components/HeaderSection";
import { Pagination } from "../../components/Pagination";
import { useState } from "react";
import { useBreakpoint, useGetData } from "../../helpers.js";
import Loader from "../../components/Loader";
import styles from "./Blog.module.css";

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

export function Blog() {
  const widthWindow = useBreakpoint();
  POSTS_PER_PAGE = widthWindow <= 630 ? 3 : 6;

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
  const posts = useGetData("/articles");

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  return posts.length > 0 ? (
    <>
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

      <div className={styles.pagination_container}>
        <Pagination
          postsPerPage={POSTS_PER_PAGE}
          pageIndex={pageIndex}
          onNextPage={setPageIndex}
          postsLength={posts.length}
        />
      </div>
    </>
  ) : (
    <Loader />
  );
}
