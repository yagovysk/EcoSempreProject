import * as DescriptionPage from '../../components/DescriptionPage'
import { useState, useRef } from 'react'

import { HeaderSection } from '../../components/HeaderSection'
import { Map } from '../../components/Map'
import { ScrollReveal } from '../../components/ScrollReveal'
import { QueryCollectForm } from './components/QueryCollectForm'

import styles from './styles.module.css'

const linksMenu = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Pontos de Coleta',
  },
]

export function PontosDeColeta() {
  const [pontosColeta, setPontosColeta] = useState('')
  const [coordinates, setCoordinates] = useState({})
  const mapRef = useRef({})

  console.log(coordinates)

  return (
    <main className={styles.main_content}>
      <HeaderSection
        title="Pontos De Coleta"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <DescriptionPage.Root className={`container gap-y-10 lg:gap-y-16 !px-0`}>
        <DescriptionPage.Content className="px-6 xl:px-0 text-center lg:text-left">
          <ScrollReveal origin="bottom">
            <DescriptionPage.Subtitle subtitle="Nossos Pontos" />
            <DescriptionPage.Title
              className="mt-2 mb-6 md:max-w-lg md:mx-auto lg:mx-0"
              title="Descubra o Ponto de Coleta Mais Próximo de Você!"
            />
            <DescriptionPage.Paragraph className="md:max-w-lg md:mx-auto lg:max-w-none">
              Digite o seu endereço e escolha a categoria no campo ao lado para
              encontrar o Ponto de Coleta mais próximo de você.
            </DescriptionPage.Paragraph>
          </ScrollReveal>
        </DescriptionPage.Content>

        <QueryCollectForm
          setPontosColeta={setPontosColeta}
          setCoordinates={(position) => {
            setCoordinates(position)
            mapRef && mapRef.current.panTo(position)
          }}
        />

        <div className="col-span-full">
          <div className={styles.map_wrapper}>
            <Map mapRef={mapRef} coordinates={coordinates} />
          </div>

          {pontosColeta && (
            <article className={`${styles.pontos_coleta_wrapper} px-6 xl:px-0`}>
              <h3 className={styles.title_pontos_coleta}>
                Pontos de Coleta Mais Próximos:
              </h3>
              <div className={styles.data_pontos_coleta}>
                {pontosColeta.map((ponto) => (
                  <div key={ponto.id} className={styles.ponto_coleta}>
                    <h4 className={styles.title_ponto_coleta}>{ponto.title}</h4>
                    <p className={styles.address}>
                      {ponto.address}. {ponto.complement && ponto.complement}
                      CEP: {ponto.cep}. {ponto.state}.
                    </p>
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>
      </DescriptionPage.Root>
    </main>
  )
}
