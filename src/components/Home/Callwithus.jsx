import styles from "../Home/Callwithus.module.css";

export function Callwithus() {
    return(
        <section className={ styles.idfaleconosco }>
            <nav className={styles.cardFale}>
                <article>
                    <h1>
                        Fale conosco!
                    </h1>
                    <p>
                        Entre em contato
                        conosco por meio
                        do formulário abaixo.
                        Estamos disponíveis 
                        para responder suas
                        dúvidas, fornecer 
                        informações e receber 
                        suas sugestões. 
                    </p>
                </article>
                <form className={ styles.FormCall }>
                    <ul className={ styles.FormList1 }>
                        <li>
                            <input type="text" placeholder="Nome" />
                        </li>
                        <li>
                            <input type="tel" placeholder="Telefone" />
                        </li>
                    </ul>
                    <ul className={ styles.FormList2 }>
                        <li>
                            <input type="text" placeholder="E-mail" />
                        </li>
                    </ul>
                </form>
            </nav>
        </section>
    )
}