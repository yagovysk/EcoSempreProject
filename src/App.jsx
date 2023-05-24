import { Header } from './components/Header.jsx';

import { Home } from './components/Home.jsx';

import { Sobre } from './components/Sobre.jsx';

import { Sustentabilidade } from './components/Sustentabilidade.jsx';

import { Saiba } from "./components/Saiba.jsx";

import logisticard from './assets/logisticard.png'

import style from './App.module.css';



export function App() {
  return (
    <div>
      <Header />
      <section className={ style.idhome }>
        <Home />
      </section> 
      <section className={ style.idsobre }>
        <Sobre />
      </section>
      <section className={ style.idsustentabilidade }>
        <Sustentabilidade />
      </section>
      <section className={style.idSaibaquais}>
        <Saiba />
      </section>
      <section className={style.idlogisticard}>
        <article>
          <h1>
          Logística Reversa
          </h1>
          <h2>
          Entenda o Ciclo da Logística Reversa
          </h2>
        </article>
        <img src={ logisticard } alt="card sobre logistica reversa" />
      </section>
    </div>
  )
}
