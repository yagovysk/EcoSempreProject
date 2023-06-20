import styles from "./Coletas.module.css";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";

export function Coletas({
  subtitle,
  title,
  linkText,
  imgCallbackComponent,
  padding = "8rem",
}) {
  return (
    <div
      className={`container ${styles.wrapper}`}
      style={{ "--padding": padding }}
    >
      <article className={`textsContainer ${styles.textsContainer}`}>
        <span className={`small-text`}>{subtitle}</span>
        <section className={`texts`}>
          <h2 className={`title`}>{title}</h2>
          <p className={styles.paragraph}>
            Ao utilizar o Ponto de Coleta EcoSempre, você contribui para a
            redução do impacto ambiental e para a promoção da economia circular.
            Faça parte dessa iniciativa e ajude a construir um futuro mais
            sustentável para todos. Juntos, podemos fazer a diferença!
          </p>

          <Link
            role="button"
            className={`btn btn-link ${styles.btnColeta}`}
            to="/coletas"
            onClick={scrollToTop}
          >
            {linkText}
            <span>🡢</span>
          </Link>
        </section>
      </article>

      {imgCallbackComponent()}
    </div>
  );
}
