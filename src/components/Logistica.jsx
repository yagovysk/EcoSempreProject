import logisticard from "../assets/logisticcard.svg";
import styles from "./Logistica.module.css";

export function Logistica() {
  return (
    <section className={styles.idlogisticard}>
      <article>
        <h1>Logística Reversa</h1>
        <h2>Entenda o Ciclo da Logística Reversa</h2>
      </article>
      <img src={logisticard} alt="card sobre logistica reversa" />
    </section>
  );
}
