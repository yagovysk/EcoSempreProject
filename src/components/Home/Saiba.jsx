import styles from "./Saiba.module.css";
import smartPhoneImg from "../../assets/smartphone.svg";
import computadorImg from "../../assets/computador.svg";
import impressoraImg from "../../assets/impressora.svg";
import cameraImg from "../../assets/camera.svg";

export function Saiba() {
  return (
    <div className={`${styles.box} container`}>
      <article className={`textsContainer`}>
        <span className={`${styles.smallText} small-text`}>
          O que pode ser descartado?
        </span>
        <section className={`texts`}>
          <h2 className={`title ${styles.title}`}>
            Saiba Quais são os Tipos de Lixo Eletrônico que Podem ser Coletados
          </h2>
          <p className={styles.paragraph}>
            Lembre-se de realizar o descarte correto para proteger o meio
            ambiente e evitar danos à saúde pública. Em nossos pontos de coleta,
            aceitamos diversos tipos de lixo eletrônico e eletroeletrônico,
            desde smartphones antigos, até pilhas, baterias e eletrodomésticos.
          </p>
          <button className={`btn ${styles.saibabutton}`}>
            <a href="#">Ver Lista Completa</a>
            <span>🡢</span>
          </button>
        </section>
      </article>

      <article className={styles.dispositivos}>
        <Device
          title="Smartphones"
          img={smartPhoneImg}
          altImg="Ícone de celular"
          description={`Atualize seus dispositivos eletrônicos e descarte os antigos com
            segurança e responsabilidade.`}
          classes={styles}
        />
        <Device
          title="Computadores"
          img={computadorImg}
          altImg="Ícone de laptop"
          description={`Ao substituir seu equipamento antigo, você pode dar a ele uma
            segunda vida ao doar ou reciclar de maneira responsável.`}
          classes={styles}
        />

        <Device
          title="Impressoras"
          img={impressoraImg}
          altImg="Ícone de impressora"
          description={`Recicle com responsabilidade, garanta que materiais como cartuchos
            de tinta e toners sejam descartados corretamente.`}
          classes={styles}
        />

        <Device
          title="Câmeras"
          img={cameraImg}
          altImg="Ícone de câmera"
          description={`Recicle corretamente para evitar que ela se torne lixo eletrônico e
            contribuir para a preservação do meio ambiente.`}
          classes={styles}
        />
      </article>
    </div>
  );
}

function Device({ classes, img, altImg, title, description }) {
  return (
    <div className={classes.device}>
      <img src={img} alt={altImg} />
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
