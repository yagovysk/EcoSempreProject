import { FeedbackCard } from "../FeedbackCard";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../../helpers";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper";
import person from "../../../assets/personImg.jpg";

import style from "./Depoiments.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "./DepoimentsSlider.css";

export function Depoiments() {
  const settingsSlide = {
    speed: 800,
    pagination: {
      clickable: true,
    },
    modules: [Pagination, A11y],
  };

  return (
    <article className={`${style.idDepoiments} depoiments_container`}>
      <section className={`${style.content}`}>
        <div className={`textsContainer ${style.textsContainer}`}>
          <span className={`small-text`}>Experiências Inspiradoras</span>
          <div className={`texts`}>
            <h2 className={`${style.titleFeedback}`}>
              Depoimentos Daqueles que já Passaram na EcoSempre
            </h2>
            <p className={style.paragraph}>
              Descubra como a experiência de utilizar nossos serviços e soluções
              de logística reversa fez a diferença em suas vidas e no cuidado
              com o meio ambiente. Acompanhe depoimentos inspiradores de quem se
              tornou parte desse movimento por um futuro mais sustentável.
            </p>
            <Link
              role="button"
              className={`btn btn-link ${style.btnFeedback}`}
              to="About_us"
              onClick={scrollToTop}
            >
              Sobre Nós
              <span>🡢</span>
            </Link>
          </div>
        </div>

        <div className={style.carousel_wrapper}>
          <div className={style.carousel}>
            <Swiper {...settingsSlide}>
              <SwiperSlide>
                <FeedbackCard
                  name="Matheus de Souza"
                  job="Designer"
                  img={person}
                  feedback={`EcoSempre, um projeto essencial para o nosso país, várias 
            empresas deveriam adotar práticas ecológicas como a 
            SempreTech. Muito importante cuidar do nosso meio ambiente 
            pois assim evitaremos mais desastres ambientais.`}
                  stars={5}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeedbackCard
                  name="Matheus de Souza"
                  job="Designer"
                  img={person}
                  feedback={`EcoSempre, um projeto essencial para o nosso país, várias 
          empresas deveriam adotar práticas ecológicas como a 
          SempreTech. Muito importante cuidar do nosso meio ambiente 
          pois assim evitaremos mais desastres ambientais.`}
                  stars={5}
                />
              </SwiperSlide>
              <SwiperSlide>
                <FeedbackCard
                  name="Matheus de Souza"
                  job="Designer"
                  img={person}
                  feedback={`EcoSempre, um projeto essencial para o nosso país, várias 
          empresas deveriam adotar práticas ecológicas como a 
          SempreTech. Muito importante cuidar do nosso meio ambiente 
          pois assim evitaremos mais desastres ambientais.`}
                  stars={5}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </article>
  );
}
