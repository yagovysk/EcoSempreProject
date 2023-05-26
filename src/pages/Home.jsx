import { Intro } from "../components/Intro.jsx";
import { Sobre } from "../components/Sobre.jsx";
import { Sustentabilidade } from "../components/Sustentabilidade.jsx";
import { Saiba } from "../components/Saiba.jsx";
import { Coletas } from "../components/Coletas.jsx";
import { Parceiros } from "../components/Parceiros.jsx";
import { Depoiments } from "../components/Depoiments.jsx";
import { Logistica } from "../components/Logistica.jsx";

export function Home() {
  return (
    <main>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
      <Logistica />
      <Coletas />
      <Parceiros />
      <Depoiments />
    </main>
  );
}
