import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import { ScrollReveal } from '../../../../components/ScrollReveal'
import { useIncreaseNumber } from '../../../../hooks/useIncreaseNumber'

import { peopleBuilding } from '../../../../assets/imgs/home'
import { plantIcon } from '../../../../assets/icons'

import styles from './Sobre.module.css'

export function Sobre() {
  // 778 = discarded E-Waste number
  // 10 = duration of number update per ms
  // 2 = amount that will increase per ms
  const numberGarbage = useIncreaseNumber(778, 10, 2)

  return (
    <div className="container">
      <div className={styles.sobre}>
        <div className={styles.containerImg}>
          <ScrollReveal origin="left">
            <picture className={`${styles.wrapper_sobre_img} img_loading`}>
              <img
                className={styles.sobreImg}
                src={peopleBuilding}
                alt="Trabalhadores comemorando"
              />
            </picture>
          </ScrollReveal>

          <ScrollReveal origin="left" style={{ position: 'absolute', top: 0 }}>
            <div className={styles['number-garbage-wrapper']}>
              <img src={plantIcon} alt="Ícone de Planta" aria-hidden={true} />
              <strong className={styles.numbers}>+ {numberGarbage} KG</strong>
              <span className={styles.residuos}>
                Resíduos Eletrônicos Descartados
              </span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal origin="right">
          <article className={styles.wrapper_texts}>
            <span className={`${styles.subtitle}`}>
              Nossa História e Compromisso Sustentável
            </span>
            <h2 className={`title ${styles.titleSobre}`}>
              Somos referência em Sustentabilidade e Logística Reversa de
              Eletrônicos!
            </h2>
            <section className={styles.texts_sobre}>
              <p className={`${styles.paragraphSobre} ${styles.p1}`}>
                Trabalhamos incansavelmente para desenvolver soluções inovadoras
                em Logística Reversa e ajudar a transformar a maneira como as
                empresas lidam com seus resíduos.
              </p>

              <p className={`${styles.paragraphSobre} ${styles.p2}`}>
                Nossa visão é criar um futuro mais sustentável e
                tecnologicamente responsável, e isso significa ir além da
                reciclagem convencional. Estamos comprometidos em encontrar as
                melhores práticas e contribuir para um mundo mais sustentável e
                equilibrado.
              </p>

              <p className={`${styles.paragraphSobre} ${styles.p3}`}>
                Como podemos proteger nosso meio ambiente e também
                implementarmos uma Logística Reversa eficiente?
              </p>

              <ul className={styles.culturaList}>
                <li>
                  <Icon
                    icon="material-symbols:check-circle"
                    className={styles.culturaListImg}
                  />
                  Cultura Regenerativa Positiva
                </li>
                <li>
                  <Icon
                    icon="material-symbols:check-circle"
                    className={styles.culturaListImg}
                  />
                  Descarte Correto de Resíduos
                </li>
                <li>
                  <Icon
                    icon="material-symbols:check-circle"
                    className={styles.culturaListImg}
                  />
                  Consciência Ambiental
                </li>
              </ul>
            </section>

            <Link
              role="button"
              className={`${styles.btnSobre} btn`}
              to="/sobre"
            >
              Conheça Nossa História
              <span>🡢</span>
            </Link>
          </article>
        </ScrollReveal>
      </div>
    </div>
  )
}
