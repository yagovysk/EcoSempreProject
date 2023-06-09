import styles from "../pages/Blog.module.css";
import { CardBlog } from "../components/CardBlog.jsx";
import { HeaderSection } from "../components/HeaderSection.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { BlogProvider, useBlog } from "../context/BlogContext";
import { useState } from "react";

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
    <BlogProvider endpoint="/articles">
      <main>
        <HeaderSection
          className={styles.header}
          title="Nosso Blog"
          linksMenu={linksMenu}
        />

        <Posts />
      </main>
    </BlogProvider>
  );
}

function Posts() {
  const { posts } = useBlog();
  const [pageIndex, setPageIndex] = useState(0);

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  return (
    <>
      <article className={`${styles.posts_container} container`}>
        {posts.length > 0 &&
          postsPerPage.map((post) => (
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
  );
}
