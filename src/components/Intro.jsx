import styles from "./Intro.module.css";

export function Intro() {
  return (
    <div className={styles.home}>
      <div className={`${styles.homeContent} container`}>
        <h1 className={styles.hometitle}>Logística Reversa de Eletrônicos</h1>
        <p className={styles.homeparagraph}>
          Trabalhamos em conjunto com comunidades e parceiros para desenvolver
          soluções inovadoras em Logística Reversa.
        </p>
        <button className={`btn ${styles.btnHome}`} type="button">
          <a href="#">
            Saiba Mais
            <span>🡢</span>
          </a>
        </button>
      </div>
    </div>
  );
}
