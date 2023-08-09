import { Icon } from '@iconify/react'

import { quotes } from '../../../../assets/icons'

import styles from './FeedbackCard.module.css'

export function FeedbackCard({ img, imgAlt, stars, name, job, feedback }) {
  const arrStars = Array.from(Array(stars).keys())
  return (
    <div className={styles.containerCard}>
      <div className={styles.card}>
        <div className={styles.profileImg}>
          <img loading="lazy" src={img} alt={'Foto da pessoa'} />
        </div>
        <div className={styles.information}>
          <div className={styles.starsWrapper}>
            {arrStars.map((star) => (
              <Icon
                key={star}
                icon="material-symbols:star-rounded"
                className={styles.starIcon}
              />
            ))}
          </div>
          <p className={styles.feedback}>{feedback}</p>
          <div className={styles.person}>
            <strong className={styles.name}>{name}</strong>
            <span className={styles.job}>{job}</span>
          </div>
        </div>

        <img
          loading="lazy"
          className={styles.quotes}
          src={quotes}
          alt=""
          aria-hidden={true}
        />
      </div>
    </div>
  )
}
