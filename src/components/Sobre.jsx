import styles from './Sobre.module.css';
import sobreimg from '../assets/sobreimg.png';
import checkicon from '../assets/checkicon.png';

export function Sobre() {
    return(
        <div className={styles.sobre}>
            <img className={ styles.sobreimg } src={sobreimg} alt="imagem ilustrativa" />
            <nav className={ styles.card }> 
            </nav>
            <article className={styles.text}>
                <h1> 
                    Nossa História 
                    e Compromisso 
                    Sustentável 
                </h1>
                <h2> 
                    Somos Pioneiros em Sustentabilidade 
                    e Logística Reversa de Eletrônicos! 
                </h2>
                <p className={styles.paragraph1}> 
                    Trabalhamos incansavelmente para desenvolver 
                    soluções inovadoras em Logística Reversa e
                    ajudar a transformar a maneira como as empresas 
                    lidam com seus resíduos.
                </p>
            </article>
            <nav className={styles.paragraph2}>
                <p>
                    Como podemos proteger nosso
                    meio ambiente e também implementarmos
                    uma Logística Reversa eficiente?
                </p>
                <ul className={styles.culturalist}>
                    <li>
                        <img className={ styles.culturalistimg } src={ checkicon } alt="checkicon" />
                         Cultura Regenerativa Positiva
                    </li>
                    <li>
                        <img className={ styles.culturalistimg } src={ checkicon } alt="checkicon" />
                        Descarte Correto de Resíduos
                    </li>
                    <li>
                        <img className={ styles.culturalistimg } src={ checkicon } alt="checkicon" />
                        Consciência Ambiental
                    </li>
                </ul>
            </nav>
            <nav className={styles.paragraph3}>
                <p>
                    Nossa visão é criar um
                    futuro mais sustentável
                    e tecnologicamente responsável,
                    e isso significa ir além da
                    reciclagem convencional.
                    Estamos comprometidos em encontrar
                    as melhores práticas e contribuir
                    para um mundo mais sustentável
                    e equilibrado.
                </p>
            </nav>
            <nav className={styles.button}>
                <a href="#">
                    Conheça Nossa História
                    <span>
                         🡢 
                    </span>
                </a>
            </nav>
        </div>
    )
}