import { ScrollReveal } from '../../../../components/ScrollReveal'
import { Link } from 'react-router-dom'

import { sustentabilidadeImg } from '../../../../assets/imgs/home'

import styles from './Sustentabilidade.module.css'

export function Sustentabilidade() {
  return (
    <div className={styles.sustentabilidadeBox}>
      <ScrollReveal
        origin="left"
        className={styles.scroll_reveal_sustentabilidade}
      >
        <div className={`${styles.sustentabilidade_img_wrapper} img_loading`}>
          <img
            src={sustentabilidadeImg}
            className={styles.sustentabilidadeImg}
            alt="Homem segurando criança reciclando plástico"
          />
        </div>
      </ScrollReveal>

      <article
        className={`textsContainer ${styles.wrapper_texts_sustentabilidade}`}
      >
        <ScrollReveal origin="right">
          <span className={`small-text`}>Sustentabilidade</span>
          <section className={`texts`}>
            <h2 className={`title ${styles.porque}`}>
              Por que é tão Importante Realizar o Descarte Correto do Lixo
              Eletrônico?
            </h2>
            <p className={styles.sustentabilidadeP}>
              O lixo eletrônico é um dos maiores desafios ambientais da nossa
              era. Nós acreditamos que a conscientização é o primeiro passo para
              uma solução sustentável. Junte-se a nós nessa jornada e faça a sua
              parte para um mundo mais limpo e saudável.
            </p>
            <Link className={`btn ${styles.saibamais}`} to="/descarte">
              Saiba Mais
              <span>🡢</span>
            </Link>
          </section>
        </ScrollReveal>
      </article>
    </div>
  )
}
