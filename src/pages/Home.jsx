import { Intro } from "../components/Home/Intro.jsx";
import { Sobre } from "../components/Home/Sobre.jsx";
import { Sustentabilidade } from "../components/Home/Sustentabilidade.jsx";
import { Saiba } from "../components/Home/Saiba.jsx";
import { Coletas } from "../components/Home/Coletas.jsx";
import { Parceiros } from "../components/Home/Parceiros.jsx";
import { Depoiments } from "../components/Home/Depoiments.jsx";
import { Logistica } from "../components/Home/Logistica.jsx";
import { Faq } from "../components/Home/Faq.jsx";
import { Callwithus } from "../components/Home/Callwithus.jsx";
import { Blog } from "../components/Home/Blog.jsx";

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
      <Faq />
      <Callwithus />
      <Blog />
    </main>
  );
}
