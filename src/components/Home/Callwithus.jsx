import styles from "../Home/Callwithus.module.css";
import { FormTalkWithUs } from "../FormTalkWithUs";

export function Callwithus() {
  return (
    <div className={styles.idfaleconosco}>
      <div className={`container ${styles.wrapper_content}`}>
        <div className={styles.wrapper_form}>
          <FormTalkWithUs />
        </div>

        <div className="textsContainer">
          <span className="small-text">Atendimento Personalizado</span>
          <div className="texts">
            <h2 className={styles.title}>
              Nós da EcoSempre Estaremos Felizes em Atender Você!
            </h2>
            <p className={styles.description}>
              Queremos proporcionar a melhor experiência possível. Preencha o
              formulário ao lado com suas dúvidas,informações, solicitações ou
              feedback. Estamos prontos para ajudar e oferecer soluções
              personalizadas. Sua satisfação é nossa prioridade e estamos
              ansiosos para atender você!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
