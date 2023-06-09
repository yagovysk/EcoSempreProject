import styles from "../pages/Blog.module.css";
import { CardBlog } from "../components/CardBlog.jsx";
import { HeaderSection } from "../components/HeaderSection.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { useState } from "react";
import { useGetData } from "../helpers";
import Loader from "../components/Loader";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Blog",
  },
];
const POSTS_PER_PAGE = 6;

export function Blog() {
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
  const [posts, setPosts] = useState("");
  const [pageIndex, setPageIndex] = useState(0);
  useGetData("/articles", setPosts);

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
