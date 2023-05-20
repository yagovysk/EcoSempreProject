import logo from '../assets/logoEcoSempre.png';
import styles from './Header.module.css';
import lupa from '../assets/lupaicon.png';


export function Header() {
    return(
    <header className={ styles.header }>
        <img className={styles.logo} src={ logo } alt="logo" />
        <ul className={styles.menu}>
            <li>
                <a href="#">
                     Início
                </a>
            </li>
            <li>
                <a href="#">
                     EcoSempre ⌄
                </a>
            </li>
            <li>
                <a href="#">
                    Programas ⌄
                </a>
            </li>
            <li>
                <a href="#">
                    Pontos de coleta
                </a>
            </li>
            <li>
                <a href="#">
                    Blog
                </a>
            </li>
        </ul>
        <img className={styles.lupaicon}
                src={ lupa } alt="iconlupa"
             />
            <nav>
            <a className={ styles.contato } href="#">
                Entre em contato 
                <span> 
                    🡢 
                </span>
            </a>
            </nav>
    </header>
  );
}