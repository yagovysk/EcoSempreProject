import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
} from '../../assets/imgs/partners'

import styles from './ParceirosCard.module.css'

export function ParceirosCard() {
  return (
    <div className={styles.parceirosCard}>
      <a href="#">
        <img
          loading="lazy"
          className={styles.parceiro}
          src={partner1}
          alt="logo parceiro 1"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          className={styles.parceiro}
          src={partner2}
          alt="logo parceiro 2"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          className={styles.parceiro}
          src={partner3}
          alt="logo parceiro 3"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          className={styles.parceiro}
          src={partner4}
          alt="logo parceiro 4"
        />
      </a>
      <a href="#">
        <img
          loading="lazy"
          className={styles.parceiro}
          src={partner5}
          alt="logo parceiro 5"
        />
      </a>
    </div>
  )
}
