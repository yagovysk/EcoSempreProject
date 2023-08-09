import { useRef, useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { HeaderSection } from '../../components/HeaderSection'
import { ScrollReveal } from '../../components/ScrollReveal'
import { keyboardTrap } from '../../utils/keyboardTrap'

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

      <article className={`${styles.wrapper_content} container`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="left" immediately={true}>
            <span className="small-text">Colabore Conosco</span>
          </ScrollReveal>

          <ScrollReveal origin="left" immediately={true}>
            <section className={`texts`}>
              <h2 className="title">Faça uma Doação e Ajude Nosso Projeto</h2>
              <div className={styles.paragraphs}>
                <p className={styles.paragraph}>
                  Na EcoSempre, acreditamos que a doação é uma forma poderosa de
                  promover a mudança. Ao fazer uma doação, você está nos
                  ajudando a continuar oferecendo recursos educacionais,
                  organizando eventos e expandindo nossa infraestrutura de
                  coleta e reciclagem. Seu apoio direto é fundamental para que
                  possamos continuar a inspirar e engajar a comunidade em
                  práticas sustentáveis.
                </p>
                <p className={styles.paragraph}>
                  Cada doação que recebemos tem um impacto significativo. Com
                  seus recursos, podemos alcançar mais pessoas, educar sobre a
                  importância da reciclagem do lixo eletrônico e incentivar
                  práticas sustentáveis. Além disso, sua contribuição nos ajuda
                  a investir em tecnologias avançadas de reciclagem e
                  desenvolver parcerias estratégicas para fortalecer a logística
                  reversa. Juntos, podemos criar um futuro mais limpo, saudável
                  e sustentável para todos.
                </p>
              </div>
            </section>
          </ScrollReveal>
        </section>

        <div className={styles.wrapper_imgs}>
          <ScrollReveal origin="right" immediately={true}>
            <div className={`${styles.wrapper_img}`}>
              <img
                className={styles.img_people}
                src={firstHalfDonationPeople}
                alt="Pessoas unidas cruzando as mãos"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal origin="right" immediately={true}>
            <div className={`${styles.wrapper_img} ${styles.wrapper_img2}`}>
              <img
                className={styles.img_people}
                src={secondHalfDonationPeople}
                alt="Pessoas unidas cruzando as mãos"
              />
              <div className={styles.donation_wrapper}>
                <Icon icon="bxs:donate-heart" aria-hidden={true} />
                <p className={styles.donation_paragraph}>
                  Ajude a construir uma sociedade mais sustentável
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <DonationMethods />
    </main>
  )
}

const ModalPix = (props) => {
  const focusableElements = useRef(null)

  useEffect(() => {
    const firstTabStop = focusableElements.current.get(0)
    const lastTabStop = focusableElements.current.get(
      focusableElements.current.size - 1
    )

    firstTabStop.focus()
    document.addEventListener('keydown', (e) => {
      keyboardTrap(e, props.onCloseModal, firstTabStop, lastTabStop)
    })

    return () =>
      document.removeEventListener('keydown', (e) => {
        keyboardTrap(e, props.onCloseModal, firstTabStop, lastTabStop)
      })
  }, [focusableElements])

  function getMap() {
    if (!focusableElements.current) {
      focusableElements.current = new Map()
    }
    return focusableElements.current
  }

  const getRef = (node, id) => {
    const map = getMap()
    if (node) {
      map.set(id, node)
    } else {
      map.delete(id)
    }
    return map
  }
}

const PixInformation = ({
  label,
  pix,
  refClipboard,
  positionTooltip,
  ...props
}) => {
  const [isTooltipOn, setIsTooltipOn] = useState(false)
  const [pixCopied, setPixCopied] = useState(false)
  const pixRef = useRef(null)

  const handleOpenTooltip = () => setIsTooltipOn(true)
  const handleCloseTooltip = () => setIsTooltipOn(false)

  const handleCopyToClipboard = (e) => {
    if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
      navigator.clipboard.writeText(pixRef.current.innerHTML)
      setPixCopied(true)
    }
  }

  return (
    <>
      <button
        type="button"
        className={styles.wrapper_pix_information}
        ref={(node) => refClipboard(node)}
        aria-label={
          !pixCopied
            ? 'Clique aqui para copiar a chave pix'
            : 'Chave pix copiada com sucesso'
        }
        onMouseEnter={handleOpenTooltip}
        onMouseLeave={handleCloseTooltip}
        onClick={handleCopyToClipboard}
        onKeyDown={handleCopyToClipboard}
      >
        <p>
          <span className={`${styles.pix_label}`}>{label}</span>{' '}
          <span ref={pixRef} {...props}>
            {pix}
          </span>
        </p>

        <Icon icon="lucide:copy" className={styles.icon_clipboard} />

        <div className={styles.wrapper_tooltips}>
          {isTooltipOn && (
            <Tooltip
              title={!pixCopied ? 'Copiar chave pix' : 'Chave pix copiada!'}
            />
          )}
        </div>
      </button>
    </>
  )
}
