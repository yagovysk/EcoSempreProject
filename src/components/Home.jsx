import styles from './Home.module.css'

import logo from '../assets/ecologo.png'

export function Home (){
    return(
        <nav className={styles.home}>
            <div className={styles.title}>
                <h1>Web site EcoSempre</h1>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="ecologo" />
            </div>
            <div className={styles.paragraph}>
                <p className={styles.p1}>Cliente solicitante:</p>
                <p className={styles.p2}>Sempretech LTDA</p>
            </div>
        </nav>
    )
}