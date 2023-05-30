import styles from "./FormTalkWithUs.module.css";

export function FormTalkWithUs() {
  return (
    <div className={styles.form_wrapper}>
      <div>
        <h1 className={styles.form_title}>Fale Conosco!</h1>
        <p className={styles.form_description}>
          Entre em contato conosco por meio do formulário abaixo. Estamos
          disponíveis para responder suas dúvidas, fornecer informações e
          receber suas sugestões.
        </p>
      </div>

      <form className={styles.form_content}>
        <div className={styles.form_inputs}>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            className={styles.input_name}
            aria-label="Seu nome"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={styles.input_email}
            aria-label="Seu email"
          />
          <input
            name="tel"
            type="tel"
            placeholder="Telefone"
            className={styles.input_tel}
            aria-label="Seu telefone"
          />
          <input
            name="subject"
            type="text"
            placeholder="Assunto"
            className={styles.input_subject}
            aria-label="Assunto do email"
          />
          <textarea
            name="message"
            className={styles.input_message}
            aria-label="Mensagem do email"
            placeholder="Mensagem"
          ></textarea>
        </div>

        <button className={`btn ${styles.btnForm}`} type="submit">
          <span className={styles.btn_text}>Enviar Mensagem</span>
        </button>
      </form>
    </div>
  );
}
