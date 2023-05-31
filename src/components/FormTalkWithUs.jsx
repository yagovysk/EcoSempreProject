import { z } from "zod";
import styles from "./FormTalkWithUs.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const talkWithUsFormSchema = z.object({
  name: z.string().nonempty("Mensagem de erro").toLowerCase().trim(),
  email: z.string().nonempty("Mensagem de erro").email("E-mail inválido"),
  phone: z.string(),
  subject: z.string().nonempty("Mensagem de erro"),
  message: z.string().nonempty("Mensagem de erro"),
});

export function FormTalkWithUs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(talkWithUsFormSchema),
  });

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

      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className={styles.form_content}
      >
        <div className={styles.form_inputs}>
          <div className={`${errors.name && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Nome"
              className={styles.input_name}
              {...register("name")}
              aria-label="Seu nome"
            />
            {errors.name && (
              <span className={styles.error_message}>
                {errors.name.message}
              </span>
            )}
          </div>

          <div className={`${errors.email && styles.error_wrapper_input}`}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input_email}
              {...register("email")}
              aria-label="Seu email"
            />
            {errors.email && (
              <span className={styles.error_message}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={`${errors.phone && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Telefone"
              className={styles.input_tel}
              {...register("phone")}
              aria-label="Seu telefone"
            />
            {errors.phone && (
              <span className={styles.error_message}>
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={`${errors.subject && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Assunto"
              className={styles.input_subject}
              {...register("subject")}
              aria-label="Assunto do email"
            />
            {errors.subject && (
              <span className={styles.error_message}>
                {errors.subject.message}
              </span>
            )}
          </div>

          <div
            className={`${styles.wrapper_input_textarea} ${
              errors.message && styles.error_wrapper_input
            }`}
          >
            <textarea
              className={styles.input_message}
              {...register("message")}
              aria-label="Mensagem do email"
              placeholder="Mensagem"
            ></textarea>
            {errors.message && (
              <span className={styles.error_message}>
                {errors.message.message}
              </span>
            )}
          </div>
        </div>

        <button className={`btn ${styles.btnForm}`} type="submit">
          <span className={styles.btn_text}>Enviar Mensagem</span>
        </button>
      </form>
    </div>
  );
}
