import styles from "./Sobre.module.css";
import sobreimg from "../../assets/sobreimg.png";
import plantaicon from "../../assets/plantaicon.svg";
import { useIncreaseNumber } from "../../helpers";
import { CheckCircle } from "@phosphor-icons/react";

export function Sobre() {
  // 778 = discarded E-Waste number, 10 = duration of number update per ms
  // 2 = amount that will increase per ms
  const numberGarbage = useIncreaseNumber(778, 10, 2);

  return (
    <div className="container">
      <div className={styles.sobre}>
        <div className={styles.containerImg}>
          <img
            className={styles.sobreImg}
            src={sobreimg}
            alt="imagem ilustrativa"
          />

          <div className={styles["number-garbage-wrapper"]}>
            <img src={plantaicon} alt="Ilustração de planta" />
            <p className={styles.numbers}>+ {numberGarbage} KG</p>
            <span className={styles.residuos}>
              Resíduos Eletrônicos Descartados
            </span>
          </div>
        </div>

        <section className={styles.texts}>
          <span className={`${styles.subtitle}`}>
            Nossa História e Compromisso Sustentável
          </span>
          <h2 className={styles.titleSobre}>
            Somos referência em Sustentabilidade e Logística Reversa de
            Eletrônicos!
          </h2>
          <p className={`${styles.paragraphSobre} ${styles.p1}`}>
            Trabalhamos incansavelmente para desenvolver soluções inovadoras em
            Logística Reversa e ajudar a transformar a maneira como as empresas
            lidam com seus resíduos.
          </p>

          <p className={`${styles.paragraphSobre} ${styles.p2}`}>
            Nossa visão é criar um futuro mais sustentável e tecnologicamente
            responsável, e isso significa ir além da reciclagem convencional.
            Estamos comprometidos em encontrar as melhores práticas e contribuir
            para um mundo mais sustentável e equilibrado.
          </p>

          <p className={`${styles.paragraphSobre} ${styles.p3}`}>
            Como podemos proteger nosso meio ambiente e também implementarmos
            uma Logística Reversa eficiente?
          </p>

          <ul className={styles.culturaList}>
            <li>
              <CheckCircle weight="fill" className={styles.culturaListImg} />
              Cultura Regenerativa Positiva
            </li>
            <li>
              <CheckCircle weight="fill" className={styles.culturaListImg} />
              Descarte Correto de Resíduos
            </li>
            <li>
              <CheckCircle weight="fill" className={styles.culturaListImg} />
              Consciência Ambiental
            </li>
          </ul>

          <button className={`${styles.btnSobre} btn`}>
            <a href="#">
              Conheça Nossa História
              <span>🡢</span>
            </a>
          </button>
        </section>
      </div>
    </div>
  );
}
