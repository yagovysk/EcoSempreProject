import styles from "./Footer.module.css";
import ecoLogo from "../assets/ecoIcon.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export function Footer() {
  function scrollToTop() {
    window.scrollBy(0, document.body.offsetHeight * -1);
  }

  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapper_main_content}>
        <div className={`${styles.container_main_content} container`}>
          <article className={styles.main_content}>
            <section className={styles.intro}>
              <Logo />
              <p className={styles.paragraph}>
                Compromisso com a sustentabilidade e a Logística Reversa.
                Juntos, transformamos o descarte correto de eletroeletrônicos em
                ações que beneficiam o meio ambiente e a sociedade.
              </p>

              <Link
                onClick={scrollToTop}
                to="/contact"
                className={styles.talk_with_us}
              >
                <Icon
                  icon="material-symbols:arrow-circle-right-rounded"
                  className={styles.arrow_circle_icon}
                  alt="Seta preenchida com um círculo"
                />
                <span className={styles.text_talk_with_us}>
                  <strong>Fale Conosco</strong>
                </span>
              </Link>
            </section>

            <section className={styles.contact}>
              <h4 className={styles.subtitle}>Nosso Contato</h4>
              <address className={styles.address_content}>
                <p className={styles.paragraph}>
                  Possui alguma dúvida ou precisa de ajuda, entre em contato com
                  a nossa equipe.
                </p>
                <div className={styles.tel_address}>
                  <Icon
                    icon="ant-design:phone-filled"
                    className={styles.tel_img}
                    alt="Ícone de telefone"
                  />
                  <a className={styles.tel} href="tel:+(61) 98378-1438">
                    (61) 98378-1438
                  </a>
                </div>
                <p className={styles.paragraph}>
                  71939-540, Alfa Mix Loja 11 e 12, Águas Claras, Brasília - DF.
                </p>
              </address>
            </section>

            <section className={styles.company}>
              <h4 className={styles.subtitle}>Empresa</h4>
              <ul className={styles.list_links_company}>
                <li>
                  <Link onClick={scrollToTop} to="/about_us">
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/coletas">
                    Pontos de Coleta
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/blog">
                    Nosso Blog
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/contact">
                    Fale Conosco
                  </Link>
                </li>
                <li>
                  <Link onClick={scrollToTop} to="/#parceiros">
                    Parceiros
                  </Link>
                </li>
              </ul>
            </section>
          </article>

          <Newsletter />
        </div>
      </div>

      <div className={styles.wrapper_second_content}>
        <ScheduleCard />
        <div className={styles.second_content}>
          <h5 className={styles.copyright}>
            @2023 EcoSempre. Todos Direitos Reservados.
          </h5>
        </div>

        <a title="Voltar ao topo" href="#header">
          <button className={styles.back_to_top}>
            <Icon
              icon="material-symbols:arrow-upward-rounded"
              alt="Seta apontando para frente"
            />
          </button>
        </a>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={ecoLogo} alt="Eco logo" />
      <h2 className={styles.logo_title}>
        EcoSempre
        <span className={styles.logo_subtitle}>Logística Reversa</span>
      </h2>
    </div>
  );
}

function Newsletter() {
  return (
    <div className={styles.newsletter_wrapper}>
      <section className={styles.newsletter_content}>
        <p className={styles.paragraph_newsletter}>
          Inscreva-se para receber alertas, nossas últimas notícias e novidades
          da EcoSempre. Caso queira,você pode retirar sua inscrição a qualquer
          momento.
        </p>

        <div className={styles.wrapper_input}>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
          />
          <Icon
            icon="material-symbols:arrow-circle-right-rounded"
            className={styles.arrow_circle_icon}
            alt="Seta preenchida com um círculo"
          />
        </div>
      </section>

      <div className={styles.social_medias}>
        <a className={styles.link_social_medias} href="">
          <Icon
            icon="entypo-social:instagram-with-circle"
            alt="Ícone do Instagram"
          />
        </a>
        <a className={styles.link_social_medias} href="">
          <Icon icon="ic:baseline-facebook" alt="Ícone do Facebook" />
        </a>
        <a className={styles.link_social_medias} href="">
          <Icon icon="ri:whatsapp-fill" alt="Ícone do Whatsapp" />
        </a>
      </div>
    </div>
  );
}

function ScheduleCard() {
  return (
    <div className={styles.schedule_card}>
      <div className={styles.box_schedule}>
        <Icon
          icon="ant-design:phone-filled"
          className={styles.tel_img}
          alt="Ícone de telefone"
        />
        <address>
          Telefone: <strong>(61) 98378-1438</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="material-symbols:mail-rounded" alt="Ícone de e-mail" />
        <address>
          Email: <strong>ecosempre@gmail.com</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="mdi:clock-time-four" alt="Ícone de relógio" />
        <address>
          Horário de Atendimento: <strong>Seg-Sex: 8h às 18h</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <button type="button" className={`${styles.btn_schedule} btn`}>
          <a className="btn-link" href="#">
            Agente uma Coleta
          </a>
        </button>
      </div>
    </div>
  );
}
