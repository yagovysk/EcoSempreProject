import mail from "../assets/mail.svg";
import { MapPin, Phone } from "@phosphor-icons/react";

import styles from "./ContactCard.module.css";

export function ContactCard() {
  return (
    <div className={styles.content}>
      <section className={styles.wrapper}>
        <h4 className={styles.title}>Nosso Contato</h4>

        <address className={styles.address}>
          <MapPin weight="fill" alt="Ícone de localização" />
          <p className={styles.address_item}>
            Alfa Mix Loja 11e 12, Águas Claras, Brasília.
          </p>
          <img src={mail} alt="Ícone de e-mail" />
          <p className={styles.address_item}>Email: ecosempre@gmail.com</p>
          <Phone weight="fill" alt="Ícone de telefone" />
          <p className={styles.address_item}>(61) 98378-1438</p>
        </address>
      </section>

      <section className={styles.wrapper}>
        <h4 className={styles.title}>Horário de Atendimento</h4>
        <p className={styles.opening_hours}>
          <span className={styles.address_item}>Segunda - Sexta:</span>
          <span className={styles.address_item}>8h às 18h</span>
        </p>
      </section>
    </div>
  );
}
