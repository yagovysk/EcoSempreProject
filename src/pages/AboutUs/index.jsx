import imgInformation1 from "../../assets/construction2.jpg";
import imgInformation2 from "../../assets/houses.jpg";
import styles from "./AboutUs.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./AboutUsSlider.css";

import { useIncreaseNumber } from "../../helpers";
import { ContactCard } from "../../components/ContactCard";
import { ParceirosCard } from "../../components/ParceirosCard";
import { HeaderSection } from "../../components/HeaderSection";
import { Map } from "../../components/Map";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";
import { ScrollReveal } from "../../components/ScrollReveal";
import { useRef } from "react";

export function AboutUs() {
  const linksMenu = [
    {
      name: "Início",
      path: "/",
    },
    {
      name: "EcoSempre",
      path: "/sobre",
    },
    {
      name: "Sobre Nós",
    },
  ];

  return (
    <main className={styles.main_container}>
      <HeaderSection
        className={styles.header}
        title="Sobre Nós"
        linksMenu={linksMenu}
      />
      <Information />
      <Contact />
      <ScrollReveal origin="top">
        <div className={styles.partners_content}>
          <ParceirosCard />
        </div>
      </ScrollReveal>
    </main>
  );
}

function Information() {
  const experienceNumber = useIncreaseNumber(10, 100, 1);
  const settingsSlide = {
    speed: 700,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, A11y],
  };

  return (
    <div
      className={`${styles.content_information} about_us_container container`}
    >
      <article className={styles.first_information}>
        <div className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="left">
            <span className="small-text">Quem Somos</span>
            <section className="texts">
              <h2 className="title">Sua Parceira em Soluções Tecnológicas</h2>
              <p className={styles.paragraph}>
                A Sempretec é uma empresa de soluções na área de tecnologia e
                oferece a seus clientes venda, assistência técnica e locação de
                equipamentos. Fundada a mais de uma década com o objetivo de
                suprir as necessidades de produtos e serviços tecnológicos do
                mercado de Brasília, hoje oferece a todo Brasil, produtos e
                serviços de alta qualidade.
              </p>
              <p className={styles.paragraph}>
                Oferecendo ao seus clientes o melhor serviço de outsourcing ,
                aliado aos demais recursos tecnológicos existentes, são hoje uma
                solução moderna na que tem contribuído, significativamente, para
                uma boa gestão, melhoria dos processos, gerenciamento dos
                recursos e na redução de custos, uma vez que não implicará em
                investimentos, tais como aquisição de equipamentos e insumos e
                as necessárias substituições periódicas, por motivo de
                depreciação, causado pelo avanço tecnológico e o desgaste
                natural pelo uso continuo.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <div className={styles.carousel_wrapper}>
          <ScrollReveal origin="right">
            <Swiper {...settingsSlide}>
              <SwiperSlide>
                <div className={styles.wrapper_img}>
                  <img src={imgInformation1} alt="Construtor com um notebook" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.wrapper_img}>
                  <img src={imgInformation1} alt="Construtor com um notebook" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.wrapper_img}>
                  <img src={imgInformation1} alt="Construtor com um notebook" />
                </div>
              </SwiperSlide>
            </Swiper>
          </ScrollReveal>

          <ScrollReveal origin="right">
            <div className={styles.experiences_wrapper}>
              <h3 className={styles.experience_number}>+{experienceNumber}</h3>
              <span className={styles.legend_experience_number}>
                Anos de Experiência
              </span>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <article className={styles.second_information}>
        <div className={styles.wrapper_img}>
          <ScrollReveal origin="left">
            <img
              className={styles.img_second_information}
              src={imgInformation2}
              alt="Casas"
            />
            <div className={styles.box}></div>
          </ScrollReveal>
        </div>

        <ScrollReveal origin="bottom">
          <section className={`texts ${styles.text1}`}>
            <h2 className={styles.subtitle}>Missão</h2>
            <p className={styles.paragraph}>
              A nossa missão é oferecer serviços e produtos de tecnologia de
              alta qualidade, visando à total satisfação de nossos clientes.
              Através de uma equipe altamente qualificada e em constante
              atualização, buscamos fornecer soluções tecnológicas inovadoras e
              personalizadas para atender às necessidades específicas de cada
              cliente.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal origin="bottom">
          <section className={`texts ${styles.text2}`}>
            <h2 className={styles.subtitle}>Visão</h2>
            <p className={styles.paragraph}>
              Ser reconhecida por nossos clientes e parceiros como uma empresa
              ética e sustentável, que preza pela qualidade e bom
              relacionamento. Respeito e dedicação aos nossos clientes,
              excelência em nosso atendimento, transparência nas relações com
              clientes e fornecedores, trabalho realizado em equipe e segurança
              das informações de nossos clientes.
            </p>
          </section>
        </ScrollReveal>
      </article>
    </div>
  );
}

function Contact() {
  return (
    <div className={styles.contact_content}>
      <div className={styles.wrapper_map}>
        <Map />
      </div>
      <div className={`${styles.card_wrapper} container`}>
        <ScrollReveal origin="left" delay={1500}>
          <div className={styles.card_style}>
            <ContactCard />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
