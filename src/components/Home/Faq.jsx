import style from "./Faq.module.css";
import { Icon } from "@iconify/react";

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
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Quais tipos
                        de eletroeletrônicos
                        a EcoSempre coleta?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como faço para 
                        descartar corretamente
                        esses materiais?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como contatar a 
                        EcoSempre para destinar 
                        adequadamente  eletroeletrônicos
                        da minha empresa?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
            </ul>
            <ul className={ style.duvidas2 }>
                <li>
                    <a href="#">
                        O que é Logística
                        Reversa?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Quais são os benefícios
                        da Logística Reversa?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como faço para trabalhar
                        em parceria com a EcoSempre?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Instituições interessadas
                        em campanha de descarte
                        adequado de eletrônicos.
                        Podemos contar com o
                        apoio da EcoSempre?
                        <Icon icon="ic:round-plus" />
                    </a>
                </li>
            </ul>
        </section>
    )
}