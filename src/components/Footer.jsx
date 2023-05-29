import styles from "./Footer.module.css";
import ecoLogo from "../assets/ecoIcon.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import clock from "../assets/clock.svg";
import arrowCircle from "../assets/arrow-circle.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import whatsapp from "../assets/whatsapp.svg";
import arrowUp from "../assets/arrow-up.svg";

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

              <div className={styles.talk_with_us}>
                <img src={arrowCircle} alt="Seta preenchida com um círculo" />
                <span className={styles.text_talk_with_us}>
                  <strong>Fale Conosco</strong>
                </span>
              </div>
            </section>

            <section className={styles.contact}>
              <h4 className={styles.subtitle}>Nosso Contato</h4>
              <address className={styles.address_content}>
                <p className={styles.paragraph}>
                  Possui alguma dúvida ou precisa de ajuda, entre em contato com
                  a nossa equipe.
                </p>
                <div className={styles.tel_address}>
                  <img src={phone} alt="Ícone de telefone" />
                  <strong className={styles.tel}>(61) 98378-1438</strong>
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
                  <a href="#quem_somos">Quem Somos</a>
                </li>
                <li>
                  <a href="#coletas">Pontos de Coleta</a>
                </li>
                <li>
                  <a href="#blog">Nosso Blog</a>
                </li>
                <li>
                  <a href="#fale_conosco">Fale Conosco</a>
                </li>
                <li>
                  <a href="#parceiros">Parceiros</a>
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
            <img src={arrowUp} alt="Seta apontando para frente" />
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
          <img src={arrowCircle} alt="Seta preenchida com um círculo" />
        </div>
      </section>

      <div className={styles.social_medias}>
        <a className={styles.link_social_medias} href="">
          <img src={instagram} alt="Ícone do Instagram" />
        </a>
        <a className={styles.link_social_medias} href="">
          <img src={facebook} alt="Ícone do Facebook" />
        </a>
        <a className={styles.link_social_medias} href="">
          <img src={whatsapp} alt="Ícone do Whatsapp" />
        </a>
      </div>
    </div>
  );
}

function ScheduleCard() {
  return (
    <div className={styles.schedule_card}>
      <div className={styles.box_schedule}>
        <img src={phone} alt="Ícone de telefone" />
        <address>
          Telefone: <strong>(61) 98378-1438</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <img src={mail} alt="Ícone de e-mail" />
        <address>
          Email: <strong>ecosempre@gmail.com</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <img src={clock} alt="Ícone de relógio" />
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
