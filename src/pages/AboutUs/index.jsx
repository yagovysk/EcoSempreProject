import { ContactCard } from '../../components/ContactCard'
import { ParceirosCard } from '../../components/ParceirosCard'
import { HeaderSection } from '../../components/HeaderSection'
import { Map } from '../../components/Map'
import { Information } from './components/Information'

import { ScrollReveal } from '../../components/ScrollReveal'

import styles from './AboutUs.module.css'

export function AboutUs() {
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

  return (
    <main className={styles.main_container}>
      <HeaderSection
        className={styles.header}
        title="Sobre Nós"
        linksMenu={linksMenu}
      />
      <Information />

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
