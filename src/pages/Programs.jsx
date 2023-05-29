import { HeaderSection } from "../components/HeaderSection";
import styles from "./Programs.module.css";
import smartphone from "../assets/smartphone.svg";
import camera from "../assets/camera.svg";
import notebook from "../assets/computador.svg";
import impressora from "../assets/impressora.svg";

export function Programs() {
  const linksMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Programas",
      path: "/programs",
    },
    {
      name: "Lista de Materiais",
    },
  ];
  const listMaterials = [
    {
      icon: smartphone,
      name: "Smartphones",
    },
    {
      icon: notebook,
      name: "Notebooks",
    },
    {
      icon: impressora,
      name: "Impressoras",
    },
    {
      icon: camera,
      name: "Câmeras",
    },
    {
      icon: camera,
      name: "Câmeras",
    },
  ];

  return (
    <main className={styles.main_content}>
      <HeaderSection
        className={styles.header}
        linksMenu={linksMenu}
        title="Lista de Materiais "
      />
      <div className={`container ${styles.content}`}>
        <section className={`${styles.titles}`}>
          <span className="small-text">O Que Pode Ser Descartado?</span>
          <h2 className="title">
            Descubra Quais Materiais Aceitamos para Descarte!
          </h2>
        </section>
        <div className={styles.grid_materials}>
          {listMaterials.map((material) => (
            <Box key={material.name}>
              <img className={styles.material_icon} src={material.icon} />
              <span className={styles.material_name}>{material.name}</span>
            </Box>
          ))}
        </div>

        <a className={styles.link_complete_list} href="#">
          Clique aqui para acessar a lista completa {">>"}
        </a>
      </div>
    </main>
  );
}

function Box({ children }) {
  return <div className={styles.box_wrapper}>{children}</div>;
}
