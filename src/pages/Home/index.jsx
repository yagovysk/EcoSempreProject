import { useBreakpoint, useIncreaseNumber } from "../../helpers";
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
import { ScrollReveal } from "../../components/ScrollReveal";

import coletaimg from "../../assets/Coletasimg.png";
import recycleIcon from "../../assets/recycleIcon.svg";
import sobreimg from "../../assets/sobreimg.png";
import plantaicon from "../../assets/plantaicon.svg";
import sustentabilidadeImg from "../../assets/sustentabilidadeImg.png";
import logisticard from "../../assets/logistica_reversa.png";
import styles from "./Home.module.css";

export function Home() {
  const windowWidth = useBreakpoint();
  return (
    <main className={styles.main_content}>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
      <Logistica />
      <Coletas
        subtitle="Pontos de Coleta de Lixo Eletrônico"
        title="Encontre o Ponto de Coleta EcoSempre mais Próximo de Você!"
        linkText="Ver Pontos de Coleta"
        imgCallbackComponent={ImgColetas}
      />
      <Parceiros />
      <Depoiments />
      <Faq numberPerList={3} isFAQPage={false} />
      {windowWidth > 450 && <Callwithus />}
      <Blog isMobile={windowWidth < 450 ? true : false} />
    </main>
  );
}

function Sobre() {
  // 778 = discarded E-Waste number
  // 10 = duration of number update per ms
  // 2 = amount that will increase per ms
  const numberGarbage = useIncreaseNumber(778, 10, 2);

  return (
    <div className="container">
      <div className={styles.sobre}>
        <div className={styles.containerImg}>
          <picture className={`${styles.wrapper_sobre_img} img_loading`}>
            <ScrollReveal origin="left">
              <img
                className={styles.sobreImg}
                src={sobreimg}
                alt="Trabalhadores comemorando"
              />
            </ScrollReveal>
          </picture>

          <ScrollReveal origin="left" style={{ position: "absolute", top: 0 }}>
            <div className={styles["number-garbage-wrapper"]}>
              <img src={plantaicon} alt="Ícone de Planta" aria-hidden={true} />
              <strong className={styles.numbers}>+ {numberGarbage} KG</strong>
              <span className={styles.residuos}>
                Resíduos Eletrônicos Descartados
              </span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal origin="right">
          <article className={styles.wrapper_texts}>
            <span className={`${styles.subtitle}`}>
              Nossa História e Compromisso Sustentável
            </span>
            <h2 className={`title ${styles.titleSobre}`}>
              Somos referência em Sustentabilidade e Logística Reversa de
              Eletrônicos!
            </h2>
            <section className={styles.texts_sobre}>
              <p className={`${styles.paragraphSobre} ${styles.p1}`}>
                Trabalhamos incansavelmente para desenvolver soluções inovadoras
                em Logística Reversa e ajudar a transformar a maneira como as
                empresas lidam com seus resíduos.
              </p>

              <p className={`${styles.paragraphSobre} ${styles.p2}`}>
                Nossa visão é criar um futuro mais sustentável e
                tecnologicamente responsável, e isso significa ir além da
                reciclagem convencional. Estamos comprometidos em encontrar as
                melhores práticas e contribuir para um mundo mais sustentável e
                equilibrado.
              </p>

              <p className={`${styles.paragraphSobre} ${styles.p3}`}>
                Como podemos proteger nosso meio ambiente e também
                implementarmos uma Logística Reversa eficiente?
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
            </section>

            <Link
              role="button"
              className={`${styles.btnSobre} btn`}
              to="/sobre"
            >
              Conheça Nossa História
              <span>🡢</span>
            </Link>
          </article>
        </ScrollReveal>
      </div>
    </div>
  );
}

function Sustentabilidade() {
  return (
    <div className={styles.sustentabilidadeBox}>
      <div className={`${styles.sustentabilidade_img_wrapper} img_loading`}>
        <ScrollReveal origin="left">
          <img
            loading="lazy"
            src={sustentabilidadeImg}
            className={styles.sustentabilidadeImg}
            alt="Homem segurando criança reciclando plástico"
          />
        </ScrollReveal>
      </div>

      <article
        className={`textsContainer ${styles.wrapper_texts_sustentabilidade}`}
      >
        <ScrollReveal origin="right">
          <span className={`small-text`}>Sustentabilidade</span>
          <section className={`texts`}>
            <h2 className={`title ${styles.porque}`}>
              Por que é tão Importante Realizar o Descarte Correto do Lixo
              Eletrônico?
            </h2>
            <p className={styles.sustentabilidadeP}>
              O lixo eletrônico é um dos maiores desafios ambientais da nossa
              era. Nós acreditamos que a conscientização é o primeiro passo para
              uma solução sustentável. Junte-se a nós nessa jornada e faça a sua
              parte para um mundo mais limpo e saudável.
            </p>
            <Link className={`btn ${styles.saibamais}`} to="/">
              Saiba Mais
              <span>🡢</span>
            </Link>
          </section>
        </ScrollReveal>
      </article>
    </div>
  );
}

function Logistica() {
  return (
    <article className={styles.idlogisticard}>
      <section className={`container`}>
        <ScrollReveal origin="bottom">
          <div className={styles.texts_logistica}>
            <span className={`small-text`}>Logística Reversa</span>
            <h2 className={`title ${styles.title_logistica}`}>
              Entenda o Ciclo da Logística Reversa
            </h2>
          </div>

          <div className={`${styles.logistic_card_wrapper}`}>
            <img
              loading="lazy"
              src={logisticard}
              alt="Card sobre logistica reversa"
            />
          </div>
        </ScrollReveal>
      </section>
    </article>
  );
}

function ImgColetas() {
  return (
    <div className={`${styles.containerImgColetas}`}>
      <ScrollReveal origin="right">
        <div className={styles.wrapperImgColetas}>
          <img
            loading="lazy"
            className={styles.recycleIcon}
            src={recycleIcon}
            alt="Ícone de reciclagem"
            aria-hidden={true}
          />
          <p className={styles.imgTextColetas}>
            Faça já sua Parte e Colabore Conosco
          </p>
        </div>

        <div className={`${styles.wrapper_main_img_coletas} img_loading`}>
          <img
            loading="lazy"
            className={styles.coletaimg}
            src={coletaimg}
            alt="Imagem dos equipamentos coletados"
          />
        </div>
        <div aria-hidden={true} className={styles.behind}></div>
      </ScrollReveal>
    </div>
  );
}

function Parceiros() {
  return (
    <article id="parceiros" className={styles.idParceiros}>
      <section className={`container ${styles.content_parceiros}`}>
        <div className={styles.texts_parceiros}>
          <ScrollReveal origin="bottom">
            <span className={`small-text`}>Nossos Parceiros</span>
            <h2 className={`title`}>Conheça Quem Confia na EcoSempre</h2>
          </ScrollReveal>
        </div>

        <div className={styles.wrapper_parceiros_card}>
          <ScrollReveal origin="top">
            <ParceirosCard />
          </ScrollReveal>
        </div>
      </section>
    </article>
  );
}

function Callwithus() {
  return (
    <div className={styles.idfaleconosco}>
      <div className={`container ${styles.wrapper_content}`}>
        <ScrollReveal origin="top">
          <div className={styles.wrapper_form}>
            <FormTalkWithUs />
          </div>
        </ScrollReveal>

        <div className={`textsContainer ${styles.texts_callWithUs}`}>
          <ScrollReveal origin="top">
            <span className="small-text">Atendimento Personalizado</span>
            <div className="texts">
              <h2 className={`${styles.title} title`}>
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
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
