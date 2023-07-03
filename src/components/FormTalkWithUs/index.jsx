import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSubmitted } from "../FormSubmitted";
import { Spinner } from "../Loader/Spinner";
import api from "../../api/posts";
import styles from "./FormTalkWithUs.module.css";

const talkWithUsFormSchema = z.object({
  name: z
    .string()
    .nonempty("* O campo está vazio")
    .min(3, "* O campo não é válido")
    .toLowerCase()
    .trim(),
  email: z
    .string()
    .nonempty("* O campo está vazio")
    .email("* Esse e-mail não é válido")
    .trim(),
  phone: z
    .string()
    .nonempty("* O campo está vazio")
    .min(10, "* Digite um número de telefone válido")
    .trim(),
  subject: z
    .string()
    .nonempty("* O campo está vazio! Digite um assunto")
    .trim(),
  message: z
    .string()
    .nonempty("* O campo está vazio! Digite uma mensagem válida.")
    .trim(),
});

export function FormTalkWithUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    resolver: zodResolver(talkWithUsFormSchema),
  });
  const sleep = (ms) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  async function onSubmit(data) {
    try {
      await sleep(2000);
      await api.post("/contact", data);
    } catch (err) {
      console.log(err);
    }
  }

  if (isSubmitSuccessful) {
    return (
      <FormSubmitted
        title="Mensagem enviada com sucesso!"
        description="Agradecemos o seu contato e retornaremos em breve."
        reset={reset}
      />
    );
  }

  return (
    <div className={styles.form_wrapper}>
      <div>
        <div className={styles.form_title}>Fale Conosco!</div>
        <p className={styles.form_description}>
          Entre em contato conosco por meio do formulário abaixo. Estamos
          disponíveis para responder suas dúvidas, fornecer informações e
          receber suas sugestões.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_content}>
        <div className={styles.form_inputs}>
          <div className={`${errors.name && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Nome"
              className={`${styles.input_name} ${errors.name && "shake_input"}`}
              {...register("name")}
              aria-label="Seu nome"
              aria-describedby={errors.name && "name-error"}
            />
            {errors.name && (
              <span
                id={"name-error"}
                className={`error_message ${styles.error_message}`}
              >
                {errors.name.message}
              </span>
            )}
          </div>

          <div className={`${errors.email && styles.error_wrapper_input}`}>
            <input
              type="email"
              placeholder="Email"
              className={`${styles.input_email} ${
                errors.email && "shake_input"
              }`}
              {...register("email")}
              aria-label="Seu email"
              aria-describedby={errors.email && "email-error"}
            />
            {errors.email && (
              <span
                id={"email-error"}
                className={`error_message ${styles.error_message}`}
              >
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={`${errors.phone && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Telefone"
              className={`${styles.input_tel} ${errors.phone && "shake_input"}`}
              {...register("phone")}
              aria-label="Seu telefone"
              aria-describedby={errors.phone && "phone-error"}
            />
            {errors.phone && (
              <span
                id={"phone-error"}
                className={`error_message ${styles.error_message}`}
              >
                {errors.phone.message}
              </span>
            )}
          </div>

          <div className={`${errors.subject && styles.error_wrapper_input}`}>
            <input
              type="text"
              placeholder="Assunto"
              className={`${styles.input_subject} ${
                errors.subject && "shake_input"
              }`}
              {...register("subject")}
              aria-label="Assunto do email"
              aria-describedby={errors.subject && "subject-error"}
            />
            {errors.subject && (
              <span
                id={"subject-error"}
                className={`error_message ${styles.error_message}`}
              >
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
              className={`${styles.input_message} ${
                errors.message && "shake_input"
              }`}
              {...register("message")}
              aria-label="Mensagem do email"
              placeholder="Mensagem"
              aria-describedby={errors.message && "message-error"}
            ></textarea>
            {errors.message && (
              <span
                id={"message-error"}
                className={`error_message ${styles.error_message}`}
              >
                {errors.message.message}
              </span>
            )}
          </div>
        </div>

        <button
          className={`btn ${styles.btnForm} ${
            isSubmitting && styles.submitting
          }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Spinner />
          ) : (
            <span className={styles.btn_text}>Enviar Mensagem</span>
          )}
        </button>
      </form>
    </div>
  );
}
