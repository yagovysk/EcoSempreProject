import * as DescriptionPage from '../../components/DescriptionPage'

import { HeaderSection } from '../../components/HeaderSection'
import { HowItWorks } from './components/HowItWorks'
import { ScrollReveal } from '../../components/ScrollReveal'

import {
  peopleReforesting,
  personPlating,
  bgHeaderReforestation,
} from '../../assets/imgs/reforestation'

import styles from './styles.module.css'
import { Carousel } from '../../components/Carousel'

const linksBreadcrumb = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Programas',
    path: '/reflorestamento',
  },
  {
    name: 'Reflorestamento',
  },
]

const images = [peopleReforesting, personPlating, bgHeaderReforestation]

export function Reforestation() {
  return (
    <main className="overflow-hidden">
      <HeaderSection
        title="Reflorestamento"
        linksMenu={linksBreadcrumb}
        className={`${styles.header} hyphens-auto`}
      />

      <DescriptionPage.Root className="container relative">
        <DescriptionPage.Content className="">
          <ScrollReveal origin="left" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Restaurando a Natureza" />
            <DescriptionPage.Title
              className="mt-2"
              title="Cuidando do Meio Ambiente: Reflorestamento"
            />
          </ScrollReveal>

          <ScrollReveal origin="left">
            <div className="flex flex-col gap-6">
              <DescriptionPage.Paragraph className="mt-5 lg:mt-10">
                O reflorestamento desempenha um papel fundamental na preservação
                do meio ambiente e na promoção da sustentabilidade. Na
                EcoSempre, estamos comprometidos em contribuir para essa causa
                tão importante.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Através de parcerias com organizações ambientais e projetos de
                reflorestamento, plantamos árvores em áreas devastadas,
                recuperando ecossistemas e promovendo a biodiversidade. Cada
                árvore plantada é um passo em direção a um futuro mais verde e
                saudável.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Além disso, incentivamos nossos colaboradores, clientes e
                parceiros a participarem ativamente do reflorestamento,
                compartilhando conhecimento, promovendo a conscientização e
                apoiando iniciativas locais.
              </DescriptionPage.Paragraph>
            </div>
          </ScrollReveal>
        </DescriptionPage.Content>

        <ScrollReveal
          origin="right"
          className="overflow-hidden h-auto lg:overflow-visible self-end"
        >
          <div className="overflow-hidden rounded md:max-w-lg lg:max-w-sm mx-auto">
            <Carousel.Root>
              <Carousel.Content>
                {images.map((image, index) => (
                  <div className="keen-slider__slide" key={index}>
                    <img
                      src={image}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                ))}

                <Carousel.PrevButton className="!left-4" />
                <Carousel.NextButton />
              </Carousel.Content>
            </Carousel.Root>
          </div>
        </ScrollReveal>

        <ScrollReveal
          origin="right"
          aria-hidden
          className="rounded w-28 h-32 bg-green-300 absolute -z-10 -right-0 -bottom-7 md:right-36 lg:right-16"
        >
          <div></div>
        </ScrollReveal>
      </DescriptionPage.Root>

      <HowItWorks className="my-20" />

      <DescriptionPage.Root className="container pb-28 gap-y-16">
        <DescriptionPage.ImageContainer className="lg:max-w-lg justify-self-center lg:w-full">
          <ScrollReveal origin="left">
            <img
              src={personPlating}
              alt="Pessoa com luva amarela plantando uma pequena muda de planta"
              loading="lazy"
              className="rounded-md"
            />
            <div
              className="bg-green-300 w-40 h-36 absolute rounded -z-10 -bottom-7 -left-8"
              aria-hidden
            ></div>
          </ScrollReveal>
        </DescriptionPage.ImageContainer>

        <div className="self-center">
          <ScrollReveal origin="right" className="flex flex-col gap-6 h-auto">
            <DescriptionPage.Paragraph>
              Convidamos você a se juntar a nós nessa jornada pelo
              reflorestamento. Acreditamos que cada pessoa pode fazer a
              diferença ao plantar uma árvore, apoiar projetos de restauração
              florestal e adotar práticas sustentáveis em seu dia a dia. Ao
              unirmos forças, podemos criar um futuro mais verde e equilibrado
              para todos. Faça parte desse movimento de preservação ambiental e
              seja um agente de transformação em prol do reflorestamento.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Ao se engajar nessa causa, você estará contribuindo para a
              recuperação de ecossistemas, a proteção da biodiversidade e a
              mitigação das mudanças climáticas. Junte-se a nós e vamos
              construir um mundo mais sustentável e resiliente para as gerações
              presentes e futuras.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </div>
      </DescriptionPage.Root>
    </main>
  )
}
