import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";
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
    return <FormSubmitted reset={reset} />;
  }

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

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form_content}>
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
              <span className={`error_message ${styles.error_message}`}>
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
              <span className={`error_message ${styles.error_message}`}>
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
              <span className={`error_message ${styles.error_message}`}>
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
              <span className={`error_message ${styles.error_message}`}>
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
              <span className={`error_message ${styles.error_message}`}>
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

function Spinner() {
  return <span className={`${styles.spinner} ${styles.btn_text}`}></span>;
}

function FormSubmitted({ reset }) {
  return (
    <div className={styles.form_submitted_wrapper}>
      <div className={styles.icon_submitted_wrapper}>
        <Icon
          className={styles.icon_submitted}
          icon="icon-park-solid:check-one"
        />
      </div>
      <h2 className={`title ${styles.title_submitted}`}>
        Mensagem enviada com sucesso!
      </h2>
      <p className={styles.paragraph_submitted}>
        Agradecemos o seu contato e retornaremos em breve.
      </p>
      <button
        type="button"
        onClick={reset}
        className={`btn btn-link ${styles.btn_submitted}`}
      >
        Concluído
      </button>
    </div>
  );
}
