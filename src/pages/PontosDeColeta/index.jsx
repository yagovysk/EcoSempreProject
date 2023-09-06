import * as DescriptionPage from '../../components/DescriptionPage'
import { useRef, useEffect } from 'react'

import { HeaderSection } from '../../components/HeaderSection'
import { Map } from '../../components/Map'
import { ScrollReveal } from '../../components/ScrollReveal'
import { QueryCollectForm } from './components/QueryCollectForm'
import { MapColetas } from './components/MapColetas'
import { Loader } from './components/Loader'
import { useColetasContext } from '../../contexts/ColetasContext'

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
  const containerMapRef = useRef(null)
  const { userAddressCoordinates, nearbyPontosColetas } = useColetasContext()

  useEffect(() => {
    if (userAddressCoordinates) {
      if (!containerMapRef.current) return

      const positionTopContainerMap =
        containerMapRef.current.getBoundingClientRect().top

      window.scrollTo(0, positionTopContainerMap)
    }
  }, [userAddressCoordinates])

  console.log(nearbyPontosColetas)

  return (
    <main className={styles.main_content}>
      <HeaderSection
        title="Pontos De Coleta"
        className={styles.header}
        linksMenu={linksMenu}
      />

      <Map customLoader={Loader}>
        <DescriptionPage.Root
          className={`container gap-y-10 lg:gap-y-16 !px-0`}
        >
          <DescriptionPage.Content className="px-6 xl:px-0 text-center lg:text-left">
            <ScrollReveal origin="bottom">
              <DescriptionPage.Subtitle subtitle="Nossos Pontos" />
              <DescriptionPage.Title
                className="mt-2 mb-6 md:max-w-lg md:mx-auto lg:mx-0"
                title="Descubra o Ponto de Coleta Mais Próximo de Você!"
              />
              <DescriptionPage.Paragraph className="md:max-w-lg md:mx-auto lg:max-w-none">
                Digite o seu endereço e escolha a categoria no campo ao lado
                para encontrar o Ponto de Coleta mais próximo de você.
              </DescriptionPage.Paragraph>
            </ScrollReveal>
          </DescriptionPage.Content>

          <QueryCollectForm />

          <div className="col-span-full">
            {userAddressCoordinates && !nearbyPontosColetas.length ? (
              <div
                ref={containerMapRef}
                className=" grid gap-4 sm:gap-8 pt-8 justify-items-center place-content-center"
              >
                <NotFoundIcon className="max-sm:max-w-xs max-sm:w-full px-6" />
                <p className="text-blue max-sm:px-6 font-bold text-2xl font-IBM-plex-sans text-center max-w-md">
                  Nenhum Ponto de Coleta Encontrado Para o Endereço Pesquisado
                </p>
              </div>
            ) : (
              <>
                <div ref={containerMapRef} className={styles.map_wrapper}>
                  <MapColetas />
                </div>
                {nearbyPontosColetas.length > 0 && (
                  <section
                    className={`${styles.pontos_coleta_wrapper} px-6 xl:px-0`}
                  >
                    <h3 className={styles.title_pontos_coleta}>
                      Pontos de Coleta Mais Próximos:
                    </h3>
                    <div className={styles.data_pontos_coleta}>
                      {nearbyPontosColetas.map((ponto) => (
                        <div key={ponto.id} className={styles.ponto_coleta}>
                          <h4 className={styles.title_ponto_coleta}>
                            {ponto.name}
                          </h4>
                          <p className={styles.address}>
                            {ponto.address}. CEP: {ponto.cep}. {ponto.state}.
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </>
            )}
          </div>
        </DescriptionPage.Root>
      </Map>
    </main>
  )
}

function NotFoundIcon(props) {
  return (
    <svg
      width="348"
      height="182"
      viewBox="0 0 348 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M333.413 1C341.469 1 348 7.53075 348 15.5868C348 23.6429 341.469 30.1737 333.413 30.1737H250.06C258.116 30.1737 264.647 36.7044 264.647 44.7605C264.647 52.8166 258.116 59.3473 250.06 59.3473H295.904C303.96 59.3473 310.491 65.8781 310.491 73.9341C310.491 81.9902 303.96 88.521 295.904 88.521H274.703C264.546 88.521 256.311 95.0517 256.311 103.108C256.311 108.479 260.479 113.341 268.814 117.695C276.87 117.695 283.401 124.225 283.401 132.281C283.401 140.338 276.87 146.868 268.814 146.868H95.8563C87.8002 146.868 81.2695 140.338 81.2695 132.281C81.2695 124.225 87.8002 117.695 95.8563 117.695H14.5868C6.53074 117.695 0 111.164 0 103.108C0 95.0517 6.53074 88.521 14.5868 88.521H97.9401C105.996 88.521 112.527 81.9902 112.527 73.9341C112.527 65.8781 105.996 59.3473 97.9401 59.3473H45.8443C37.7882 59.3473 31.2575 52.8166 31.2575 44.7605C31.2575 36.7044 37.7882 30.1737 45.8443 30.1737H129.198C121.142 30.1737 114.611 23.6429 114.611 15.5868C114.611 7.53075 121.142 1 129.198 1H333.413ZM333.413 59.3473C341.469 59.3473 348 65.8781 348 73.9341C348 81.9902 341.469 88.521 333.413 88.521C325.357 88.521 318.826 81.9902 318.826 73.9341C318.826 65.8781 325.357 59.3473 333.413 59.3473Z"
        fill="#F3F7FF"
      />
      <path
        d="M153.161 142.701C191.716 142.701 222.97 111.446 222.97 72.8924C222.97 34.3383 191.716 3.08398 153.161 3.08398C114.607 3.08398 83.353 34.3383 83.353 72.8924C83.353 111.446 114.607 142.701 153.161 142.701Z"
        fill="#F3F7FF"
        stroke="#0E2B5C"
        strokeOpacity="0.85"
        strokeWidth="5.20958"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M141.976 127.06C145.641 127.737 149.369 128.088 153.161 128.115C183.66 128.115 208.383 103.391 208.383 72.8934C208.383 42.3954 183.66 17.6719 153.161 17.6719C145.327 17.6719 137.874 19.3034 131.123 22.2451C119.391 27.3573 109.779 36.4262 103.975 47.7663C100.117 55.3037 97.9399 63.8444 97.9399 72.8934C97.9399 81.1037 99.7317 88.8956 102.946 95.8992C105.24 100.899 108.259 105.498 111.869 109.56"
        fill="white"
      />
      <path
        d="M141.976 127.06C145.641 127.737 149.369 128.088 153.161 128.115C183.66 128.115 208.383 103.391 208.383 72.8934C208.383 42.3954 183.66 17.6719 153.161 17.6719C145.327 17.6719 137.874 19.3034 131.123 22.2451C119.391 27.3573 109.779 36.4262 103.975 47.7663C100.117 55.3037 97.9399 63.8444 97.9399 72.8934C97.9399 81.1037 99.7317 88.8956 102.946 95.8992C105.24 100.899 108.259 105.498 111.869 109.56"
        stroke="#0E2B5C"
        strokeOpacity="0.85"
        strokeWidth="5.20958"
        strokeLinecap="round"
      />
      <path
        d="M118.356 115.766C122.832 119.404 127.889 122.355 133.366 124.459"
        stroke="#0E2B5C"
        strokeOpacity="0.89"
        strokeWidth="5.20958"
        strokeLinecap="round"
      />
      <path
        d="M210.467 128.113L222.97 140.616"
        stroke="#0E2B5C"
        strokeOpacity="0.85"
        strokeWidth="5.20958"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M220.949 138.597C217.005 142.541 217.005 148.935 220.949 152.88L244.049 175.979C247.993 179.924 254.388 179.924 258.332 175.979C262.276 172.035 262.276 165.641 258.332 161.697L235.232 138.597C231.288 134.653 224.893 134.653 220.949 138.597Z"
        fill="#E8F0FE"
        stroke="#0E2B5C"
        strokeOpacity="0.85"
        strokeWidth="5.20958"
      />
      <path
        d="M231.305 142.701L254.227 165.623"
        stroke="white"
        strokeWidth="5.20958"
        strokeLinecap="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M139.617 48.9284C139.617 73.0966 159.209 92.6889 183.377 92.6889C188.125 92.6889 192.696 91.9328 196.977 90.5345C189.989 107.874 173.005 120.114 153.161 120.114C127.082 120.114 105.94 98.9719 105.94 72.8925C105.94 49.2609 123.3 29.6837 145.962 26.2168C141.936 32.8397 139.617 40.6132 139.617 48.9284Z"
        fill="#E8F0FE"
      />
      <path
        d="M154.203 34.3418C151.55 34.3418 148.957 34.6028 146.45 35.1006M138.876 37.4177C124.621 43.4082 114.611 57.5024 114.611 73.9346"
        stroke="#00C756"
        strokeOpacity="0.6"
        strokeWidth="5.20958"
        strokeLinecap="round"
      />
      <path
        d="M265.013 73.4704H247.976M278.192 57.2637H242.4H278.192ZM292.778 57.2637H288.15H292.778Z"
        stroke="#00C756"
        strokeOpacity="0.6"
        strokeWidth="5.20958"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M77.4681 119.314H60.4311M67.7245 101.023H31.9331H67.7245ZM19.7964 101.023H11.0001H19.7964Z"
        stroke="#00C756"
        strokeOpacity="0.6"
        strokeWidth="5.20958"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
