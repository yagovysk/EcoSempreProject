import { ContactCard } from "../components/ContactCard";
import { FormTalkWithUs } from "../components/FormTalkWithUs";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <main className={styles.main_content}>
      <Map />

      <div className={`${styles.wrapper_content} container`}>
        <div className={styles.wrapper_form}>
          <FormTalkWithUs />
        </div>

        <ContactCard />
      </div>
    </main>
  );
}

function Map() {
  return (
    <div className={styles.map_wrapper}>
      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20345164.6274076!2d-39.14299119999995!3d51.50329730000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1spt-BR!2sbr!4v1685471411241!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
