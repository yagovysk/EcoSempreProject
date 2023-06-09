import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";
import { Icon } from "@iconify/react";
import { AsideBlog } from "../components/AsideBlog";
import { useGetData } from "../helpers";
import styles from "./Post.module.css";

export function Post() {
  return (
    // <BlogProvider endpoint={`/articles`}>
    <Content />
    // </BlogProvider>
  );
}

function Content() {
  const { key } = useParams();
  const [posts, setPosts] = useState("");
  useGetData("/articles", setPosts);

  let post = posts && posts.filter((post) => post.id === Number(key));
  post = post[0];

  const stringCategories = post && post.categories.join(", ");
  const breadcrumb = post && ["Início", "Blog", stringCategories, post.title];

  if (post) {
    return (
      <main className={`container ${styles.container}`}>
        <section className={styles.breadcrumb}>
          {breadcrumb.map((subtile, index) => (
            <Fragment key={index}>
              <span
                className={`${styles.subtitle_breadcrumb} ${
                  index === breadcrumb.length - 1 &&
                  styles.last_subtitle_breadcrumb
                }`}
              >
                {subtile}
              </span>
              {index !== breadcrumb.length - 1 && (
                <Icon icon="iconamoon:arrow-right-2" />
              )}
            </Fragment>
          ))}
        </section>

        <article className={styles.post_container}>
          <div className={styles.wrapper_img_post}>
            <img src={post.imgURL} className={styles.img_post} />
          </div>

          <div className={styles.content_post}>
            <section className={styles.content_post_title}>
              <div className={styles.wrapper_small_information}>
                <time className={styles.small_information}>
                  {post.timestamp}
                </time>
                <span className={styles.categories}>{stringCategories}</span>
                <span className={styles.small_information}>{post.author}</span>
              </div>
              <h2 className={`title`}>{post.title}</h2>
            </section>

            <p className={styles.paragraph}>{post.content}</p>

            <section className={styles.wrapper_footer_post}>
              <div className={styles.tags_wrapper}>
                {post.categories.map((category) => (
                  <span className={styles.tag} key={category}>
                    {category}
                  </span>
                ))}
              </div>

              <div className={styles.social_media_wrapper}>
                <span className={styles.share}>Compartilhe</span>

                <a href="/" target="_blank" className={styles.social_media}>
                  <Icon icon="entypo-social:instagram-with-circle" />
                </a>

                <a href="/" target="_blank" className={styles.social_media}>
                  <Icon icon="ic:baseline-facebook" />
                </a>

                <a href="/" target="_blank" className={styles.social_media}>
                  <Icon icon="ri:whatsapp-fill" />
                </a>
              </div>
            </section>
          </div>
        </article>

        <AsideBlog />
      </main>
    );
  }
}
