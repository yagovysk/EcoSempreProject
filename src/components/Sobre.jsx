import styles from './Sobre.module.css';
import sobreimg from '../assets/img.svg'

export function Sobre() {
    return(
        <div className={styles.sobre}>
            <img src={sobreimg} alt="" />
        </div>
    )
}