import { Intro } from "../components/Intro.jsx";
import { Sobre } from "../components/Sobre.jsx";
import { Sustentabilidade } from "../components/Sustentabilidade.jsx";
import { Saiba } from "../components/Saiba.jsx";
import style from "./Home.module.css";

export function Home() {
  return (
    <div>
      <section className={style.idhome}>
        <Intro />
      </section>
      <section className={style.idsobre}>
        <Sobre />
      </section>
      <section className={style.idsustentabilidade}>
        <Sustentabilidade />
      </section>
      <section className={style.idSaibaquais}>
        <Saiba />
      </section>
    </div>
  );
}
