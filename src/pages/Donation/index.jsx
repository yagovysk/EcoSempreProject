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
            <DescriptionPage.Subtitle subtitle="Colabore Conosco" />
            <DescriptionPage.Title
              className="mt-2"
              title="Faça uma Doação e Ajude Nosso Projeto"
            />
          </ScrollReveal>

          <ScrollReveal origin="left">
            <div className="flex flex-col gap-6">
              <DescriptionPage.Paragraph className="mt-5 lg:mt-10">
                Na EcoSempre, acreditamos que a doação é uma forma poderosa de
                promover a mudança. Ao fazer uma doação, você está nos ajudando
                a continuar oferecendo recursos educacionais, organizando
                eventos e expandindo nossa infraestrutura de coleta e
                reciclagem. Seu apoio direto é fundamental para que possamos
                continuar a inspirar e engajar a comunidade em práticas
                sustentáveis.
              </DescriptionPage.Paragraph>

              <DescriptionPage.Paragraph>
                Cada doação que recebemos tem um impacto significativo. Com seus
                recursos, podemos alcançar mais pessoas, educar sobre a
                importância da reciclagem do lixo eletrônico e incentivar
                práticas sustentáveis. Além disso, sua contribuição nos ajuda a
                investir em tecnologias avançadas de reciclagem e desenvolver
                parcerias estratégicas para fortalecer a logística reversa.
                Juntos, podemos criar um futuro mais limpo, saudável e
                sustentável para todos.
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
