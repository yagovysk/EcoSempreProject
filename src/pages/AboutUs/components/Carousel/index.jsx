import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation } from 'swiper'
import { useIncreaseNumber } from '../../../../hooks/useIncreaseNumber'
import { ScrollReveal } from '../../../../components/ScrollReveal'

import { peopleWithNotebook } from '../../../../assets/imgs/aboutUs'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './AboutUsSlider.css'

import styles from './styles.module.css'

export function Carousel() {
  const experienceNumber = useIncreaseNumber(10, 100, 1)
  const settingsSlide = {
    speed: 700,
    navigation: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    modules: [Autoplay, Navigation, A11y],
  }

  return (
    <div className={styles.carousel_wrapper}>
      <ScrollReveal origin="right">
        <Swiper {...settingsSlide}>
          <SwiperSlide>
            <div className={styles.wrapper_img}>
              <img src={peopleWithNotebook} alt="Construtor com um notebook" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.wrapper_img}>
              <img src={peopleWithNotebook} alt="Construtor com um notebook" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.wrapper_img}>
              <img src={peopleWithNotebook} alt="Construtor com um notebook" />
            </div>
          </SwiperSlide>
        </Swiper>
      </ScrollReveal>

      <ScrollReveal origin="right">
        <div className={styles.experiences_wrapper}>
          <strong className={styles.experience_number}>
            +{experienceNumber}
          </strong>
          <span className={styles.legend_experience_number}>
            Anos de Experiência
          </span>
        </div>
      </ScrollReveal>
    </div>
  )
}
