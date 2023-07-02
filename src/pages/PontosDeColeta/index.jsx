import { Icon } from "@iconify/react";
import { HeaderSection } from "../../components/HeaderSection";
import { Map } from "../../components/Map";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SelectField } from "../../components/SelectField";
import styles from "./PontosDeColeta.module.css";
import { ScrollReveal } from "../../components/ScrollReveal";

const queryCollectFormSchema = z.object({
  address: z.string().nonempty("Digite um endereço"),
  category: z.string().optional(),
});

const pontosColeta = [
  {
    id: 1,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 2,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 3,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 4,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 5,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 6,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 7,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 8,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
  {
    id: 9,
    title: "Ministério do Meio Ambiente",
    address:
      "Esplanada dos Ministérios Bloco B, Bloco B, 9. Zona Cívica Administrativa. Área Central de Brasília",
    cep: "70068-900",
    state: "Brasília - DF",
  },
];

const linksMenu = [
  {
    name: "Início",
    path: "/",
  },
  {
    name: "Pontos de Coleta",
  },
];

const categories = ["Óleo", "Tecnologia", "Resíduos "];

export function PontosDeColeta() {
  const [pontosColeta, setPontosColeta] = useState("");

  return (
    <main className={styles.main_content}>
      <HeaderSection
        title="Pontos De Coleta"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <div className={`container `}>
        <article className={`${styles.content_container}`}>
          <div className={`textsContainer ${styles.textsContainer}`}>
            <ScrollReveal origin="bottom">
              <span className={`small-text`}>Nossos Pontos</span>

              <section className={`texts`}>
                <h2 className={`title ${styles.title}`}>
                  Descubra o Ponto de Coleta Mais Próximo de Você!
                </h2>

                <p className={styles.paragraph}>
                  Digite o seu endereço e escolha a categoria no campo ao lado
                  para encontrar o Ponto de Coleta mais próximo de você.
                </p>
              </section>
            </ScrollReveal>
          </div>

          <QueryCollectForm setPontosColeta={setPontosColeta} />
        </article>

        <div className={styles.map_content_wrapper}>
          <div className={styles.map_wrapper}>
            <Map />
          </div>

          {pontosColeta && (
            <article className={styles.pontos_coleta_wrapper}>
              <h3 className={styles.title_pontos_coleta}>
                Pontos de Coleta Mais Próximos:
              </h3>
              <div className={styles.data_pontos_coleta}>
                {pontosColeta.map((ponto) => (
                  <address key={ponto.id} className={styles.ponto_coleta}>
                    <h4 className={styles.title_ponto_coleta}>{ponto.title}</h4>
                    <p className={styles.address}>
                      {ponto.address}. {ponto.complement && ponto.complement}
                      CEP: {ponto.cep}. {ponto.state}.
                    </p>
                  </address>
                ))}
              </div>
            </article>
          )}
        </div>
      </div>
    </main>
  );
}

function QueryCollectForm({ setPontosColeta }) {
  const initialValues = {
    address: "",
    category: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: zodResolver(queryCollectFormSchema),
    defaultValues: initialValues,
  });

  function queryPontosColeta(data) {
    setPontosColeta(pontosColeta);
    window.scrollBy(0, document.body.offsetHeight);
  }

  return (
    <ScrollReveal origin="top" style={{ flex: 1 }}>
      <div className={styles.wrapper_form}>
        <form
          onSubmit={handleSubmit(queryPontosColeta)}
          className={styles.form}
          method="post"
        >
          <div className={`${errors.address && styles.error_input}`}>
            <input
              type="text"
              className={`${styles.input} ${errors.address && "shake_input"}`}
              placeholder="Digite um endereço"
              {...register("address")}
            />
            {errors.address && (
              <span className={`error_message`}>{errors.address.message}</span>
            )}
          </div>

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <SelectField
                name="category"
                options={categories}
                label="Selecione uma categoria"
                field={field}
                setValue={setValue}
                error={errors.category}
              />
            )}
          />

          <div className={styles.location_input}>
            <Icon icon="icon-park-solid:local-two" />
            <span className={styles.title_location_input}>
              Minha Localização Atual
            </span>
          </div>

          <button type="submit" className={`btn ${styles.btn_collects}`}>
            Ver Todos os Pontos de Coleta
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}
