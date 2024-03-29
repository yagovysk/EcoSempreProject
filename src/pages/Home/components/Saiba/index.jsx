import styles from './Saiba.module.css'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '../../../../components/ScrollReveal'

export function Saiba() {
  return (
    <div className={`${styles.box} container`}>
      <ScrollReveal origin="left">
        <article className={`textsContainer ${styles.textsContainer}`}>
          <span className={`${styles.smallText} small-text`}>
            O que pode ser descartado?
          </span>
          <section className={`texts`}>
            <h2 className={`title ${styles.title}`}>
              Saiba Quais são os Tipos de Lixo Eletrônico que Podem ser
              Coletados
            </h2>
            <p className={styles.paragraph}>
              Lembre-se de realizar o descarte correto para proteger o meio
              ambiente e evitar danos à saúde pública. Em nossos pontos de
              coleta, aceitamos diversos tipos de lixo eletrônico e
              eletroeletrônico, desde smartphones antigos, até pilhas, baterias
              e eletrodomésticos.
            </p>
            <Link
              role="button"
              className={`btn ${styles.saibabutton}`}
              to="/materiais"
            >
              Explore todos os itens
              <span>🡢</span>
            </Link>
          </section>
        </article>
      </ScrollReveal>

      <ScrollReveal origin="right">
        <article className={styles.dispositivos}>
          <Device
            title="Smartphones"
            icon="mdi:smartphone-wireless"
            description={`Atualize seus dispositivos eletrônicos e descarte os antigos com
            segurança e responsabilidade.`}
            classes={styles}
          />
          <Device
            title="Computadores"
            icon="mdi:computer"
            description={`Ao substituir seu equipamento antigo, você pode dar a ele uma
            segunda vida ao doar ou reciclar de maneira responsável.`}
            classes={styles}
          />

          <Device
            title="Impressoras"
            icon="mdi:printer"
            description={`Recicle com responsabilidade, garanta que materiais como cartuchos
            de tinta e toners sejam descartados corretamente.`}
            classes={styles}
          />

          <Device
            title="Câmeras"
            icon="material-symbols:linked-camera"
            description={`Recicle corretamente para evitar que ela se torne lixo eletrônico e
            contribuir para a preservação do meio ambiente.`}
            classes={styles}
          />
        </article>
      </ScrollReveal>
    </div>
  )
}

function Device({ classes, icon, title, description }) {
  return (
    <div className={classes.device}>
      <Icon icon={icon} />
      <div className={classes.title}>{title}</div>
      <p className={classes.description}>{description}</p>
    </div>
  )
}
