import { FormTalkWithUs } from '../../../../components/FormTalkWithUs'
import { ScrollReveal } from '../../../../components/ScrollReveal'

import styles from './TalkWithUs.module.css'

export function TalkWithUs() {
  return (
    <div className={styles.idfaleconosco}>
      <div
        className={`container flex flex-col-reverse min-[1101px]:grid min-[1101px]:grid-cols-talk-with-us ${styles.wrapper_content}`}
      >
        <ScrollReveal origin="top">
          <div className={`${styles.wrapper_form}`}>
            <FormTalkWithUs />
          </div>
        </ScrollReveal>

        <div className={`textsContainer ${styles.texts_callWithUs}`}>
          <ScrollReveal origin="top">
            <span className="small-text">Atendimento Personalizado</span>
            <div className="texts">
              <h2 className={`${styles.title} title`}>
                Nós da EcoSempre Estaremos Felizes em Atender Você!
              </h2>
              <p className={styles.description}>
                Queremos proporcionar a melhor experiência possível. Preencha o
                formulário ao lado com suas dúvidas,informações, solicitações ou
                feedback. Estamos prontos para ajudar e oferecer soluções
                personalizadas. Sua satisfação é nossa prioridade e estamos
                ansiosos para atender você!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
