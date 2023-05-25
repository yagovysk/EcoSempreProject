import style from "../components/Depoiments.module.css";
import { FeedbackCard } from "./FeedbackCard";
import person from "../assets/personImg.jpg";

export function Depoiments() {
  return (
    <section className={style.idDepoiments}>
      <article>
        <h1>Experiências Inspiradoras</h1>
        <h2>Depoimentos Daqueles que já Passaram na EcoSempre</h2>
        <a href="#">
          Sobre Nós
          <span>🡢</span>
        </a>
      </article>
      <FeedbackCard
        name="Matheus de Souza"
        job="Designer"
        img={person}
        feedback={`EcoSempre, um projeto essencial para o nosso país, várias 
            empresas deveriam adotar práticas ecológicas como a 
            SempreTech. Muito importante cuidar do nosso meio ambiente 
            pois assim evitaremos mais desastres ambientais.`}
        stars={5}
      />
    </section>
  );
}
