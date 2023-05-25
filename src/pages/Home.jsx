import { Intro } from "../components/Intro.jsx";
import { Sobre } from "../components/Sobre.jsx";
import { Sustentabilidade } from "../components/Sustentabilidade.jsx";
import { Saiba } from "../components/Saiba.jsx";
import { Logistica } from "../components/Logistica.jsx";
import { Coletas } from "../components/Coletas.jsx";

export function Home() {
  return (
    <div>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
      <Logistica />
      <Coletas />
    </div>
  );
}
