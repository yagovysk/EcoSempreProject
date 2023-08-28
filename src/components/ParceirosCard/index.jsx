import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
} from '../../assets/imgs/partners'

import styles from './ParceirosCard.module.css'

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
]

export function ParceirosCard() {
  return (
    <div className={`${styles.parceirosCard} min-[1760px]:justify-center`}>
      {partners.map((partner) => (
        <a key={partner} href="#">
          <img
            loading="lazy"
            className={styles.parceiro}
            src={partner}
            alt=""
          />
        </a>
      ))}
    </div>
  )
}
