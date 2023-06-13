import { ContactCard } from "../../components/ContactCard";
import { FormTalkWithUs } from "../../components/FormTalkWithUs";
import { Map } from "../../components/Map";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <main className={styles.main_content}>
      <div className={styles.map_wrapper}>
        <Map />
      </div>

      <div className={`${styles.wrapper_content} container`}>
        <div className={styles.wrapper_form}>
          <FormTalkWithUs />
        </div>

        <ContactCard />
      </div>
    </main>
  );
}
