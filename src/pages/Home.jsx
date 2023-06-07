import { Intro } from "../components/Home/Intro.jsx";
import { Sobre } from "../components/Home/Sobre.jsx";
import { Sustentabilidade } from "../components/Home/Sustentabilidade.jsx";
import { Saiba } from "../components/Home/Saiba.jsx";
import { Coletas } from "../components/Home/Coletas.jsx";
import { Parceiros } from "../components/Home/Parceiros.jsx";
import { Depoiments } from "../components/Home/Depoiments.jsx";
import { Logistica } from "../components/Home/Logistica.jsx";
import { Faq } from "../components/Faq.jsx";
import { Callwithus } from "../components/Home/Callwithus.jsx";
import { Blog } from "../components/Home/Blog.jsx";
import { BlogProvider } from "../context/BlogContext.jsx";

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
      <Faq numberPerList={3} isFAQPage={false} />
      <Callwithus />
      <BlogProvider endpoint="/articles?_page=1&_limit=3">
        <Blog />
      </BlogProvider>
    </main>
  );
}
