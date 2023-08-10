import { HeaderSection } from '../../components/HeaderSection'
import { Faq } from '../../components/Faq'
import { firstListQuestions } from '../../utils/dataFAQ'
import styles from './FAQ.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'EcoSempre',
    path: '/faq',
  },
  {
    name: 'FAQ',
  },
]

export function FAQ() {
  return (
    <main>
      <HeaderSection
        title="FAQ"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <div className={styles.wrapper_faq}>
        <Faq
          isFAQPage={true}
          numberPerList={firstListQuestions.length}
          immediatelyStartReveal={true}
        />
      </div>
    </main>
  )
}
