import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { ScrollReveal } from "../ScrollReveal";
import florestImg from "../../assets/Imagem_Floresta.png";
import sustentabilidadeImg from "../../assets/parceiros_bg.jpg";
import coletasImg from "../../assets/coletas.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IntroSlider.css";
import styles from "./Intro.module.css";

export function Intro() {
  const settingsSlide = {
    speed: 800,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, Pagination, A11y],
  };

  return (
    <article className="intro_container">
      <Swiper {...settingsSlide}>
        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img
              loading="lazy"
              src={florestImg}
              alt="Imagem da Logística Reversa"
            />
          </div>
          <Content
            title="Logística Reversa de Eletrônicos"
            description="Trabalhamos em conjunto com comunidades e parceiros para
            desenvolver soluções inovadoras em Logística Reversa."
            labelBtn="Saiba Mais"
            pathBtn="/logistica"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img
              loading="lazy"
              src={sustentabilidadeImg}
              alt="Imagem de Sustentabilidade"
            />
          </div>
          <Content
            title="Criando um Futuro Sustentável"
            description="Juntos pela preservação do meio ambiente, avançando rumo a um
            planeta mais saudável e equilibrado."
            labelBtn="Saiba Mais"
            pathBtn="/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img
              loading="lazy"
              src={coletasImg}
              alt="Imagem de Pontos de Coletas"
            />
          </div>
          <Content
            title="Conheça Nossos Pontos de Coleta"
            description="Saiba onde encontrar o ponto de coleta mais próximo de você,
            descubra locais acessíveis para reciclar e cuidar do meio
            ambiente."
            labelBtn="Ver Pontos de Coleta"
            pathBtn="/coletas"
          />
        </SwiperSlide>
      </Swiper>
    </article>
  );
}

function Content({ title, description, labelBtn, pathBtn }) {
  return (
    <section className={`${styles.homeContent} container`}>
      <ScrollReveal origin="bottom" immediately={true}>
        <h1 className={styles.hometitle}>{title}</h1>
      </ScrollReveal>
      <ScrollReveal origin="top" immediately={true}>
        <p className={styles.homeparagraph}>{description}</p>
      </ScrollReveal>
      <ScrollReveal origin="top" immediately={true}>
        <Link role="button" className={`btn ${styles.btnHome}`} to={pathBtn}>
          {labelBtn}
          <span>🡢</span>
        </Link>
      </ScrollReveal>
    </section>
  );
}
