import styles from './Sobre.module.css';
import sobreimg from '../assets/img.svg'

export function Sobre() {
    return(
        <div className={styles.sobre}>
            <img src={sobreimg} alt="imagem ilustrativa" />
            <article className={styles.text}>
                <h1> Nossa História 
                    e Compromisso 
                    Sustentável 
                </h1>
                <h2> 
                    Somos Pioneiros em Sustentabilidade 
                    e Logística Reversa de Eletrônicos! 
                </h2>
                <p> 
                    Trabalhamos incansavelmente para desenvolver 
                    soluções inovadoras em Logística Reversa e
                    ajudar a transformar a maneira como as empresas 
                    lidam com seus resíduos.
                </p>
            </article>
        </div>
    )
}