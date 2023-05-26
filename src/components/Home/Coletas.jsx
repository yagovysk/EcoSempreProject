import coletaimg from "../../assets/Coletasimg.png";
import styles from "./Coletas.module.css";
import recycleIcon from "../../assets/recycleIcon.svg";

export function Coletas() {
  return (
    <div className={`container ${styles.wrapper}`}>
      <article className={`textsContainer`}>
        <span className={`small-text`}>
          Pontos de Coleta de Lixo Eletrônico
        </span>
        <section className={`texts`}>
          <h2 className={`title`}>
            Encontre o Ponto de Coleta EcoSempre mais Próximo de Você!
          </h2>
          <p className={styles.paragraph}>
            Ao utilizar o Ponto de Coleta EcoSempre, você contribui para a
            redução do impacto ambiental e para a promoção da economia circular.
            Faça parte dessa iniciativa e ajude a construir um futuro mais
            sustentável para todos. Juntos, podemos fazer a diferença!
          </p>

          <button type="button" className={`btn ${styles.btnColeta}`}>
            <a href="#">Ver Pontos de Coleta</a>
            <span>🡢</span>
          </button>
        </section>
      </article>

      <div className={`${styles.containerImg}`}>
        <div className={styles.wrapperImg}>
          <img className={styles.recycleIcon} src={recycleIcon} alt="card" />
          <p className={styles.imgText}>
            <span>Faça já sua Parte e</span>
            <span>Colabore Conosco</span>
          </p>
        </div>

        <img
          className={styles.coletaimg}
          src={coletaimg}
          alt="equipamentoscoletadosimg"
        />
        <div className={styles.behind}></div>
      </div>
    </div>
  );
}
