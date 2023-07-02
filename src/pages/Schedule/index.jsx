import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeaderSection } from "../../components/HeaderSection";
import { SelectField } from "../../components/SelectField";
import { ScrollReveal } from "../../components/ScrollReveal";
import { Spinner } from "../../components/Loader/Spinner";
import { FormSubmitted } from "../../components/FormSubmitted";
import styles from "./Schedule.module.css";
import { scrollToTop } from "../../helpers";

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Programas",
    path: "/agendar",
  },
  {
    name: "Agende uma Coleta",
  },
];

const scheduleSchema = z.object({
  name: z
    .string()
    .nonempty("Obrigatório")
    .min(3, "Digite um nome válido")
    .trim(),
  email: z
    .string()
    .nonempty("Obrigatório")
    .email("Digite um e-mail válido")
    .trim(),
  phone: z
    .string()
    .nonempty("Obrigatório")
    .min(8, "Telefone inválido")
    .max(11, "Telefone inválido"),
  cep: z.coerce
    .number({
      invalid_type_error: "Deve conter apenas números",
    })
    .min(8, "CEP inválido"),
  state: z.string().nonempty("Obrigatório"),
  city: z.string().nonempty("Obrigatório"),
  materials: z.string().nonempty("Obrigatório").trim(),
});

const states = ["Acre", "Amapá", "Amazonas", "Bahia", "Ceará", "Paraíba"];
const cities = [
  "Águia Branca",
  "Atalaia",
  "Arapiraca",
  "Batalha",
  "Belém",
  "Campina Grande",
  "Arapiraca",
  "Batalha",
  "Belém",
  "Campina Grande",
];

export const Schedule = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    cep: "",
    state: "",
    city: "",
    materials: "",
  };
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialValues,
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
    scrollToTop();

    return (
      <article
        className={`container ${styles.container_schedule} ${styles.form_submitted}`}
      >
        <FormSubmitted
          title="Coleta agendada com sucesso!"
          description="Agradecemos o seu contato e retornaremos em breve."
          reset={reset}
        />
      </article>
    );
  }

  return (
    <main>
      <HeaderSection
        title="Agende uma Coleta"
        linksMenu={linksMenu}
        className={styles.header}
      />
      <article className={`container ${styles.container_schedule}`}>
        <section className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="bottom">
            <span className={`small-text`}>Coleta de Lixo Eletrônico</span>
          </ScrollReveal>

          <ScrollReveal origin="bottom">
            <section className={`texts`}>
              <h2 className={`title`}>Agende uma Coleta</h2>
              <p className={`${styles.paragraph}`}>
                Agende a retirada gratuita do seu lixo eletrônico. Seu
                computador ou notebook se tornará matéria-prima para a criação
                de novos produtos. Faça a diferença e agende sua coleta agora
                mesmo.
              </p>
            </section>
          </ScrollReveal>
        </section>

        <ScrollReveal origin="bottom">
          <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form}`}>
            <Field
              type="text"
              name="name"
              label="Nome/Empresa"
              placeholder="Digite seu nome completo ou o nome da sua empresa"
              register={register}
              errors={errors}
            />
            <Field
              type="text"
              name="email"
              label="E-mail"
              placeholder="Digite um endereço de email"
              register={register}
              errors={errors}
            />
            <Field
              type="text"
              name="phone"
              label="Telefone"
              placeholder="Digite um número de telefone"
              register={register}
              errors={errors}
            />
            <Field
              type="text"
              name="cep"
              label="CEP"
              placeholder="00000-000"
              register={register}
              errors={errors}
              ariaLabel="Exemplo de CEP: 00000-000"
            />
            <div
              className={`${styles.wrapper_field} ${
                errors.state && styles.error
              }`}
            >
              <label className={styles.label_input}>Estado</label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <SelectField
                    name="state"
                    options={states}
                    label="Selecione o estado"
                    field={field}
                    setValue={setValue}
                    error={errors.state}
                  />
                )}
              />
              {errors.state && (
                <span className={`error_message ${styles.error_message}`}>
                  {errors.state.message}
                </span>
              )}
            </div>

            <div
              className={`${styles.wrapper_field} ${
                errors.city && styles.error
              }`}
            >
              <label className={styles.label_input}>Cidade</label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <SelectField
                    name="city"
                    options={cities}
                    label="Selecione a cidade"
                    field={field}
                    setValue={setValue}
                    error={errors.city}
                  />
                )}
              />
              {errors.city && (
                <span className={`error_message ${styles.error_message}`}>
                  {errors.city.message}
                </span>
              )}
            </div>

            <div
              className={`${styles.wrapper_field} ${styles.wrapper_textarea} ${
                errors.materials && styles.error
              }`}
            >
              <label htmlFor="materials" className={`${styles.label_input}`}>
                Quantidade e materiais que deseja descartar
              </label>
              <textarea
                {...register("materials")}
                id="materials"
                placeholder="Seja específico, informe os materiais e sua quantidade exata"
                className={`${styles.input} ${styles.textarea} ${
                  errors.materials && "shake_input"
                }`}
              ></textarea>
              {errors.materials && (
                <span className={`error_message ${styles.error_message}`}>
                  {errors.materials.message}
                </span>
              )}
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`btn ${styles.btn} ${
                isSubmitting && styles.submitting
              }`}
            >
              {isSubmitting ? <Spinner /> : "Agendar Coleta"}
            </button>
          </form>
        </ScrollReveal>
      </article>
    </main>
  );
};

function Field({
  type,
  name,
  label,
  placeholder,
  ariaLabel,
  register,
  errors,
}) {
  return (
    <div
      className={`${styles.wrapper_field} ${styles[name]} ${
        errors[name] && styles.error
      }`}
    >
      <label htmlFor={name} className={`${styles.label_input}`}>
        {label}
      </label>

      <input
        type={type}
        id={name}
        className={`${styles.input} ${errors[name] && "shake_input"}`}
        {...register(name)}
        placeholder={placeholder}
        aria-label={!ariaLabel ? placeholder : ariaLabel}
      />

      {errors[name] && (
        <span className={`error_message ${styles.error_message}`}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
}
