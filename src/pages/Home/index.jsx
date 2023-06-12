import { scrollToTop, useIncreaseNumber } from "../../helpers";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import { Intro } from "../../components/Home/Intro";
import { Saiba } from "../../components/Home/Saiba";
import { Coletas } from "../../components/Home/Coletas";
import { ParceirosCard } from "../../components/ParceirosCard";
import { FormTalkWithUs } from "../../components/FormTalkWithUs";
import { Depoiments } from "../../components/Home/Depoiments";
import { Faq } from "../../components/Faq";
import { Blog } from "../../components/Home/Blog";

import sobreimg from "../../assets/sobreimg.png";
import plantaicon from "../../assets/plantaicon.svg";
import sustentabilidadeImg from "../../assets/sustentabilidadeImg.png";
import logisticard from "../../assets/logistica_reversa.png";
import styles from "./Home.module.css";

export function Home() {
  return (
    <main>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
      <Logistica />
      <Coletas />
      <Parceiros />
      <Depoiments />
      <Faq numberPerList={3} isFAQPage={false} />
      <Callwithus />
      <Blog />
    </main>
  );
}

function Sobre() {
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

        <section className={styles.texts_sobre}>
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
              <Icon
                icon="material-symbols:check-circle"
                className={styles.culturaListImg}
              />
              Cultura Regenerativa Positiva
            </li>
            <li>
              <Icon
                icon="material-symbols:check-circle"
                className={styles.culturaListImg}
              />
              Descarte Correto de Resíduos
            </li>
            <li>
              <Icon
                icon="material-symbols:check-circle"
                className={styles.culturaListImg}
              />
              Consciência Ambiental
            </li>
          </ul>

          <Link
            role="button"
            className={`${styles.btnSobre} btn`}
            to="About_us"
            onClick={scrollToTop}
          >
            Conheça Nossa História
            <span>🡢</span>
          </Link>
        </section>
      </div>
    </div>
  );
}

function Sustentabilidade() {
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
          <Link className={`btn ${styles.saibamais}`} to="/">
            Saiba Mais
            <span>🡢</span>
          </Link>
        </section>
      </article>
    </div>
  );
}

function Logistica() {
  return (
    <article className={styles.idlogisticard}>
      <section className={`container`}>
        <div className={styles.texts_logistica}>
          <span className={`small-text`}>Logística Reversa</span>
          <h2 className={`title`}>Entenda o Ciclo da Logística Reversa</h2>
        </div>
        <img
          className={styles.logistic_card}
          src={logisticard}
          alt="card sobre logistica reversa"
        />
      </section>
    </article>
  );
}

function Parceiros() {
  return (
    <article id="parceiros" className={styles.idParceiros}>
      <section className={`container ${styles.content_parceiros}`}>
        <div className={styles.texts_parceiros}>
          <span className={`small-text`}>Nossos Parceiros</span>
          <h2 className={`title`}>Conheça Quem Confia na EcoSempre</h2>
        </div>

        <ParceirosCard />
      </section>
    </article>
  );
}

function Callwithus() {
  return (
    <div className={styles.idfaleconosco}>
      <div className={`container ${styles.wrapper_content}`}>
        <div className={styles.wrapper_form}>
          <FormTalkWithUs />
        </div>

        <div className="textsContainer">
          <span className="small-text">Atendimento Personalizado</span>
          <div className="texts">
            <h2 className={styles.title}>
              Nós da EcoSempre Estaremos Felizes em Atender Você!
            </h2>
            <p className={styles.description}>
              Queremos proporcionar a melhor experiência possível. Preencha o
              formulário ao lado com suas dúvidas,informações, solicitações ou
              feedback. Estamos prontos para ajudar e oferecer soluções
              personalizadas. Sua satisfação é nossa prioridade e estamos
              ansiosos para atender você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
