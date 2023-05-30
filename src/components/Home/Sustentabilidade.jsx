import styles from "./Sustentabilidade.module.css";
import sustentabilidadeImg from "../../assets/sustentabilidadeImg.png";

export function Sustentabilidade() {
  return (
    <div className={styles.sustentabilidadeBox}>
      <img src={sustentabilidadeImg} className={styles.img} />
      <article className={`textsContainer`}>
        <span className={`small-text`}>Sustentabilidade</span>
        <section className={`texts`}>
          <h2 className={styles.porque}>
            Por que é tão Importante Realizar o Descarte Correto do Lixo
            Eletrônico?
          </h2>
          <p className={styles.sustentabilidadeP}>
            O lixo eletrônico é um dos maiores desafios ambientais da nossa era.
            Nós acreditamos que a conscientização é o primeiro passo para uma
            solução sustentável. Junte-se a nós nessa jornada e faça a sua parte
            para um mundo mais limpo e saudável.
          </p>
          <button className={`btn ${styles.saibamais}`} type="button">
            <a className="btn-link" href="#">
              Saiba Mais
            </a>
            <span>🡢</span>
          </button>
        </section>
      </article>
    </div>
  );
}
