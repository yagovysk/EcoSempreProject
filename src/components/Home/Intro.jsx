import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import logisticaImg from "../../assets/fundohome.png";
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
      delay: 4000,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, Pagination, A11y],
  };

  return (
    <article className="intro_container">
      <Swiper {...settingsSlide}>
        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img src={logisticaImg} alt="Imagem da Logística Reversa" />
          </div>
          <section className={`${styles.homeContent} container`}>
            <h1 className={styles.hometitle}>
              Logística Reversa de Eletrônicos
            </h1>
            <p className={styles.homeparagraph}>
              Trabalhamos em conjunto com comunidades e parceiros para
              desenvolver soluções inovadoras em Logística Reversa.
            </p>
            <Link
              role="button"
              className={`btn ${styles.btnHome}`}
              to="/logistica"
            >
              Saiba Mais
              <span>🡢</span>
            </Link>
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img src={sustentabilidadeImg} alt="Imagem de Sustentabilidade" />
          </div>
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

        <SwiperSlide>
          <div className={`${styles.img_slider}`}>
            <img src={coletasImg} alt="Imagem de Pontos de Coletas" />
          </div>
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
