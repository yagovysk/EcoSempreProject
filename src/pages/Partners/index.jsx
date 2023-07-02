import styles from "./Partners.module.css";
import ecoLogo from "../../assets/ecoIcon.svg";
import partnersPeople from "../../assets/partners_people.png";
import quotes from "../../assets/quotes.svg";
import half_man1 from "../../assets/partners_half_img1.png";
import half_man2 from "../../assets/partners_half_img2.png";
import { HeaderSection } from "../../components/HeaderSection";
import { ParceirosCard } from "../../components/ParceirosCard";
import { ScrollReveal } from "../../components/ScrollReveal";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "EcoSempre",
    path: "/parceiros",
  },
  {
    name: "Parceiros",
  },
];

export function Partners() {
  return (
    <main>
      <HeaderSection
        title="Nossos Parceiros"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <div className={`container ${styles.content_texts}`}>
        <article className={`${styles.about_us}`}>
          <Texts
            subtitle="Sustentabilidade em Ação"
            title="Nossa Experiência, Trajetória e Inovação Permanente"
            paragraphs={[
              `Se fortalecem por meio de parcerias estratégicas,
              certificações ambientais e colaboração com organizações
              líderes em sustentabilidade.`,

              `Graças a essas colaborações, podemos oferecer aos nossos
              clientes soluções abrangentes e serviços especializados que
              abordam os desafios e necessidades específicas relacionadas ao
              descarte e reciclagem de resíduos eletrônicos.`,

              `Estamos comprometidos em fazer um impacto positivo no meio
              ambiente e na sociedade, promovendo a economia circular e
              contribuindo para a construção de um futuro mais sustentável.`,
            ]}
          />

          <div className={styles.wrapper_imgs}>
            <ScrollReveal origin="top">
              <div className={`${styles.wrapper_img} ${styles.wrapper_img1}`}>
                <img
                  className={styles.img_person}
                  src={half_man1}
                  alt="Homens trabalhando"
                />
                <div className={styles.sustentabilidade_wrapper}>
                  <img src={ecoLogo} alt="EcoLogo" />
                  <p className={styles.sustentabilidade_paragraph}>
                    Soluções inovadoras para um mundo sustentável
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal origin="top">
              <div className={`${styles.wrapper_img} ${styles.img2}`}>
                <img
                  className={styles.img_person}
                  src={half_man2}
                  alt="Homens trabalhando"
                />
              </div>
            </ScrollReveal>
          </div>
        </article>

        <article className={styles.partners}>
          <div className={styles.wrapper_partners}>
            <ScrollReveal origin="top">
              <div className={styles.wrapper_img_partners}>
                <img
                  className={styles.img_partners}
                  src={partnersPeople}
                  alt="Parceiros da EcoSempre"
                />
              </div>

              <div className={styles.wrapper_text_img_partners}>
                <div className={styles.wrapper_paragraph_text_partners}>
                  <p className={styles.paragraph_text_partners}>
                    A EcoSempre é uma parceira incrível na jornada pela
                    sustentabilidade.
                  </p>

                  <img
                    className={styles.quotes_partners}
                    src={quotes}
                    alt="Ilustração de aspas duplas"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

          <Texts
            subtitle="Nossos Parceiros"
            title="Conheça Alguns de Nossos Parceiros de Negócios"
            paragraphs={[
              `Contamos com acordos regionais e locais para fornecer soluções de
							acordo com as necessidades de nossos clientes. Estabelecemos parcerias estratégicas com empresas líderes do setor para fornecer soluções de alta qualidade aos nossos clientes. `,
              `Conheça alguns dos nossos parceiros de negócios que nos ajudam a promover a inovação e a excelência em nossos serviços. Juntos, estamos comprometidos em oferecer as melhores soluções sustentáveis para atender às necessidades específicas de cada cliente.`,
            ]}
          />
        </article>
      </div>
      <div className={styles.partners_card_container}>
        <ParceirosCard />
      </div>
    </main>
  );
}

function Texts({ subtitle, title, paragraphs }) {
  return (
    <section className={`textsContainer ${styles.textsContainer}`}>
      <ScrollReveal origin="bottom">
        <span className="small-text">{subtitle}</span>
      </ScrollReveal>
      <ScrollReveal origin="bottom">
        <section className={`texts `}>
          <h2 className="title">{title}</h2>
          <div className={styles.paragraphs}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </section>
  );
}
