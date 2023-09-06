import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'

import { ButtonToTop } from '../ButtonToTop'
import { Newsletter } from './components/Newsletter'
import { ScheduleCard } from './components/ScheduleCard'

import { ecoIcon } from '../../assets/icons'

import styles from './Footer.module.css'

export function Footer() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY * 2 >= document.body.offsetHeight / 2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <footer className={styles.wrapper}>
      <div className={styles.wrapper_main_content}>
        <div className={`${styles.container_main_content} container`}>
          <article className={styles.main_content}>
            <section className={styles.intro}>
              <Logo />
              <p className={styles.paragraph}>
                Compromisso com a sustentabilidade e a Logística Reversa.
                Juntos, transformamos o descarte correto de eletroeletrônicos em
                ações que beneficiam o meio ambiente e a sociedade.
              </p>

              <Link to="/contato" className={styles.talk_with_us}>
                <Icon
                  icon="material-symbols:arrow-circle-right-rounded"
                  className={styles.arrow_circle_icon}
                  alt="Seta preenchida com um círculo"
                />
                <span className={styles.text_talk_with_us}>Fale Conosco</span>
              </Link>
            </section>

            <section className={styles.contact}>
              <div className={styles.subtitle}>Nosso Contato</div>
              <address className={styles.address_content}>
                <p className={styles.paragraph}>
                  Possui alguma dúvida ou precisa de ajuda, entre em contato com
                  a nossa equipe.
                </p>
                <div className={styles.tel_address}>
                  <Icon
                    icon="ant-design:phone-filled"
                    className={styles.tel_img}
                  />
                  <a className={styles.tel} href="tel:+(61) 98378-1438">
                    (61) 98378-1438
                  </a>
                </div>
                <p
                  aria-label="Endereço da EcoSempre"
                  className={styles.paragraph}
                >
                  71939-540, Alfa Mix Loja 11 e 12, Águas Claras, Brasília - DF.
                </p>
              </address>
            </section>

            <section className={styles.company}>
              <div className={styles.subtitle}>Empresa</div>
              <ul className={styles.list_links_company}>
                <li>
                  <Link to="/sobre">Quem Somos</Link>
                </li>
                <li>
                  <Link to="/coletas">Pontos de Coleta</Link>
                </li>
                <li>
                  <Link to="/blog">Nosso Blog</Link>
                </li>
                <li>
                  <Link to="/contato">Fale Conosco</Link>
                </li>
                <li>
                  <Link to="/parceiros">Parceiros</Link>
                </li>
              </ul>
            </section>
          </article>

          <Newsletter />
        </div>
      </div>

      <div className={styles.wrapper_second_content}>
        <ScheduleCard />
        <div className={styles.second_content}>
          <div className={styles.copyright}>
            @2023 EcoSempre. Todos Direitos Reservados. Love by{' '}
            <a
              target="_blank"
              className={styles.copyright_author}
              href="https://togyrogroupvictory.com/"
              rel="noreferrer"
            >
              Togyro Group Victory
            </a>
          </div>
        </div>

        {showButton && <ButtonToTop />}
      </div>
    </footer>
  )
}

function Logo() {
  return (
    <div className={styles.logo}>
      <img loading="lazy" src={ecoIcon} alt="" aria-hidden={true} />
      <div className={styles.logo_title}>
        EcoSempre
        <span className={styles.logo_subtitle}>Logística Reversa</span>
      </div>
    </div>
  )
}
