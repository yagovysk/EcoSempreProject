import { Icon } from "@iconify/react";
import styles from "./ContactCard.module.css";

export function ContactCard() {
  return (
    <div className={styles.content}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Nosso Contato</div>

        <address className={styles.address}>
          <Icon
            aria-hidden={true}
            icon="fluent:location-20-filled"
            alt="Ícone de localização"
          />
          <p className={styles.address_item}>
            Alfa Mix Loja 11e 12, Águas Claras, Brasília.
          </p>
          <Icon
            aria-hidden={true}
            icon="material-symbols:mail-rounded"
            alt="Ícone de e-mail"
          />
          <p className={styles.address_item}>Email: ecosempre@gmail.com</p>
          <Icon
            aria-hidden={true}
            icon="mingcute:phone-fill"
            alt="Ícone de telefone"
          />
          <p className={styles.address_item}>(61) 98378-1438</p>
        </address>
      </section>

      <section className={styles.wrapper}>
        <div className={styles.title}>Horário de Atendimento</div>
        <p className={styles.opening_hours}>
          <span className={styles.address_item}>Segunda - Sexta:</span>
          <span className={styles.address_item}>8h às 18h</span>
        </p>
      </section>
    </div>
  );
}
