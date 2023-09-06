import { partners } from '../../assets/imgs/partners'

import styles from './ParceirosCard.module.css'

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
