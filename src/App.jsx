import { Header } from "./components/Header.jsx";

import { Home } from "./components/Home.jsx";

import { Sobre } from "./components/Sobre.jsx";

import { Sustentabilidade } from "./components/Sustentabilidade.jsx";

import { Saiba } from "./components/Saiba.jsx";

import style from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <section className={style.idhome}>
        <Home />
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
