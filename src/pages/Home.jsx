import { Intro } from "../components/Intro.jsx";
import { Sobre } from "../components/Sobre.jsx";
import { Sustentabilidade } from "../components/Sustentabilidade.jsx";
import { Saiba } from "../components/Saiba.jsx";
import { Coletas } from "../components/Coletas.jsx";
import { Parceiros } from "../components/Parceiros.jsx";

export function Home() {
  return (
    <div>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
      <Coletas />
      <Parceiros />
    </div>
  );
}
