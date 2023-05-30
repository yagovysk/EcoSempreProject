import style from "./Faq.module.css";
import mais from "../../assets/mais.svg";

export function Faq() {
    return(
        <section className={ style.idFaq }>
            <article>
                <h1>
                    Nosso FAQ
                </h1>
                <h2>
                    Confira 
                    as Dúvidas
                    Mais Frequentes
                </h2>
            </article>
            <ul className={style.duvidas1}>
                <li>
                    <a href="#">
                        Por que devo
                        reciclar eletroeletrônicos
                        de forma correta?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Quais tipos
                        de eletroeletrônicos
                        a EcoSempre coleta?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como faço para 
                        descartar corretamente
                        esses materiais?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como contatar a 
                        EcoSempre para destinar 
                        adequadamente  eletroeletrônicos
                        da minha empresa?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
            </ul>
            <ul className={ style.duvidas2 }>
                <li>
                    <a href="#">
                        O que é Logística
                        Reversa?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Quais são os benefícios
                        da Logística Reversa?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como faço para trabalhar
                        em parceria com a EcoSempre?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Instituições interessadas
                        em campanha de descarte
                        adequado de eletrônicos.
                        Podemos contar com o
                        apoio da EcoSempre?
                        <img src={ mais } alt="+ icon" />
                    </a>
                </li>
            </ul>
        </section>
    )
}