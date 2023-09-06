import * as DescriptionPage from '../../components/DescriptionPage'

import { Icon } from '@iconify/react'
import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'
import { Coletas } from '../../components/Coletas'

import { threeR, peopleRecycling } from '../../assets/imgs/descarte'
import { coletasImg } from '../../assets/imgs/home'
import { recycleIcon } from '../../assets/icons'

import styles from './styles.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/descarte',
  },
  {
    name: 'Descarte Correto do Lixo Eletrônico',
  },
]

export function Descarte() {
  return (
    <main className={styles.main_container}>
      <HeaderSection
        title="Descarte Correto do Lixo Eletrônico"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <DescriptionPage.Root
        className={`container lg:gap-x-16 lg:gap-y-36 xl:gap-y-48`}
      >
        <DescriptionPage.Content>
          <ScrollReveal origin="bottom" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Descarte Responsável" />
            <DescriptionPage.Title
              className="mt-2 mb-6 hyphens-auto"
              title="Proteja o Meio Ambiente e Contribua para a Sustentabilidade"
            />
          </ScrollReveal>

          <ScrollReveal origin="bottom" className="space-y-6">
            <DescriptionPage.Paragraph>
              Você sabia que o descarte inadequado do lixo eletrônico pode
              causar sérios danos ao meio ambiente? Com o avanço tecnológico, a
              quantidade de equipamentos eletrônicos descartados cresce a cada
              ano, e é fundamental que todos façam sua parte para garantir que
              esses resíduos sejam tratados corretamente.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Na EcoSempre, estamos comprometidos em conscientizar e incentivar
              as pessoas a descartarem seus eletrônicos de forma responsável. Os
              equipamentos eletrônicos contêm materiais tóxicos, como chumbo,
              mercúrio e cádmio, que podem contaminar o solo, a água e o ar se
              forem descartados de maneira inadequada.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Ao optar por descartar seu lixo eletrônico em pontos de coleta
              designados, você estará contribuindo para a preservação do meio
              ambiente e evitando a contaminação de recursos naturais preciosos.
              Esses pontos de coleta são estrategicamente localizados e possuem
              infraestrutura adequada para o tratamento seguro dos resíduos
              eletrônicos.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </DescriptionPage.Content>

        <ScrollReveal
          origin="top"
          className="relative w-auto lg:h-[23rem] lg:max-w-md h-auto sm:self-center sm:justify-self-center"
        >
          <img
            src={threeR}
            alt="3 mãos segurando placas com os símbolos dos 3R's"
            className="rounded h-full w-full object-cover"
          />

          <div
            className="bg-white p-4 sm:p-7 absolute -bottom-6 -right-2 rounded shadow-[0px_4.27px_13.68px_0px_#3c3a4426]"
            aria-hidden
          >
            <div className="rounded bg-green-300 py-3 px-5 sm:py-4 sm:px-9">
              <img
                src={recycleIcon}
                alt=""
                className="w-8 h-8 sm:w-12 sm:h-12"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal origin="bottom" className="space-y-6 mt-6 lg:mt-0">
          <DescriptionPage.Paragraph>
            Além disso, ao descartar seus eletrônicos em pontos de coleta, você
            possibilita a reciclagem e a reutilização de componentes e materiais
            presentes nesses equipamentos. Isso reduz a necessidade de extração
            de matérias-primas, economiza energia e contribui para a redução do
            desperdício. Na EcoSempre, temos uma ampla rede de pontos de coleta
            espalhados pela cidade de Brasília, prontos para receber o seu lixo
            eletrônico.
          </DescriptionPage.Paragraph>

          <DescriptionPage.Paragraph>
            Ao fazer o descarte correto, você estará promovendo a economia
            circular, onde recursos valiosos são recuperados e reintroduzidos no
            ciclo produtivo. Faça a diferença para o planeta e para as gerações
            futuras. Descarte seu lixo eletrônico de forma responsável em nossos
            pontos de coleta e ajude a preservar o meio ambiente. Juntos,
            podemos construir um futuro mais sustentável e consciente.
          </DescriptionPage.Paragraph>
        </ScrollReveal>

        <ScrollReveal
          origin="top"
          className="relative w-auto h-auto self-center justify-self-center lg:justify-self-start hidden md:block lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3"
        >
          <img
            src={peopleRecycling}
            className="rounded"
            alt="Pessoas reciclando garrafa PET"
          />
          <div
            aria-hidden
            className="bg-green-300 rounded -z-10 w-56 h-44 absolute -bottom-6 -right-6"
          />
        </ScrollReveal>
      </DescriptionPage.Root>

      <article className={styles.wrapper_coletas}>
        <Coletas
          subtitle="Conheça Nossos Pontos de Coleta"
          title="Saiba Onde Descartar Corretamente Seu Lixo Eletrônico"
          linkText="Explorar Pontos de Coleta"
          imgCallbackComponent={ImgColetas}
          padding="4rem 1.5rem 7.5rem 1.5rem"
        />
      </article>
    </main>
  )
}

function ImgColetas() {
  return (
    <ScrollReveal origin="right" className={styles.container_coletas}>
      <div className={`${styles.wrapper_img_coletas}`}>
        <img src={coletasImg} alt="Imagem dos equipamentos coletados" />
      </div>

      <div className={styles.container_box_coletas}>
        <div className={styles.wrapper_box_coletas}>
          <Icon icon="bx:map" aria-hidden />
          <p className={styles.text_box_coletas}>
            Encontre o Ponto de Coleta Mais Próximo!
          </p>
        </div>
      </div>
    </ScrollReveal>
  )
}
