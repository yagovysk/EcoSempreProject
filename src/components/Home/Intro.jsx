import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./IntroSlider.css";
import styles from "./Intro.module.css";

export function Intro() {
  const settingsSlide = {
    cssMode: true,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 3500,
    },
    modules: [Autoplay, Navigation, Pagination, A11y],
  };

  return (
    <article className="intro_container">
      <Swiper {...settingsSlide}>
        <SwiperSlide className={`${styles.slide_1}`}>
          <section className={`${styles.homeContent} container`}>
            <h1 className={styles.hometitle}>
              Logística Reversa de Eletrônicos
            </h1>
            <p className={styles.homeparagraph}>
              Trabalhamos em conjunto com comunidades e parceiros para
              desenvolver soluções inovadoras em Logística Reversa.
            </p>
            <a role="button" className={`btn ${styles.btnHome}`} href="#">
              Saiba Mais
              <span>🡢</span>
            </a>
          </section>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide_2}`}>
          <section className={`${styles.homeContent} container`}>
            <h1 className={styles.hometitle}>Criando um Futuro Sustentável</h1>
            <p className={styles.homeparagraph}>
              Juntos pela preservação do meio ambiente, avançando rumo a um
              planeta mais saudável e equilibrado.
            </p>
            <a role="button" className={`btn ${styles.btnHome}`} href="#">
              Saiba Mais
              <span>🡢</span>
            </a>
          </section>
        </SwiperSlide>

        <SwiperSlide className={`${styles.slide_3}`}>
          <section className={`${styles.homeContent} container`}>
            <h1 className={styles.hometitle}>
              Conheça Nossos Pontos de Coleta
            </h1>
            <p className={styles.homeparagraph}>
              Saiba onde encontrar o ponto de coleta mais próximo de você,
              descubra locais acessíveis para reciclar e cuidar do meio
              ambiente.
            </p>
            <Link
              role="button"
              className={`btn ${styles.btnHome}`}
              to="/coletas"
            >
              Ver Pontos de Coleta
              <span>🡢</span>
            </Link>
          </section>
        </SwiperSlide>
      </Swiper>
    </article>
  );
}
