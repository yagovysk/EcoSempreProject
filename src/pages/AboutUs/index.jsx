import * as DescriptionPage from '../../components/DescriptionPage'

import { ContactCard } from '../../components/ContactCard'
import { ParceirosCard } from '../../components/ParceirosCard'
import { HeaderSection } from '../../components/HeaderSection'
import { Map } from '../../components/Map'
import { Carousel } from '../../components/Carousel'
import { ScrollReveal } from '../../components/ScrollReveal'

import { headquarters, peopleWithNotebook } from '../../assets/imgs/aboutUs'

import styles from './styles.module.css'
import { useIncreaseNumber } from '../../hooks/useIncreaseNumber'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'EcoSempre',
    path: '/sobre',
  },
  {
    name: 'Sobre Nós',
  },
]

const images = [peopleWithNotebook, peopleWithNotebook, peopleWithNotebook]

export function AboutUs() {
  const experienceYears = useIncreaseNumber(10, 100, 1)

  return (
    <main className={styles.main_container}>
      <HeaderSection
        className={styles.header}
        title="Sobre Nós"
        linksMenu={linksMenu}
      />

      <DescriptionPage.Root className="container gap-10 lg:gap-16">
        <DescriptionPage.Content>
          <ScrollReveal origin="left" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Quem Somos" />
            <DescriptionPage.Title
              className="mt-2"
              title="Sua Parceira em Soluções Tecnológicas"
            />
          </ScrollReveal>

          <ScrollReveal origin="left" className="flex flex-col gap-8">
            <DescriptionPage.Paragraph className="mt-6 lg:mt-10">
              A Sempretec é uma empresa de soluções na área de tecnologia e
              oferece a seus clientes venda, assistência técnica e locação de
              equipamentos. Fundada a mais de uma década com o objetivo de
              suprir as necessidades de produtos e serviços tecnológicos do
              mercado de Brasília, hoje oferece a todo Brasil, produtos e
              serviços de alta qualidade.
            </DescriptionPage.Paragraph>

            <DescriptionPage.Paragraph>
              Oferecendo ao seus clientes o melhor serviço de outsourcing ,
              aliado aos demais recursos tecnológicos existentes, são hoje uma
              solução moderna na que tem contribuído, significativamente, para
              uma boa gestão, melhoria dos processos, gerenciamento dos recursos
              e na redução de custos, uma vez que não implicará em
              investimentos, tais como aquisição de equipamentos e insumos e as
              necessárias substituições periódicas, por motivo de depreciação,
              causado pelo avanço tecnológico e o desgaste natural pelo uso
              continuo.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </DescriptionPage.Content>

        <ScrollReveal
          origin="right"
          className="self-center h-auto overflow-hidden lg:overflow-visible"
        >
          <div className="w-full rounded overflow-hidden">
            <Carousel.Root>
              <Carousel.Content>
                {images.map((image, index) => (
                  <div key={index} className="keen-slider__slide">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}

                <Carousel.PrevButton className="left-40 sm:left-48 lg:left-5" />
                <Carousel.NextButton className="right-1 sm:right-2 lg:right-40" />
              </Carousel.Content>
            </Carousel.Root>
          </div>

          <div className="rounded grid gap-1 text-center md:gap-3 px-2 place-items-center place-content-center font-semibold text-white font-IBM-plex-sans bg-green-300 absolute z-10 w-40 h-32 sm:w-48 sm:h-64 bottom-0 lg:bottom-10 lg:-right-10 md:px-5">
            <strong className="block text-4xl sm:text-7xl">
              +{experienceYears}
            </strong>
            <span className="text-sm sm:text-base sm:whitespace-nowrap">
              Anos de Experiências
            </span>
          </div>
        </ScrollReveal>

        <div className="flex flex-col mt-7 lg:mt-28 gap-14 lg:gap-28">
          <ScrollReveal
            origin="right"
            className="flex flex-col gap-8 lg:gap-10"
          >
            <h3 className="text-blue font-IBM-plex-sans font-bold text-4xl/6">
              Missão
            </h3>
            <DescriptionPage.Paragraph>
              A nossa missão é oferecer serviços e produtos de tecnologia de
              alta qualidade, visando à total satisfação de nossos clientes.
              Através de uma equipe altamente qualificada e em constante
              atualização, buscamos fornecer soluções tecnológicas inovadoras e
              personalizadas para atender às necessidades específicas de cada
              cliente.
            </DescriptionPage.Paragraph>
          </ScrollReveal>

          <ScrollReveal
            origin="right"
            className="flex flex-col gap-8 lg:gap-10 mt-auto"
          >
            <h3 className="text-blue font-IBM-plex-sans font-bold text-4xl/6">
              Visão
            </h3>
            <DescriptionPage.Paragraph>
              Ser reconhecida por nossos clientes e parceiros como uma empresa
              ética e sustentável, que preza pela qualidade e bom
              relacionamento. Respeito e dedicação aos nossos clientes,
              excelência em nosso atendimento, transparência nas relações com
              clientes e fornecedores, trabalho realizado em equipe e segurança
              das informações de nossos clientes.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </div>

        <DescriptionPage.ImageContainer className="lg:row-[2/4] self-center justify-self-center">
          <ScrollReveal origin="left">
            <img
              src={headquarters}
              alt="Sede da SempreTech"
              className="rounded"
            />
            <div
              className="rounded bg-green-300 w-36 h-44 md:h-96 md:w-48 absolute -z-10 -bottom-8 md:-bottom-16 -left-11"
              aria-hidden
            />
          </ScrollReveal>
        </DescriptionPage.ImageContainer>
      </DescriptionPage.Root>

      <div className={styles.contact_content}>
        <div className={styles.wrapper_map}>
          <Map />
        </div>
        <div className={`${styles.card_wrapper} container`}>
          <ScrollReveal origin="left" delay={1500}>
            <div className={styles.card_style}>
              <ContactCard />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <ScrollReveal origin="top">
        <div className={styles.partners_content}>
          <ParceirosCard />
        </div>
      </ScrollReveal>
    </main>
  )
}
