import * as DescriptionPage from '../../components/DescriptionPage'

import { HeaderSection } from '../../components/HeaderSection'
import { ParceirosCard } from '../../components/ParceirosCard'
import { ScrollReveal } from '../../components/ScrollReveal'

import {
  firstHalfPeople,
  secondHalfPeople,
  partnersPeople,
} from '../../assets/imgs/partners'

import styles from './Partners.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'EcoSempre',
    path: '/parceiros',
  },
  {
    name: 'Parceiros',
  },
]

export function Partners() {
  return (
    <main>
      <HeaderSection
        title="Nossos Parceiros"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <DescriptionPage.Root className="container relative lg:gap-y-44 lg:gap-x-16">
        <DescriptionPage.Content>
          <ScrollReveal origin="left" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Sustentabilidade em Ação" />
            <DescriptionPage.Title
              className="mt-2"
              title="Nossa Experiência, Trajetória e Inovação Permanente"
            />
          </ScrollReveal>

          <ScrollReveal origin="left">
            <div className="flex flex-col gap-6">
              <DescriptionPage.Paragraph className="mt-5 lg:mt-10">
                Se fortalecem por meio de parcerias estratégicas, certificações
                ambientais e colaboração com organizações líderes em
                sustentabilidade.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Graças a essas colaborações, podemos oferecer aos nossos
                clientes soluções abrangentes e serviços especializados que
                abordam os desafios e necessidades específicas relacionadas ao
                descarte e reciclagem de resíduos eletrônicos.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Estamos comprometidos em fazer um impacto positivo no meio
                ambiente e na sociedade, promovendo a economia circular e
                contribuindo para a construção de um futuro mais sustentável.
              </DescriptionPage.Paragraph>
            </div>
          </ScrollReveal>
        </DescriptionPage.Content>

        <DescriptionPage.ImageContainer className="self-end h-full sm:py-5 justify-self-center">
          <ScrollReveal origin="right" className="flex gap-7">
            <div className="border border-green-300 overflow-hidden relative self-end h-full w-full">
              <img
                src={firstHalfPeople}
                alt=""
                className="w-full h-full object-cover "
              />

              <div
                className={`bg-green-300 mr-10 rounded-tr rounded-bl absolute p-4 sm:p-8 bottom-0 text-white`}
              >
                <EcoLogo className="sm:w-12 sm:h-12" />
                <p
                  className={`text-xs/4 mt-2 sm:mt-5 sm:text-base/6 font-bold font-inter`}
                >
                  Soluções inovadoras para um mundo sustentável
                </p>
              </div>
            </div>

            <div className="border border-green-300 -mt-4 self-start w-full h-full">
              <img
                src={secondHalfPeople}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </DescriptionPage.ImageContainer>

        <DescriptionPage.Content>
          <ScrollReveal origin="right" className="h-auto">
            <DescriptionPage.Subtitle subtitle="Nossos Parceiros" />
            <DescriptionPage.Title
              className="mt-2 hyphens-auto"
              title="Conheça Alguns de
              Nossos Parceiros de
              Negócios"
            />
          </ScrollReveal>

          <ScrollReveal origin="right">
            <div className="flex flex-col gap-6">
              <DescriptionPage.Paragraph className="mt-5 lg:mt-10">
                Contamos com acordos regionais e locais para fornecer soluções
                de acordo com as necessidades de nossos clientes. Estabelecemos
                parcerias estratégicas com empresas líderes do setor para
                fornecer soluções de alta qualidade aos nossos clientes.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Conheça alguns dos nossos parceiros de negócios que nos ajudam a
                promover a inovação e a excelência em nossos serviços. Juntos,
                estamos comprometidos em oferecer as melhores soluções
                sustentáveis para atender às necessidades específicas de cada
                cliente.
              </DescriptionPage.Paragraph>
            </div>
          </ScrollReveal>
        </DescriptionPage.Content>

        <ScrollReveal
          origin="left"
          className="relative lg:col-[1/2] lg:row-[2/3]"
        >
          <div className="w-full h-full rounded overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={partnersPeople}
              alt=""
            />
          </div>

          <div className="bg-white max-w-md mr-16 absolute -bottom-10 rounded p-5 sm:p-8 shadow-[0px_5px_16px_0px_rgba(60,58,68,0.15)]">
            <div className="bg-green-300 rounded font-inter font-bold text-xs sm:text-base text-white px-4 py-6 sm:py-10 sm:px-7">
              A EcoSempre é uma parceira incrível na jornada pela
              sustentabilidade.
            </div>
            <Quotes
              className="absolute bottom-2 left-12 z-10 sm:w-14 sm:h-11"
              aria-hidden
            />
          </div>
        </ScrollReveal>
      </DescriptionPage.Root>

      <div
        className={`${styles.partners_card_container} bg-white border-t border-t-[#eaeaea] lg:border-none lg:bg-[#f6f7f8]`}
      >
        <ParceirosCard />
      </div>
    </main>
  )
}

