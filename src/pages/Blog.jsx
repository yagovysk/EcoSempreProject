import styles from "../pages/Blog.module.css";
import { CardBlog } from "../components/CardBlog.jsx";
import { HeaderSection } from "../components/HeaderSection.jsx";
import { Pagination } from "../components/Pagination.jsx";
import { useEffect, useState } from "react";
import api from "../api/posts.js";

const linksMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blog",
  },
];
const POSTS_PER_PAGE = 6;

export function Blog() {
  const [posts, setPosts] = useState("");
  const [pageIndex, setPageIndex] = useState(0);

  const startIndex = pageIndex * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const postsPerPage = posts.slice(startIndex, endIndex);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get("/articles");
        setPosts(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    getPosts();
  }, []);

  return (
    <main>
      <HeaderSection
        className={styles.header}
        title="Nosso Blog"
        linksMenu={linksMenu}
      />

      <article className={`${styles.posts_container} container`}>
        {posts.length > 0 &&
          postsPerPage.map((post) => (
            <CardBlog
              img={post.imgURL}
              imgAlt="Imagem de floresta"
              categories={post.categories}
              title={post.title}
              timestamp={post.timestamp}
              description={post.content}
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
    </main>
  );
}
