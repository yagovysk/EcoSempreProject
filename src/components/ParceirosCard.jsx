import Parceiro1 from "../assets/Parceiro1.svg";
import Parceiro2 from "../assets/Parceiro2.svg";
import Parceiro3 from "../assets/Parceiro3.svg";
import Parceiro4 from "../assets/Parceiro4.svg";
import Parceiro5 from "../assets/Parceiro5.svg";
import styles from "./ParceirosCard.module.css";

export function ParceirosCard() {
  return (
    <div className={styles.parceirosCard}>
      <img className={styles.parceiro} src={Parceiro1} alt="logo parceiro 1" />
      <img className={styles.parceiro} src={Parceiro2} alt="logo parceiro 2" />
      <img className={styles.parceiro} src={Parceiro3} alt="logo parceiro 3" />
      <img className={styles.parceiro} src={Parceiro4} alt="logo parceiro 4" />
      <img className={styles.parceiro} src={Parceiro5} alt="logo parceiro 5" />
    </div>
  );
}
