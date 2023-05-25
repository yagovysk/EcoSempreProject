import coletaimg from '../assets/Coletasimg.png';

import style from './Coletas.module.css';

import coletacard from '../assets/Coletacard.png';


export function Coletas() {
    return(
        <section className={style.idcoletas}>
            <article>
                <h1>
                    Pontos de Coleta de Lixo Eletrônico
                </h1>
                <h2>
                    Encontre o Ponto de Coleta 
                    EcoSempre mais Próximo 
                    de Você!
                </h2>
                <p>
                    Ao utilizar o Ponto de Coleta
                    EcoSempre, você contribui para
                    a redução do impacto ambiental
                    e para a promoção da economia
                    circular. Faça parte dessa 
                    iniciativa e ajude a construir
                    um futuro mais sustentável para
                    todos. Juntos, podemos
                    fazer a diferença!
                </p>
                <a href="#">
                    Ver Pontos de Coleta
                    <span>
                        🡢
                    </span> 
                </a>
            </article>
            <img className={style.coletaimg} src={ coletaimg } alt="equipamentoscoletadosimg" />
            <img className={style.coletacard} src={ coletacard } alt="card" />
            <div className={style.behind}>
            </div>
        </section>
    )
}
