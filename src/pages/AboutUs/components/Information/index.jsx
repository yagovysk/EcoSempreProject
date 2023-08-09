import { Carousel } from '../Carousel'
import { ScrollReveal } from '../../../../components/ScrollReveal'

import { headquarters } from '../../../../assets/imgs/aboutUs'

import styles from './styles.module.css'

export function Information() {
  return (
    <div
      className={`${styles.content_information} about_us_container container`}
    >
      <article className={styles.first_information}>
        <div className={`textsContainer ${styles.textsContainer}`}>
          <ScrollReveal origin="left">
            <span className="small-text">Quem Somos</span>
            <section className="texts">
              <h2 className="title">Sua Parceira em Soluções Tecnológicas</h2>
              <p className={styles.paragraph}>
                A Sempretec é uma empresa de soluções na área de tecnologia e
                oferece a seus clientes venda, assistência técnica e locação de
                equipamentos. Fundada a mais de uma década com o objetivo de
                suprir as necessidades de produtos e serviços tecnológicos do
                mercado de Brasília, hoje oferece a todo Brasil, produtos e
                serviços de alta qualidade.
              </p>
              <p className={styles.paragraph}>
                Oferecendo ao seus clientes o melhor serviço de outsourcing ,
                aliado aos demais recursos tecnológicos existentes, são hoje uma
                solução moderna na que tem contribuído, significativamente, para
                uma boa gestão, melhoria dos processos, gerenciamento dos
                recursos e na redução de custos, uma vez que não implicará em
                investimentos, tais como aquisição de equipamentos e insumos e
                as necessárias substituições periódicas, por motivo de
                depreciação, causado pelo avanço tecnológico e o desgaste
                natural pelo uso continuo.
              </p>
            </section>
          </ScrollReveal>
        </div>

        <Carousel />
      </article>

      <article className={styles.second_information}>
        <div className={styles.wrapper_img}>
          <ScrollReveal origin="left">
            <img
              className={styles.img_second_information}
              src={headquarters}
              alt="Casas"
            />
            <div aria-hidden={true} className={styles.box}></div>
          </ScrollReveal>
        </div>

        <ScrollReveal origin="bottom">
          <section className={`texts ${styles.text1}`}>
            <h3 className={styles.subtitle}>Missão</h3>
            <p className={styles.paragraph}>
              A nossa missão é oferecer serviços e produtos de tecnologia de
              alta qualidade, visando à total satisfação de nossos clientes.
              Através de uma equipe altamente qualificada e em constante
              atualização, buscamos fornecer soluções tecnológicas inovadoras e
              personalizadas para atender às necessidades específicas de cada
              cliente.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal origin="bottom">
          <section className={`texts ${styles.text2}`}>
            <h3 className={styles.subtitle}>Visão</h3>
            <p className={styles.paragraph}>
              Ser reconhecida por nossos clientes e parceiros como uma empresa
              ética e sustentável, que preza pela qualidade e bom
              relacionamento. Respeito e dedicação aos nossos clientes,
              excelência em nosso atendimento, transparência nas relações com
              clientes e fornecedores, trabalho realizado em equipe e segurança
              das informações de nossos clientes.
            </p>
          </section>
        </ScrollReveal>
      </article>
    </div>
  )
}
