import { Link, NavLink } from "react-router-dom";
import styles from "../components/CampodeBusca.module.css"



export function CampodeBusca({ onSearchActive }) {
    return(
        <div className={styles.searchactive}>
            <input type="search" />
        </div>
    )
}