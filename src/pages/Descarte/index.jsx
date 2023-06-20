import { HeaderSection } from "../../components/HeaderSection";
import { Coletas } from "../../components/Home/Coletas";
import { Icon } from "@iconify/react";

import threeR from "../../assets/three_r.png";
import pessoasReciclando from "../../assets/pessoas_reciclando.png";
import recycleIcon from "../../assets/recycleIcon.svg";
import coletaimg from "../../assets/Coletasimg.png";
import styles from "./Descarte.module.css";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Programas",
    path: "/descarte",
  },
  {
    name: "Descarte Correto do Lixo Eletrônico",
  },
];

export function Descarte() {
  return (
    <main>
      <HeaderSection
        title="Descarte Correto do Lixo Eletrônico"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <article className={`container ${styles.container_content}`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <span className="small-text">Descarte Responsável</span>
          <div className="texts">
            <h2 className={`title ${styles.title}`}>
              Proteja o Meio Ambiente e Contribua para a Sustentabilidade
            </h2>
            <p className={`${styles.paragraph}`}>
              Você sabia que o descarte inadequado do lixo eletrônico pode
              causar sérios danos ao meio ambiente? Com o avanço tecnológico, a
              quantidade de equipamentos eletrônicos descartados cresce a cada
              ano, e é fundamental que todos façam sua parte para garantir que
              esses resíduos sejam tratados corretamente.
            </p>
            <p className={`${styles.paragraph}`}>
              Na EcoSempre, estamos comprometidos em conscientizar e incentivar
              as pessoas a descartarem seus eletrônicos de forma responsável. Os
              equipamentos eletrônicos contêm materiais tóxicos, como chumbo,
              mercúrio e cádmio, que podem contaminar o solo, a água e o ar se
              forem descartados de maneira inadequada.
            </p>
            <p className={`${styles.paragraph}`}>
              Ao optar por descartar seu lixo eletrônico em pontos de coleta
              designados, você estará contribuindo para a preservação do meio
              ambiente e evitando a contaminação de recursos naturais preciosos.
              Esses pontos de coleta são estrategicamente localizados e possuem
              infraestrutura adequada para o tratamento seguro dos resíduos
              eletrônicos.
            </p>
          </div>
        </section>

        <div className={`${styles.wrapper_img} ${styles.wrapper_img1}`}>
          <img src={threeR} alt="Mãos segurando placas com os 3 R" />
          <div className={styles.wrapper_recycle_box}>
            <div className={styles.recycle_box}>
              <img src={recycleIcon} alt="Ícone de reciclagem" />
            </div>
          </div>
        </div>

        <div className={`${styles.wrapper_img} ${styles.wrapper_img2}`}>
          <img src={pessoasReciclando} alt="Pessoas reciclando garrafa PET" />
          <div className={styles.medium_box}></div>
        </div>

        <div className={`texts`}>
          <p className={`${styles.paragraph}`}>
            Além disso, ao descartar seus eletrônicos em pontos de coleta, você
            possibilita a reciclagem e a reutilização de componentes e materiais
            presentes nesses equipamentos. Isso reduz a necessidade de extração
            de matérias-primas, economiza energia e contribui para a redução do
            desperdício. Na EcoSempre, temos uma ampla rede de pontos de coleta
            espalhados pela cidade de Brasília, prontos para receber o seu lixo
            eletrônico.
          </p>
          <p className={`${styles.paragraph}`}>
            Ao fazer o descarte correto, você estará promovendo a economia
            circular, onde recursos valiosos são recuperados e reintroduzidos no
            ciclo produtivo. Faça a diferença para o planeta e para as gerações
            futuras. Descarte seu lixo eletrônico de forma responsável em nossos
            pontos de coleta e ajude a preservar o meio ambiente. Juntos,
            podemos construir um futuro mais sustentável e consciente.
          </p>
        </div>
      </article>

      <article className={styles.wrapper_coletas}>
        <Coletas
          subtitle="Conheça Nossos Pontos de Coleta"
          title="Saiba Onde Descartar Corretamente Seu Lixo Eletrônico"
          linkText="Explorar Pontos de Coleta"
          imgCallbackComponent={() => <ImgColetas />}
          padding="4rem"
        />
      </article>
    </main>
  );
}

function ImgColetas() {
  return (
    <div className={styles.container_coletas}>
      <div className={styles.wrapper_img_coletas}>
        <img src={coletaimg} alt="Imagem dos equipamentos coletados" />
      </div>

      <div className={styles.container_box_coletas}>
        <div className={styles.wrapper_box_coletas}>
          <Icon icon="bx:map" />
          <p className={styles.text_box_coletas}>
            Encontre o Ponto de Coleta Mais Próximo!
          </p>
        </div>
      </div>
    </div>
  );
}
