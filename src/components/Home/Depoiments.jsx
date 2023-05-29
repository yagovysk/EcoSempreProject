import style from "./Depoiments.module.css";
import { FeedbackCard } from "./FeedbackCard";
import person from "../../assets/personImg.jpg";

export function Depoiments() {
  return (
    <article className={`${style.idDepoiments}`}>
      <section className={`${style.content}`}>
        <div className={`textsContainer`}>
          <span className={`small-text`}>Experiências Inspiradoras</span>
          <div className={`texts`}>
            <h2 className={`${style.titleFeedback}`}>
              Depoimentos Daqueles que já Passaram na EcoSempre
            </h2>
            <p className={style.paragraph}>
              Descubra como a experiência de utilizar nossos serviços e soluções
              de logística reversa fez a diferença em suas vidas e no cuidado
              com o meio ambiente. Acompanhe depoimentos inspiradores de quem se
              tornou parte desse movimento por um futuro mais sustentável.
            </p>
            <button type="button" className={`btn ${style.btnFeedback}`}>
              <a className="btn-link" href="#">
                Sobre Nós
                <span>🡢</span>
              </a>
            </button>
          </div>
        </div>

        <div className={style.carrousel}>
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
        </div>
      </section>
    </article>
  );
}