function EcoLogo({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      {...props}
    >
      <path
        d="M27.7506 14.7711C27.932 15.17 27.7144 15.8954 27.7144 15.9317C27.0978 17.8902 24.8128 18.4343 22.2014 18.3255C21.2947 16.5845 20.3154 14.9161 19.4087 13.1752C21.3672 12.0509 23.217 10.854 25.1755 9.69336C25.9734 11.398 27.533 14.3721 27.7506 14.7711Z"
        fill="white"
      />
      <path
        d="M27.2779 17.2002C26.1536 19.3038 24.993 21.8426 23.651 23.7286C22.6355 25.1794 20.7132 25.4696 18.0655 25.2882C17.993 25.9048 18.0655 26.6664 18.0293 27.3556C17.0137 25.6146 15.9982 23.8737 15.0189 22.0965C15.9619 20.2468 17.0137 18.5058 17.993 16.6924C18.0655 17.2727 17.993 17.9981 18.0293 18.6509C21.3298 18.8685 25.7546 19.3038 27.2779 17.2002ZM12.9153 18.7235V25.3607C10.1226 25.2157 6.96712 25.7597 5.44381 24.4177C4.50081 23.5836 3.88423 21.9877 3.26765 20.8634C2.54227 19.5214 1.81688 18.3245 1.23657 17.1276C1.78061 17.9255 2.72361 18.3245 3.9205 18.5421C4.10185 18.5784 4.24692 18.5784 4.42827 18.6147C5.04485 18.7235 5.66143 18.7235 6.27801 18.7597H7.61997C9.07074 18.7235 10.4852 18.7235 11.936 18.7235H12.9153Z"
        fill="white"
      />
      <path
        d="M10.522 15.4232C9.90546 15.0968 9.36142 14.6979 8.74484 14.4077C7.87438 15.6771 7.22153 17.1642 6.27853 18.3973C3.55833 18.5424 1.30964 17.9258 0.838135 15.7134C1.16456 13.9362 2.21637 12.3766 2.86922 10.9258C2.28891 10.5269 1.52725 10.1642 1.01948 9.76523H7.36661L10.522 15.4232ZM8.52723 1.67717C8.74485 1.38702 9.54277 1.1694 9.54277 1.1694C11.5739 0.770441 13.0972 2.54764 14.2215 4.94141C13.0972 6.57353 12.0816 8.20565 10.9935 9.83777C9.07127 8.64088 7.14899 7.5528 5.26299 6.35592C6.42361 4.79633 8.30961 1.96733 8.52723 1.67717Z"
        fill="white"
      />
      <path
        d="M10.8833 0.915176C13.2408 0.915176 16.0335 0.770098 18.3185 1.06025C20.0957 1.27787 21.2201 2.83745 22.3444 5.26749C22.9247 5.04988 23.5776 4.61465 24.1579 4.32449C23.1061 6.02915 22.0542 7.77008 20.9299 9.47473C18.8625 9.511 16.8315 9.40219 14.7641 9.40219C15.2356 9.07577 15.9247 8.78562 16.4688 8.45919C15.1268 5.44884 13.4222 1.31414 10.8833 0.915176ZM12.9507 15.2053L18.0284 12.6664C18.0284 12.6664 16.6864 9.32966 13.0957 10.6716C13.0957 10.6716 9.86776 11.9773 11.6087 15.7493C11.6087 15.7493 12.4429 17.454 14.6916 17.5265C14.6916 17.5265 16.4325 17.5991 17.448 16.3659L16.2874 15.4954C16.2512 15.4954 14.474 17.0188 12.9507 15.2053ZM13.676 11.9773C13.676 11.9773 14.8367 11.397 16.0335 12.2312L12.588 13.9721C12.588 14.0084 12.5154 12.5576 13.676 11.9773Z"
        fill="white"
      />
    </svg>
  )
}

