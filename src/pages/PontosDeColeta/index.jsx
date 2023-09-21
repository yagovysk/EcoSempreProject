import { HeaderSection } from '../../components/HeaderSection'
import { useColetasContext } from '../../contexts/ColetasContext'

import * as DescriptionPage from '../../components/DescriptionPage'

import styles from './styles.module.css'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { useState } from 'react'
import { Pagination } from '../../components/Pagination'
import { ScrollReveal } from '../../components/ScrollReveal'
import { PontoDeColetaBox } from './components/PontoDeColetaBox'

const breadcrumb = [
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Pontos de Coleta',
  },
]

let COLETAS_PER_PAGE = 8

export function PontosDeColeta() {
  const { pontosDeColeta, isLoading, error } = useColetasContext()
  const [currentPage, setCurrentPage] = useState(0)

  const widthWindow = useBreakpoint()

  if (error) {
    throw new Response('', {
      status: error.response.status || 500,
      statusText: error.response.statusText || 'Internal Server Error',
    })
  }

  COLETAS_PER_PAGE = widthWindow <= 730 ? 3 : 8

  const startIndex = currentPage * COLETAS_PER_PAGE
  const endIndex = startIndex + COLETAS_PER_PAGE
  const pontosDeColetaPerPage =
    pontosDeColeta && pontosDeColeta.slice(startIndex, endIndex)
  const pontosDeColetasLength = pontosDeColeta ? pontosDeColeta.length : 0

  return (
    <main className="overflow-hidden mb-14 md:mb-28">
      <HeaderSection
        title="Pontos de Coleta"
        className={styles.header}
        linksMenu={breadcrumb}
      />

      <div className="space-y-8 px-5 container">
        <DescriptionPage.Content className="mx-auto pb-4 md:pb-14 max-w-sm md:max-w-md">
          <ScrollReveal origin="bottom" className="space-y-2 text-center">
            <DescriptionPage.Subtitle subtitle="Nossos Pontos de Coleta" />

            <DescriptionPage.Title
              title={`${pontosDeColetasLength} Pontos de Coleta no Brasil`}
            />
          </ScrollReveal>
        </DescriptionPage.Content>

        {isLoading && (
          <ScrollReveal origin="top">
            <div
              className={`grid pb-10 justify-center md:grid-cols-pontos-de-coletas gap-6 md:gap-x-10 md:gap-y-8`}
            >
              {Array.from({ length: COLETAS_PER_PAGE }).map((_, index) => (
                <PontoDeColetaBox key={index} isLoading={isLoading} />
              ))}
            </div>
          </ScrollReveal>
        )}

        {pontosDeColeta && (
          <>
            <ScrollReveal origin="top">
              <div
                className={`grid justify-center md:grid-cols-pontos-de-coletas gap-6 md:gap-x-10 md:gap-y-8`}
              >
                {pontosDeColetaPerPage.map((pontoDeColeta) => (
                  <PontoDeColetaBox
                    key={pontoDeColeta.id}
                    pontoDeColeta={pontoDeColeta}
                    isLoading={isLoading}
                  />
                ))}
              </div>
            </ScrollReveal>

            <div className={`${styles.pagination_container} md:pt-6`}>
              <Pagination
                postsPerPage={COLETAS_PER_PAGE}
                currentPage={currentPage}
                onNextPage={setCurrentPage}
                postsLength={pontosDeColetasLength}
              />
            </div>
          </>
        )}
      </div>
    </main>
  )
}
