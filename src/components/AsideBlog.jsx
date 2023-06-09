import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/posts";
import styles from "./AsideBlog.module.css";

export function AsideBlog() {
  const [recentPosts, setRecentPosts] = useState("");
  const [tags, setTags] = useState("");
  const [categories, setCategories] = useState("");

  useEffect(() => {
    async function getRecentPosts() {
      try {
        const response = await api.get(
          "/articles?_sort=timestamp&_order=desc&_limit=3"
        );
        setRecentPosts(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    async function getTags() {
      try {
        const response = await api.get("/tags");
        setTags(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    async function getCategories() {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }

    getRecentPosts();
    getTags();
    getCategories();
  }, []);

  return (
    <aside className={styles.aside}>
      <section className={styles.box_aside_posts}>
        <h3 className={styles.title_box_aside}>Posts Recentes</h3>
        <div className={styles.recent_post_container}>
          {recentPosts &&
            recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/articles/${post.id}`}
                className={styles.recent_post_wrapper}
              >
                <img src={post.imgURL} className={styles.recent_post_img} />
                <time className={styles.recent_post_timestamp}>
                  {post.timestamp}
                </time>
                <p className={styles.recent_post_title}>{post.title}</p>
              </Link>
            ))}
        </div>
      </section>

      <section className={styles.box_aside}>
        <h3 className={styles.title_box_aside}>Categorias</h3>
        <div className={styles.categories_wrapper}>
          {categories &&
            categories.map((category) => (
              <Link key={category} to={`/`} className={styles.category_aside}>
                {category}
              </Link>
            ))}
        </div>
      </section>

      <section className={styles.box_aside}>
        <h3 className={styles.title_box_aside}>Tags</h3>
        <div className={styles.tags_wrapper_aside}>
          {tags &&
            tags.map((tag) => (
              <Link key={tag} to={`/`} className={styles.tag}>
                {tag}
              </Link>
            ))}
        </div>
      </section>
    </aside>
  );
}