import { Intro } from "../components/Intro.jsx";
import { Sobre } from "../components/Sobre.jsx";
import { Sustentabilidade } from "../components/Sustentabilidade.jsx";
import { Saiba } from "../components/Saiba.jsx";

export function Home() {
  return (
    <div>
      <Intro />
      <Sobre />
      <Sustentabilidade />
      <Saiba />
    </div>
  );
}