function Quotes({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="39"
      height="30"
      viewBox="0 0 39 30"
      fill="none"
      {...props}
    >
      <path
        d="M0.608459 21.8858L0.656436 22.2082L0.706329 22.1967C1.04732 23.7913 1.83283 25.2568 2.97199 26.4236C4.11114 27.5903 5.55738 28.4107 7.14336 28.7898C8.72934 29.1689 10.3902 29.0911 11.9339 28.5656C13.4775 28.0401 14.8408 27.0882 15.866 25.8202C16.8913 24.5521 17.5365 23.0197 17.7271 21.4002C17.9176 19.7807 17.6458 18.1404 16.9429 16.669C16.2401 15.1976 15.135 13.9552 13.7555 13.0857C12.3761 12.2162 10.7786 11.755 9.14792 11.7555C8.71999 11.7555 8.30933 11.8208 7.90059 11.8803C8.033 11.4351 8.16924 10.9822 8.38801 10.5754C8.60677 9.98433 8.94835 9.47196 9.28801 8.95576C9.57202 8.39733 10.0729 8.01929 10.4413 7.54147C10.827 7.07708 11.3528 6.76812 11.7692 6.38241C12.178 5.97942 12.7134 5.77792 13.1394 5.49391C13.5846 5.23869 13.9722 4.9566 14.3867 4.82227L15.4211 4.39626L16.3307 4.01822L15.4019 0.297316L14.2562 0.573651C13.8897 0.665762 13.4426 0.773224 12.9341 0.901797C12.414 0.997746 11.8594 1.26065 11.2415 1.50052C10.6332 1.77493 9.92511 1.95723 9.26882 2.39668C8.60869 2.81502 7.84685 3.16427 7.17521 3.72462C6.52468 4.30223 5.73981 4.80308 5.16028 5.53613C4.52702 6.22313 3.90143 6.94466 3.41593 7.76599C2.85367 8.54893 2.47179 9.40864 2.06881 10.2587C1.7042 11.1089 1.41059 11.9781 1.17072 12.8225C0.715926 14.515 0.512511 16.1231 0.433833 17.4991C0.368587 18.8769 0.406966 20.0225 0.487563 20.8515C0.514533 21.1977 0.554858 21.5428 0.608459 21.8858ZM21.7172 21.8858L21.7652 22.2082L21.8151 22.1967C22.1561 23.7913 22.9416 25.2568 24.0808 26.4236C25.2199 27.5903 26.6662 28.4107 28.2521 28.7898C29.8381 29.1689 31.499 29.0911 33.0427 28.5656C34.5863 28.0401 35.9496 27.0882 36.9748 25.8202C38 24.5521 38.6453 23.0197 38.8358 21.4002C39.0264 19.7807 38.7546 18.1404 38.0517 16.669C37.3489 15.1976 36.2438 13.9552 34.8643 13.0857C33.4848 12.2162 31.8874 11.755 30.2567 11.7555C29.8288 11.7555 29.4181 11.8208 29.0094 11.8803C29.1418 11.4351 29.278 10.9822 29.4968 10.5754C29.7155 9.98433 30.0571 9.47196 30.3968 8.95576C30.6808 8.39733 31.1816 8.01929 31.5501 7.54147C31.9358 7.07708 32.4616 6.76812 32.878 6.38241C33.2868 5.97942 33.8222 5.77792 34.2482 5.49391C34.6934 5.23869 35.081 4.9566 35.4955 4.82227L36.5298 4.39626C37.1075 4.16023 37.4375 4.02206 37.4375 4.02206L36.5087 0.301155L35.3631 0.577486C34.9966 0.669598 34.5495 0.777064 34.0409 0.905636C33.5209 1.00159 32.9663 1.26448 32.3484 1.50436C31.7401 1.77877 31.032 1.96107 30.3757 2.40052C29.7155 2.81886 28.9537 3.16811 28.2821 3.72845C27.6315 4.30607 26.8467 4.80692 26.2671 5.53997C25.6339 6.22697 25.0083 6.9485 24.5228 7.76983C23.9605 8.55277 23.5787 9.41247 23.1757 10.2626C22.8111 11.1127 22.5175 11.982 22.2776 12.8263C21.8228 14.5189 21.6194 16.127 21.5407 17.5029C21.4754 18.8807 21.5138 20.0263 21.5944 20.8553C21.6231 21.2002 21.664 21.5439 21.7172 21.8858Z"
        fill="#0E2B5C"
      />
    </svg>
  )
}
