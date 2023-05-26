import logisticard from "../../assets/logisticcard.svg";
import styles from "./Logistica.module.css";

export function Logistica() {
  return (
    <article className={styles.idlogisticard}>
      <section className={`container ${styles.content}`}>
        <div className={styles.texts}>
          <span className={`small-text`}>Logística Reversa</span>
          <h2 className={`title`}>Entenda o Ciclo da Logística Reversa</h2>
        </div>
        <img src={logisticard} alt="card sobre logistica reversa" />
      </section>
    </article>
  );
}
