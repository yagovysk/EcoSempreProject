import styles from "../Home/Blog.module.css";

export function Blog() {
    return(
        <section className={ styles.idBlog }>
            <article>
                <h1>
                    Nosso Blog
                </h1>
                <h2>
                    Acompanhe Nossos
                    Artigos Mais Recentes
                </h2>
            </article>
        </section>
    )
}
