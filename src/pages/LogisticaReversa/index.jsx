import { HeaderSection } from '../../components/HeaderSection'
import { ParceirosCard } from '../../components/ParceirosCard'
import { ScrollReveal } from '../../components/ScrollReveal'

import {
  logisticaSustentabilidade,
  personWithSign,
} from '../../assets/imgs/logisticaReversa'

import styles from './LogisticaReversa.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/logistica',
  },
  {
    name: 'Logística Reversa',
  },
]

export function LogisticaReversa() {
  return (
    <main>
      <HeaderSection
        title="Logística Reversa"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <article className={`container ${styles.container_content}`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="bottom">
            <span className="small-text">Logística Reversa</span>
          </ScrollReveal>

          <ScrollReveal origin="bottom">
            <div className="texts">
              <h2 className="title">
                Nosso Compromisso com a Sustentabilidade
              </h2>
              <p className={`${styles.paragraph}`}>
                A logística reversa é um processo essencial para a
                sustentabilidade e a preservação do meio ambiente. Trata-se de
                um conjunto de ações que visa a coleta, o retorno e a destinação
                adequada de produtos descartados, com o objetivo de minimizar o
                impacto ambiental e promover a economia circular.
              </p>
              <p className={`${styles.paragraph}`}>
                Na EcoSempre, entendemos a importância da logística reversa como
                uma forma de promover a responsabilidade ambiental e contribuir
                para um futuro mais sustentável. Temos um compromisso sólido em
                implementar práticas de logística reversa em todos os nossos
                processos.
              </p>
              <p className={`${styles.paragraph}`}>
                Nossos pontos de coleta estrategicamente localizados permitem
                que os clientes descartem corretamente seus equipamentos
                eletrônicos e eletrodomésticos, garantindo que esses produtos
                sejam encaminhados para reciclagem, reutilização ou disposição
                final adequada. Ao fazer isso, evitamos a contaminação do solo,
                água e ar, além de reduzirmos a exploração de recursos naturais.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <div className={`${styles.wrapper_img} ${styles.wrapper_img1}`}>
          <ScrollReveal origin="top">
            <div aria-hidden={true} className={styles.small_box}></div>
            <img
              src={logisticaSustentabilidade}
              alt="Mão segurando símbolos da sustentabilidade"
            />
            <div aria-hidden={true} className={styles.big_box}></div>
          </ScrollReveal>
        </div>

        <div className={`${styles.wrapper_img} ${styles.wrapper_img2}`}>
          <ScrollReveal origin="top">
            <img
              src={personWithSign}
              alt="Homem segurando placa com logo ecológica"
            />
            <div aria-hidden={true} className={styles.medium_box}></div>
          </ScrollReveal>
        </div>

        <ScrollReveal origin="bottom">
          <div className={`texts`}>
            <p className={`${styles.paragraph}`}>
              A EcoSempre mantém parcerias com empresas certificadas e
              especializadas em logística reversa, garantindo que os materiais
              coletados sejam devidamente tratados e processados. Além disso,
              nossa equipe é treinada e capacitada para lidar com os desafios e
              demandas da logística reversa, assegurando a eficiência e a
              transparência em todo o processo.
            </p>
            <p className={`${styles.paragraph}`}>
              Ao escolher a EcoSempre, você pode ter a tranquilidade de que seus
              produtos serão descartados de forma responsável e ecologicamente
              correta. Estamos comprometidos em contribuir para a proteção do
              meio ambiente e trabalhar em prol de uma economia mais circular,
              onde recursos preciosos são reutilizados e resíduos são reduzidos.
            </p>
          </div>
        </ScrollReveal>
      </article>

      <article className={`${styles.partners_wrapper}`}>
        <ParceirosCard />
      </article>
    </main>
  )
}
