import styles from "./Footer.module.css";
import ecoLogo from "../../assets/ecoIcon.svg";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers";

export function Footer() {
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
              <h5 className={styles.subtitle}>Empresa</h5>
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
                  <Link onClick={scrollToTop} to="/parceiros">
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
          <h6 className={styles.copyright}>
            @2023 EcoSempre. Todos Direitos Reservados. Love by{" "}
            <a
              target="_blank"
              className={styles.copyright_author}
              href="www.google.com"
            >
              Togyro Group Victory
            </a>
          </h6>
        </div>

        <button
          title="Voltar ao topo"
          aria-label="Voltar ao topo"
          type="button"
          onClick={scrollToTop}
          className={styles.back_to_top}
        >
          <Icon
            icon="material-symbols:arrow-upward-rounded"
            alt="Seta apontando para frente"
          />
        </button>
      </div>
    </footer>
  );
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img loading="lazy" src={ecoLogo} alt="Eco logo" />
      <h3 className={styles.logo_title}>
        EcoSempre
        <span className={styles.logo_subtitle}>Logística Reversa</span>
      </h3>
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

        <form className={styles.wrapper_form}>
          <input
            className={styles.input}
            type="email"
            placeholder="Digite seu email"
            aria-label="Digite seu email"
          />
          <button
            title="Inscrever-se"
            aria-label="Inscrever-se na newsletter"
            className={styles.btn_newsletter}
            type="submit"
          >
            <Icon
              icon="material-symbols:arrow-circle-right-rounded"
              className={styles.arrow_circle_icon}
              alt="Seta preenchida com um círculo"
            />
          </button>
        </form>
      </section>

      <div className={styles.wrapper_social_medias}>
        <p className={styles.paragraph_social_medias}>
          Siga-nos nas redes sociais
        </p>
        <div className={styles.social_medias}>
          <a
            target="_blank"
            aria-label="Instagram"
            className={styles.link_social_medias}
            href="www.instagram.com"
          >
            <Icon
              icon="entypo-social:instagram-with-circle"
              alt="Ícone do Instagram"
            />
          </a>
          <a
            target="_blank"
            aria-label="Facebook"
            className={styles.link_social_medias}
            href="www.facebook.com"
          >
            <Icon icon="ic:baseline-facebook" alt="Ícone do Facebook" />
          </a>
          <a
            target="_blank"
            aria-label="WhatsApp"
            className={styles.link_social_medias}
            href="www.whatsapp.com"
          >
            <Icon icon="ri:whatsapp-fill" alt="Ícone do WhatsApp" />
          </a>
        </div>
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
        <Link
          role="button"
          className={`${styles.btn_schedule} btn btn-link`}
          to="/agendar"
          onClick={scrollToTop}
        >
          Agende uma Coleta
        </Link>
      </div>
    </div>
  );
}
