import { useRef, useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { HeaderSection } from "../../components/HeaderSection";
import { ScrollReveal } from "../../components/ScrollReveal";
import { handleKeyboardTrap } from "../../helpers";
import donationPeople1 from "../../assets/donation_people_1.png";
import donationPeople2 from "../../assets/donation_people_2.png";
import vakinhaLogo from "../../assets/vakinha-logo.png";
import qrCode from "../../assets/qr_code.png";
import styles from "./Donation.module.css";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "EcoSempre",
    path: "/doar",
  },
  {
    name: "Doação",
  },
];

const vakinhaLink =
  "https://www.vakinha.com.br/vaquinha/eco-sempre-logistica-reversa?utm_campaign=criadores&utm_medium=validade7dias&utm_source=brevo";

export const Donation = () => {
  const [isModalOn, setIsModalOn] = useState(false);
  let lastFocusedElement = document.activeElement;

  useEffect(() => {
    document.body.style.overflow = isModalOn ? "hidden" : "initial";
  }, [isModalOn]);

  function handleOpenModal() {
    setIsModalOn(true);
  }
  function handleCloseModal() {
    setIsModalOn(false);
    lastFocusedElement.focus();
  }

  return (
    <main className={styles.main_container}>
      <HeaderSection
        title="Doação"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <article className={`${styles.wrapper_content} container`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="left" immediately={true}>
            <span className="small-text">Colabore Conosco</span>
          </ScrollReveal>

          <ScrollReveal origin="left" immediately={true}>
            <section className={`texts`}>
              <h2 className="title">Faça uma Doação e Ajude Nosso Projeto</h2>
              <div className={styles.paragraphs}>
                <p className={styles.paragraph}>
                  Na EcoSempre, acreditamos que a doação é uma forma poderosa de
                  promover a mudança. Ao fazer uma doação, você está nos
                  ajudando a continuar oferecendo recursos educacionais,
                  organizando eventos e expandindo nossa infraestrutura de
                  coleta e reciclagem. Seu apoio direto é fundamental para que
                  possamos continuar a inspirar e engajar a comunidade em
                  práticas sustentáveis.
                </p>
                <p className={styles.paragraph}>
                  Cada doação que recebemos tem um impacto significativo. Com
                  seus recursos, podemos alcançar mais pessoas, educar sobre a
                  importância da reciclagem do lixo eletrônico e incentivar
                  práticas sustentáveis. Além disso, sua contribuição nos ajuda
                  a investir em tecnologias avançadas de reciclagem e
                  desenvolver parcerias estratégicas para fortalecer a logística
                  reversa. Juntos, podemos criar um futuro mais limpo, saudável
                  e sustentável para todos.
                </p>
              </div>
            </section>
          </ScrollReveal>
        </section>

        <div className={styles.wrapper_imgs}>
          <ScrollReveal origin="right" immediately={true}>
            <div className={`${styles.wrapper_img}`}>
              <img
                className={styles.img_people}
                src={donationPeople1}
                alt="Pessoas unidas cruzando as mãos"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal origin="right" immediately={true}>
            <div className={`${styles.wrapper_img} ${styles.wrapper_img2}`}>
              <img
                className={styles.img_people}
                src={donationPeople2}
                alt="Pessoas unidas cruzando as mãos"
              />
              <div className={styles.donation_wrapper}>
                <Icon icon="bxs:donate-heart" aria-hidden={true} />
                <p className={styles.donation_paragraph}>
                  Ajude a construir uma sociedade mais sustentável
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <article className={`${styles.wrapper_donation_content}`}>
        <section className={`container ${styles.donation_content}`}>
          <ScrollReveal origin="bottom">
            <div className={`${styles.wrapper_text_donation}`}>
              <span className="small-text">Faça uma Doação</span>
              <h3 className="title">Conheça Nossas Formas de Doação</h3>
            </div>
          </ScrollReveal>
        </section>

        <section className={`${styles.wrapper_cards}`}>
          <div className={`${styles.wrapper_card_donation}`}>
            <div className={`${styles.wrapper_icon_donation} ${styles.pix}`}>
              <Icon
                className={`${styles.icon}`}
                aria-hidden={true}
                icon="ic:baseline-pix"
              />
            </div>

            <span className={`${styles.title_donation}`}>Chave Pix</span>
            <p className={`${styles.description_donation}`}>
              Faça sua doação através de uma chave pix
            </p>
            <button
              type="button"
              onClick={handleOpenModal}
              aria-haspopup="dialog"
              className={`btn ${styles.btn_donation}`}
            >
              Fazer Doação
            </button>
          </div>

          {isModalOn && (
            <ModalPix on={isModalOn} onCloseModal={handleCloseModal} />
          )}

          <div className={`${styles.wrapper_card_donation}`}>
            <div
              className={`${styles.wrapper_icon_donation} ${styles.vakinha}`}
            >
              <img
                className={`${styles.icon}`}
                src={vakinhaLogo}
                alt=""
                loading="lazy"
                aria-hidden={true}
              />
            </div>

            <span className={`${styles.title_donation}`}>Vakinha</span>
            <p className={`${styles.description_donation}`}>
              Doe de forma segura pela Vakinha e faça parte dessa causa!
            </p>
            <a
              href={vakinhaLink}
              target="_blank"
              className={`btn ${styles.btn_donation}`}
            >
              Fazer Doação
            </a>
          </div>
        </section>
      </article>
    </main>
  );
};

const ModalPix = (props) => {
  const focusableElements = useRef(null);

  useEffect(() => {
    const firstTabStop = focusableElements.current.get(0);
    const lastTabStop = focusableElements.current.get(
      focusableElements.current.size - 1
    );

    firstTabStop.focus();
    document.addEventListener("keydown", (e) => {
      handleKeyboardTrap(e, props.onCloseModal, firstTabStop, lastTabStop);
    });

    return () =>
      document.removeEventListener("keydown", (e) => {
        handleKeyboardTrap(e, props.onCloseModal, firstTabStop, lastTabStop);
      });
  }, [focusableElements]);

  function getMap() {
    if (!focusableElements.current) {
      focusableElements.current = new Map();
    }
    return focusableElements.current;
  }

  const getRef = (node, id) => {
    const map = getMap();
    if (node) {
      map.set(id, node);
    } else {
      map.delete(id);
    }
    return map;
  };

  const handleCopyToClipboard = (e) => {
    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click") {
      navigator.clipboard.writeText(e.target.innerText);
    }
  };

  return (
    <div className={styles.container_modal}>
      <div
        role="dialog"
        aria-labelledby="dialogheader"
        aria-describedby="description"
        className={`${styles.modal}`}
      >
        <button
          ref={(node) => getRef(node, 0)}
          aria-label={props.on ? "Fechar modal" : "Abrir modal"}
          type="button"
          onClick={props.onCloseModal}
          className={`${styles.btn_close_modal}`}
        >
          <Icon icon="ic:round-close" />
        </button>

        <h4 id="dialogheader" className={`${styles.title_modal}`}>
          Chave Pix EcoSempre
        </h4>

        <p
          id="description"
          className={`${styles.paragraph} ${styles.paragraph_modal}`}
        >
          Você pode fazer sua doação para a EcoSempre de forma rápida, prática e
          segura através de uma chave Pix. Para fazer sua doação via Pix, basta
          abrir seu aplicativo do banco, acessar a opção Pix e ler o QR Code
          abaixo. Ou se preferir, insira uma das chaves Pix da EcoSempre.
        </p>

        <div className={`${styles.wrapper_pix}`}>
          <div className={`${styles.subtitle_pix}`}>Chave Pix EcoSempre</div>
          <p>
            <span className={`${styles.pix_label}`}>Email:</span>{" "}
            <span
              title="Clique aqui para copiar a chave pix"
              onClick={handleCopyToClipboard}
              onKeyDown={handleCopyToClipboard}
              className={`${styles.pix}`}
              tabIndex={0}
              ref={(node) => getRef(node, 1)}
            >
              ecosempre@gmail.com
            </span>
          </p>
          <p>
            <span className={`${styles.pix_label}`}>CNPJ:</span>{" "}
            <span
              title="Clique aqui para copiar a chave pix"
              onClick={handleCopyToClipboard}
              onKeyDown={handleCopyToClipboard}
              className={`${styles.pix}`}
              tabIndex={0}
              ref={(node) => getRef(node, 2)}
            >
              99.999.999/0001-99
            </span>
          </p>
        </div>

        <hr className={`${styles.line}`} />

        <div className={`${styles.subtitle_pix}`}>QR Code</div>
        <div className={`${styles.qr_code_wrapper}`}>
          <img src={qrCode} alt="QR Code do pix da EcoSempre" />
        </div>
        <p className={`${styles.paragraph} ${styles.paragraph_modal}`}>
          Após realizar seu Pix, envie seu comprovante para o nosso{" "}
          <a
            href="#"
            className={styles.whatsapp_link}
            ref={(node) => getRef(node, 3)}
          >
            whatsapp
          </a>
          , para identificarmos a sua doação. Fique tranquilo, todas as
          informações são confidenciais e não serão repassadas a terceiros.
        </p>

        <button
          type="button"
          onClick={props.onCloseModal}
          className={`btn btn-link ${styles.btn_modal}`}
          ref={(node) => getRef(node, 4)}
        >
          FECHAR
        </button>
      </div>
    </div>
  );
};
