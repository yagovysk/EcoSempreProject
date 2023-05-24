import styles from './Sobre.module.css';
import sobreimg from '../assets/sobreimg.png';
import checkicon from '../assets/checkicon.png';
import plantaicon from '../assets/plantaicon.svg';
import linha from '../assets/linhaicon.svg';
import linhaB from '../assets/linhaB.svg';
import linhaC from '../assets/linhaC.svg';
import { useEffect, useRef, useState } from "react";

export function Sobre() {
    const [numberGarbage, setNumberGarbage] = useState(0);

    const increaseNumberInterval = useRef(null);
    useEffect(() => {
      increaseNumberInterval.current = setInterval(() => {
        if (numberGarbage < 778) {
          setNumberGarbage(numberGarbage + 2);
        } else {
          clearInterval(increaseNumberInterval.current);
        }
      }, 10);
  
      return () => clearInterval(increaseNumberInterval.current);
    });
    return(
        <div className={styles.sobre}>
            <img className={ styles.sobreimg } src={sobreimg} alt="imagem ilustrativa" />
            <nav className={ styles.card }>
                <img className={styles.iconplant} src={ plantaicon } alt="iconedeplanta" /> 
                <img className={ styles.linhameio } src={ linha } alt="linhaicon" />
                <img className={ styles.linha1 } src={ linha } alt="linhaicon" />
                <img className={ styles.linha2 } src={ linha } alt="linhaicon" />
                <img className={ styles.linha3 } src={ linhaB } alt="linhaicon" />
                <img className={ styles.linha4 } src={ linhaB } alt="linhaicon" />
                <img className={ styles.linha5 } src={ linhaC } alt="linhaicon" />
                <img className={ styles.linha6 } src={ linhaC } alt="linhaicon" />
            </nav>
            <p className={styles.numbers}>+ {numberGarbage} KG</p>
                <p className={styles.residuos}> Resíduos Eletrônicos Descartados </p>
            <article className={styles.text}>
                <h1> 
                    Nossa História 
                    e Compromisso 
                    Sustentável 
                </h1>
                <h2> 
                    Somos referência em Sustentabilidade 
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
