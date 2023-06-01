import { Icon } from "@iconify/react";
import { HeaderSection } from "../components/HeaderSection";
import { Map } from "../components/Map";
import styles from "./PontosDeColeta.module.css";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const queryCollectFormSchema = z.object({
  address: z.string().nonempty("Digite um endereço"),
  category: z.array(z.string()),
});

const linksMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Pontos de Coleta",
  },
];

export function PontosDeColeta() {
  return (
    <main className={styles.main_content}>
      <HeaderSection
        title="Pontos De Coleta"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <div className={`container `}>
        <article className={`${styles.content_container}`}>
          <div className={`textsContainer`}>
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
          </div>

          <QueryCollectForm />
        </article>

        <div className={styles.map_wrapper}>
          <Map />
        </div>
      </div>
    </main>
  );
}

function QueryCollectForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(queryCollectFormSchema),
  });

  function queryPontosColeta(data) {
    console.log(data);
  }

  return (
    <div className={styles.wrapper_form}>
      <form
        onSubmit={handleSubmit(queryPontosColeta)}
        className={styles.form}
        action=""
      >
        <div className={`${errors.address && styles.error_input}`}>
          <input
            type="text"
            className={`${styles.input}`}
            placeholder="Digite um endereço"
            {...register("address")}
          />
          {errors.address && (
            <span className={`error_message`}>{errors.address.message}</span>
          )}
        </div>

        <div className={`${styles.select_input} ${styles.input}`}>
          <span className={styles.title_select_input}>
            Selecione uma categoria
          </span>
          <Icon icon="iconamoon:arrow-down-2-bold" />
        </div>

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
  );
}
