import Parceiro1 from "../assets/Parceiro1.svg";
import Parceiro2 from "../assets/Parceiro2.svg";
import Parceiro3 from "../assets/Parceiro3.svg";
import Parceiro4 from "../assets/Parceiro4.svg";
import Parceiro5 from "../assets/Parceiro5.svg";
import style from "../components/Parceiros.module.css";

export function Parceiros(){
    return(
        <section className={ style.idParceiros }>
            <article>
                <h1>
                    Nossos Parceiros
                </h1>
                <h2>
                    Conheça Quem Confia na
                    EcoSempre
                </h2>
            </article>
            <div className={style.parceirosCard}>
            <img className={ style.img1 } src={ Parceiro1 } alt="logo parceiro 1" />
            <img className={ style.img2 } src={ Parceiro2 } alt="logo parceiro 2" />
            <img className={ style.img3 } src={ Parceiro3 } alt="logo parceiro 3" />
            <img className={ style.img4 } src={ Parceiro4 } alt="logo parceiro 4" />
            <img className={ style.img5 } src={ Parceiro5 } alt="logo parceiro 5" />
            </div>
        </section>
    )
}
