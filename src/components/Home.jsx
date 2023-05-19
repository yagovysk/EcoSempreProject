import styles from './Home.module.css'

export function Home() {
    return(
        <div className={styles.home}>
            <nav className={styles.hometitle}>
                <h1>
                    Logística Reversa de Eletrônicos
                </h1>
            </nav>
            <nav className={ styles.homeparagraph }>
                <p> 
                    Trabalhamos em conjunto com comunidades e parceiros
                    para desenvolver soluções inovadoras em Logística
                    Reversa.
                </p>
                <a href="#">
                    Saiba Mais
                    <span>
                         🡢 
                    </span>
                </a>
            </nav>
        </div>
    )
}