import styles from './Saiba.module.css';
import smartPhoneImg from "../assets/smartphone.svg";
import computadorImg from "../assets/computador.svg";
import impressoraImg from "../assets/impressora.svg";
import cameraImg from "../assets/camera.svg";


export function Saiba() {
    return (
        <div className={styles.box}>
            <article className={styles.titleoque}>
                <h1>O que pode ser descartado?</h1>
                <h2>
                    Saiba Quais são os Tipos
                    de Lixo Eletrônico que Podem
                    ser Coletados
                </h2>
                <p>
                    Lembre-se de realizar
                    o descarte correto para
                    proteger o meio ambiente
                    e evitar danos à saúde 
                    pública. Em nossos pontos
                    de coleta, aceitamos diversos
                    tipos de lixo eletrônico 
                    e eletroeletrônico, desde
                    smartphones antigos, até pilhas,
                    baterias e eletrodomésticos.
                </p>
                <a href="#" className={styles.saibabutton}>
                     Ver Lista Completa
                     <span>
                         🡢 
                    </span> 
                </a>
            </article>
            <article className={styles.dispositivos}>
                <div className={styles.smartphone}>
                    <img src={smartPhoneImg} alt={"Smartphone"} />
                    <h1>Smartphones</h1>
                    <p> Atualize seus dispositivos eletrônicos
                        e descarte os antigos com segurança
                        e responsabilidade.</p>
                </div>
                <div className={styles.computadores}>
                    <img src={computadorImg} alt={"Computador"} />
                    <h1>Computadores</h1>
                    <p>
                        Ao substituir seu equipamento antigo, você pode dar a ele uma segunda vida ao doar ou reciclar de maneira responsável.
                    </p>
                </div>
                <div className={styles.impressoras}>
                    <img src={impressoraImg} alt={"Impressora"} />
                    <h1>Impressoras</h1>
                    <p>
                        Recicle com responsabilidade, garanta que materiais como cartuchos de tinta e toners sejam descartados corretamente.
                    </p>
                </div>
                <div className={styles.cameras}>
                    <img src={cameraImg} alt={"Camera"} />
                    <h1>Câmeras</h1>
                    <p>
                        Recicle corretamente para evitar que ela se torne lixo eletrônico e contribuir para a preservação do meio ambiente.
                    </p>
                </div>
            </article>
        </div>
    );
}

