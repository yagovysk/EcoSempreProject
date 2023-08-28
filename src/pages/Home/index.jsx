import { useBreakpoint } from '../../hooks/useBreakpoint'

import { ScrollReveal } from '../../components/ScrollReveal'
import { ParceirosCard } from '../../components/ParceirosCard'
import { Faq } from '../../components/Faq'

import { Intro } from './components/Intro'
import { Sobre } from './components/Sobre'
import { Sustentabilidade } from './components/Sustentabilidade'
import { Saiba } from './components/Saiba'
import { Coletas } from '../../components/Coletas'
import { Testimonials } from './components/Testimonials'
import { TalkWithUs } from './components/TalkWithUs'
import { Blog } from './components/Blog'

import { coletasImg, logisticaReversaCycle } from '../../assets/imgs/home'
import { recycleIcon } from '../../assets/icons'

import styles from './Home.module.css'

export function Home() {
  const windowWidth = useBreakpoint()
  return (
    <main className={styles.main_content}>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />

      <article className={styles.idlogisticard}>
        <section className={`container`}>
          <ScrollReveal origin="bottom">
            <div className={styles.texts_logistica}>
              <span className={`small-text`}>Logística Reversa</span>
              <h2 className={`title ${styles.title_logistica}`}>
                Entenda o Ciclo da Logística Reversa
              </h2>
            </div>

            <div className={`${styles.logistic_card_wrapper}`}>
              <img
                loading="lazy"
                src={logisticaReversaCycle}
                alt="Card sobre logistica reversa"
              />
            </div>
          </ScrollReveal>
        </section>
      </article>

      <Coletas
        subtitle="Pontos de Coleta de Lixo Eletrônico"
        title="Encontre o Ponto de Coleta EcoSempre mais Próximo de Você!"
        linkText="Ver Pontos de Coleta"
        imgCallbackComponent={ImgColetas}
      />

      <article id="parceiros" className={styles.idParceiros}>
        <section className={`${styles.content_parceiros}`}>
          <div className={styles.texts_parceiros}>
            <ScrollReveal origin="bottom">
              <span className={`small-text`}>Nossos Parceiros</span>
              <h2 className={`title`}>Conheça Quem Confia na EcoSempre</h2>
            </ScrollReveal>
          </div>

          <div className={styles.wrapper_parceiros_card}>
            <ScrollReveal origin="top">
              <ParceirosCard />
            </ScrollReveal>
          </div>
        </section>
      </article>

      <Testimonials />
      <Faq numberPerList={3} isFAQPage={false} />

      {windowWidth > 500 && <TalkWithUs />}

      <Blog isMobile={windowWidth < 500} />
    </main>
  )
}

function ImgColetas() {
  return (
    <div className={`${styles.containerImgColetas}`}>
      <ScrollReveal origin="right">
        <div className={styles.wrapperImgColetas}>
          <img
            loading="lazy"
            className={styles.recycleIcon}
            src={recycleIcon}
            alt="Ícone de reciclagem"
            aria-hidden={true}
          />
          <p className={styles.imgTextColetas}>
            Faça já sua Parte e Colabore Conosco
          </p>
        </div>

        <div className={`${styles.wrapper_main_img_coletas} img_loading`}>
          <img
            loading="lazy"
            className={styles.coletaimg}
            src={coletasImg}
            alt="Imagem dos equipamentos coletados"
          />
        </div>
        <div aria-hidden={true} className={styles.behind}></div>
      </ScrollReveal>
    </div>
  )
}
