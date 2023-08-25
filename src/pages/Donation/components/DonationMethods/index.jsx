import * as Dialog from '@radix-ui/react-dialog'
import { Icon } from '@iconify/react'
import { ScrollReveal } from '../../../../components/ScrollReveal'
import { PixModal } from '../PixModal'

import { logoVakinha } from '../../../../assets/icons'

import styles from './styles.module.css'

const vakinhaLink =
  'https://www.vakinha.com.br/vaquinha/eco-sempre-logistica-reversa?utm_campaign=criadores&utm_medium=validade7dias&utm_source=brevo'

export function DonationMethods() {
  return (
    <article className={`${styles.wrapper_donation_content}`}>
      <section className={`container ${styles.donation_content}`}>
        <ScrollReveal origin="bottom">
          <div className={`${styles.wrapper_text_donation}`}>
            <span className="small-text">Faça uma Doação</span>
            <h3 className="title">Conheça Nossas Formas de Doação</h3>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal origin="bottom" className={`${styles.wrapper_cards}`}>
        <div className={`${styles.wrapper_card_donation}`}>
          <div className={`${styles.wrapper_icon_donation} ${styles.pix}`}>
            <Icon
              className={`${styles.icon}`}
              aria-hidden={true}
              icon="ic:baseline-pix"
            />
          </div>

          <span className={`${styles.title_donation}`}>Chave Pix</span>
          <p className={`${styles.description_donation}`}>
            Faça sua doação através de uma chave pix
          </p>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-haspopup="dialog"
                className={`btn ${styles.btn_donation}`}
              >
                Fazer Doação
              </button>
            </Dialog.Trigger>

            <PixModal />
          </Dialog.Root>
        </div>

        <div className={`${styles.wrapper_card_donation}`}>
          <div className={`${styles.wrapper_icon_donation} ${styles.vakinha}`}>
            <img
              className={`${styles.icon}`}
              src={logoVakinha}
              alt=""
              loading="lazy"
              aria-hidden={true}
            />
          </div>

          <span className={`${styles.title_donation}`}>Vakinha</span>
          <p className={`${styles.description_donation}`}>
            Doe de forma segura pela Vakinha e faça parte dessa causa!
          </p>
          <a
            href={vakinhaLink}
            target="_blank"
            className={`btn ${styles.btn_donation}`}
            rel="noreferrer"
          >
            Fazer Doação
          </a>
        </div>
      </ScrollReveal>
    </article>
  )
}
