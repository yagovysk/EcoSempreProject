import styles from "./Parceiros.module.css";
import { ParceirosCard } from "../ParceirosCard";

export function Parceiros() {
  return (
    <article className={styles.idParceiros}>
      <section className={`container ${styles.content}`}>
        <div className={styles.texts}>
          <span className={`small-text`}>Nossos Parceiros</span>
          <h2 className={`title`}>Conheça Quem Confia na EcoSempre</h2>
        </div>

        <ParceirosCard />
      </section>
    </article>
  );
}
