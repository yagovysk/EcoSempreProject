import * as DescriptionPage from '../../components/DescriptionPage'

import { HeaderSection } from '../../components/HeaderSection'
import { ParceirosCard } from '../../components/ParceirosCard'
import { ScrollReveal } from '../../components/ScrollReveal'

import {
  logisticaSustentabilidade,
  personWithSign,
} from '../../assets/imgs/logisticaReversa'

import styles from './styles.module.css'

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

      <DescriptionPage.Root className={`container gap-20 lg:gap-y-48`}>
        <DescriptionPage.Content className={``}>
          <ScrollReveal origin="bottom" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Logística Reversa" />
            <DescriptionPage.Title
              className="mt-2 mb-10 hyphens-auto"
              title="Nosso Compromisso com a Sustentabilidade"
            />
          </ScrollReveal>

          <ScrollReveal origin="bottom" className="space-y-6">
            <DescriptionPage.Paragraph>
              A logística reversa é um processo essencial para a
              sustentabilidade e a preservação do meio ambiente. Trata-se de um
              conjunto de ações que visa a coleta, o retorno e a destinação
              adequada de produtos descartados, com o objetivo de minimizar o
              impacto ambiental e promover a economia circular.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Na EcoSempre, entendemos a importância da logística reversa como
              uma forma de promover a responsabilidade ambiental e contribuir
              para um futuro mais sustentável. Temos um compromisso sólido em
              implementar práticas de logística reversa em todos os nossos
              processos.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Nossos pontos de coleta estrategicamente localizados permitem que
              os clientes descartem corretamente seus equipamentos eletrônicos e
              eletrodomésticos, garantindo que esses produtos sejam encaminhados
              para reciclagem, reutilização ou disposição final adequada. Ao
              fazer isso, evitamos a contaminação do solo, água e ar, além de
              reduzirmos a exploração de recursos naturais.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </DescriptionPage.Content>

        <ScrollReveal
          origin="top"
          className="relative my-4 sm:my-10 h-auto w-auto self-center justify-self-center"
        >
          <div
            aria-hidden
            className="bg-green-300 rounded absolute -z-10 w-20 h-20 -left-4 -top-4 sm:w-24 sm:h-28 sm:-top-6 sm:-left-6"
          />
          <img
            src={logisticaSustentabilidade}
            alt="Mão segurando símbolos da sustentabilidade"
            className="rounded"
          />
          <div
            aria-hidden
            className="bg-green-300 rounded absolute -z-10 w-40 h-44 sm:w-52 sm:h-96 -right-6 sm:-right-12 -bottom-6 sm:-bottom-12"
          />
        </ScrollReveal>

        <ScrollReveal origin="bottom">
          <div className="space-y-6">
            <DescriptionPage.Paragraph>
              A EcoSempre mantém parcerias com empresas certificadas e
              especializadas em logística reversa, garantindo que os materiais
              coletados sejam devidamente tratados e processados. Além disso,
              nossa equipe é treinada e capacitada para lidar com os desafios e
              demandas da logística reversa, assegurando a eficiência e a
              transparência em todo o processo.
            </DescriptionPage.Paragraph>
            <DescriptionPage.Paragraph>
              Ao escolher a EcoSempre, você pode ter a tranquilidade de que seus
              produtos serão descartados de forma responsável e ecologicamente
              correta. Estamos comprometidos em contribuir para a proteção do
              meio ambiente e trabalhar em prol de uma economia mais circular,
              onde recursos preciosos são reutilizados e resíduos são reduzidos.
            </DescriptionPage.Paragraph>
          </div>
        </ScrollReveal>

        <ScrollReveal
          origin="top"
          className="h-auto w-auto self-center justify-self-center relative lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3"
        >
          <img
            src={personWithSign}
            alt="Homem segurando placa com logo ecológica"
            className="rounded"
          />
          <div
            aria-hidden
            className="bg-green-300 rounded absolute -z-10 w-32 h-28 sm:w-56 sm:h-48 sm:-bottom-8 sm:-left-8 -bottom-6 -left-6"
          />
        </ScrollReveal>
      </DescriptionPage.Root>

      <article className={`${styles.partners_wrapper}`}>
        <ParceirosCard />
      </article>
    </main>
  )
}
