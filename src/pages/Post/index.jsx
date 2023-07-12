import { useLoaderData } from "react-router-dom";
import { Fragment } from "react";
import { Icon } from "@iconify/react";
import { AsideBlog } from "../../components/AsideBlog";
import styles from "./Post.module.css";
import api from "../../api/posts";

export async function loader({ params }) {
  const post = await api
    .get(`/articles/${params.key}`)
    .then((response) => response.data)
    .catch((err) => {
      throw new Response("", {
        status: err.response.status,
        statusText: err.response.statusText,
      });
    });

  return { post };
}

export function Post() {
  const { post } = useLoaderData();
  const stringCategories = post && post.categories.join(", ");
  const breadcrumb = post && ["Início", "Blog", stringCategories, post.title];

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
        <div className={`${styles.wrapper_img_post} img_loading`}>
          <img src={post.imgURL} className={styles.img_post} />
        </div>

        <div className={styles.content_post}>
          <section className={styles.content_post_title}>
            <div className={styles.wrapper_small_information}>
              <time className={styles.small_information}>{post.timestamp}</time>
              <span className={styles.categories}>{stringCategories}</span>
              <span className={styles.small_information}>{post.author}</span>
            </div>

            <h2 className={`title ${styles.title}`}>{post.title}</h2>
          </section>

          <p className={styles.paragraph}>{post.content}</p>
        </div>

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

            <a
              href="/"
              target="_blank"
              aria-label="Instagram"
              className={styles.social_media}
            >
              <Icon
                aria-hidden={true}
                icon="entypo-social:instagram-with-circle"
              />
            </a>

            <a
              href="/"
              target="_blank"
              aria-label="Facebook"
              className={styles.social_media}
            >
              <Icon aria-hidden={true} icon="ic:baseline-facebook" />
            </a>

            <a
              href="/"
              target="_blank"
              aria-label="WhatsApp"
              className={styles.social_media}
            >
              <Icon aria-hidden={true} icon="ri:whatsapp-fill" />
            </a>
          </div>
        </section>
      </article>

      <AsideBlog />
    </main>
  );
}
