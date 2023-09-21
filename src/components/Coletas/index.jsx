import * as DescriptionPage from '../DescriptionPage'

import { Link } from 'react-router-dom'
import { ScrollReveal } from '../ScrollReveal'
import styles from './styles.module.css'

export function Coletas({
  subtitle,
  title,
  linkText,
  imgCallbackComponent: ImgComponent,
  padding = '8rem 1.5rem',
}) {
  return (
    <div
      className={`container ${styles.wrapper}`}
      style={{ '--padding': padding }}
    >
      <DescriptionPage.Content className="lg:max-w-xl">
        <ScrollReveal origin="left">
          <DescriptionPage.Subtitle subtitle={subtitle} />
          <DescriptionPage.Title className="mt-2" title={title} />
          <DescriptionPage.Paragraph className="py-6">
            Ao utilizar o Ponto de Coleta EcoSempre, você contribui para a
            redução do impacto ambiental e para a promoção da economia circular.
            Faça parte dessa iniciativa e ajude a construir um futuro mais
            sustentável para todos. Juntos, podemos fazer a diferença!
          </DescriptionPage.Paragraph>

          <Link
            role="button"
            to="/buscar-coletas"
            className={`btn btn-link ${styles.btnColeta}`}
          >
            {linkText}
            <span>🡢</span>
          </Link>
        </ScrollReveal>
      </DescriptionPage.Content>

      <ImgComponent />
    </div>
  )
}
