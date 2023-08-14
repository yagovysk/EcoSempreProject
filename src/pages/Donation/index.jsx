import * as DescriptionPage from '../../components/DescriptionPage'

import { Icon } from '@iconify/react'
import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'

import {
  firstHalfDonationPeople,
  secondHalfDonationPeople,
} from '../../assets/imgs/donation'

import styles from './Donation.module.css'
import { DonationMethods } from './components/DonationMethods'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'EcoSempre',
    path: '/doar',
  },
  {
    name: 'Doação',
  },
]

export const Donation = () => {
  return (
    <main className={styles.main_container}>
      <HeaderSection
        title="Doação"
        linksMenu={linksMenu}
        className={styles.header}
      />

      <DescriptionPage.Root className="container relative lg:gap-y-44 !mb-12 md:!mb-28">
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

        <DescriptionPage.ImageContainer className="self-center xl:self-end mt-5 lg:mt-0">
          <ScrollReveal origin="right" className="flex gap-7">
            <div className="rounded -translate-y-5 overflow-hidden relative self-end h-full w-full">
              <img
                src={firstHalfDonationPeople}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>

            <div className="rounded relative overflow-hidden self-start w-full h-full">
              <img
                src={secondHalfDonationPeople}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className={styles.donation_wrapper}>
                <Icon icon="bxs:donate-heart" aria-hidden={true} />
                <p className={styles.donation_paragraph}>
                  Ajude a construir uma sociedade mais sustentável
                </p>
              </div>
            </div>
          </ScrollReveal>
        </DescriptionPage.ImageContainer>
      </DescriptionPage.Root>

      <DonationMethods />
    </main>
  )
}
