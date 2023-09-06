import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

import styles from './styles.module.css'

export function ScheduleCard() {
  return (
    <div className={styles.schedule_card}>
      <div className={styles.box_schedule}>
        <Icon icon="ant-design:phone-filled" className={styles.tel_img} />
        <address className={styles.address}>
          Telefone: <strong>(61) 98378-1438</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="material-symbols:mail-rounded" />
        <address className={styles.address}>
          Email: <strong>ecosempre@gmail.com</strong>
        </address>
      </div>
      <div className={styles.box_schedule}>
        <Icon icon="mdi:clock-time-four" />
        <div className={styles.address}>
          Horário de Atendimento: <strong>Seg-Sex: 8h às 18h</strong>
        </div>
      </div>
      <div className={styles.box_schedule}>
        <Link
          role="button"
          className={`${styles.btn_schedule} btn btn-link`}
          to="/agendar"
        >
          Agende uma Coleta
        </Link>
      </div>
    </div>
  )
}
