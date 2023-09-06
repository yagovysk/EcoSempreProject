import { useRouteError } from 'react-router-dom'
import styles from './ErrorPage.module.css'

export const ErrorPage = () => {
  const error = useRouteError()

  return (
    <main className={`${styles.main_content}`}>
      <div className={`${styles.wrapper_error_icon}`}>
        <ErrorIcon />
      </div>
      <h1 className={`${styles.title} title`}>
        <span className={styles.error_status}>{error.status}</span>{' '}
        {error.statusText || error.message}
      </h1>
      <p className={styles.paragraph}>
        Ops! Parece que encontramos um problema de conexão. Infelizmente, não
        conseguimos exibir o conteúdo que você está procurando no momento. Por
        favor, verifique sua conexão com a internet e tente novamente em alguns
        minutos.
      </p>
    </main>
  )
}

const ErrorIcon = (props) => {
  return (
    <svg
      width="422"
      height="324"
      viewBox="0 0 422 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M377.752 163.526C377.752 181.336 374.786 198.606 369.393 214.796C348.09 278.21 287.958 323.814 217.579 323.814C146.931 323.814 86.7987 277.94 65.4963 214.527C62.5301 205.622 60.3729 196.447 59.0246 187.002C57.946 179.177 57.4067 171.351 57.4067 163.526C57.4067 151.923 58.755 140.589 60.9122 129.795C76.2823 57.477 140.729 3.23828 217.579 3.23828C268.813 3.23828 314.384 27.2544 343.506 64.493C345.663 67.1915 347.551 69.6201 349.438 72.3185C355.64 80.9535 360.764 90.3981 365.078 100.382C373.168 119.811 377.752 141.129 377.752 163.526Z"
        fill="#EAEEF9"
      />
      <path
        d="M369.39 214.799C348.088 278.212 287.955 323.816 217.577 323.816C196.005 323.816 175.241 319.499 156.366 311.673C151.512 309.784 146.928 307.356 142.344 304.927C106.481 286.308 78.7065 253.926 65.4937 214.799L131.019 149.496L155.018 125.48C161.489 119.004 172.275 119.004 178.747 125.48L190.612 137.353L251.013 197.799L289.843 158.941C296.315 152.465 307.101 152.465 313.572 158.941L347.279 192.672L369.39 214.799Z"
        fill="#D5DDEA"
      />
      <path
        d="M369.391 214.795C348.088 278.209 287.956 323.812 217.577 323.812C196.005 323.812 175.242 319.495 156.367 311.669C151.513 309.78 146.929 307.352 142.345 304.923L250.744 197.255L289.844 158.937C296.315 152.461 307.101 152.461 313.573 158.937L369.391 214.795Z"
        fill="#C2C8D6"
      />
      <g filter="url(#filter0_d_1332_14911)">
        <path
          d="M364.807 100.381H262.34C262.879 85.8097 274.744 74.2064 289.305 74.2064C290.114 74.2064 290.653 74.2064 291.462 74.2064C295.237 62.0634 306.563 52.8887 320.045 52.8887C332.719 52.8887 343.774 60.984 348.089 72.0476C348.628 72.0476 349.167 72.0476 349.437 72.0476C355.369 81.2224 360.762 90.6669 364.807 100.381Z"
          fill="white"
        />
      </g>
      <g filter="url(#filter1_d_1332_14911)">
        <path
          d="M149.088 187.272H59.0246C57.946 179.447 57.4067 171.621 57.4067 163.796C57.4067 152.192 58.755 140.859 60.9122 130.065C62.5301 129.525 64.148 129.525 65.7659 129.525C81.4056 129.525 94.6185 139.24 99.7419 153.002C111.876 153.542 122.123 161.907 125.359 173.24C126.977 172.97 128.325 172.701 130.212 172.701C139.111 172.431 146.931 178.637 149.088 187.272Z"
          fill="white"
        />
      </g>
      <path
        d="M178.749 125.477L190.613 137.35L173.356 154.62L160.143 141.397L142.076 159.477C142.076 159.477 136.414 154.35 131.021 149.223L155.019 125.207C161.491 118.731 172.007 118.731 178.749 125.477Z"
        fill="white"
      />
      <path
        d="M347.28 192.668L329.213 210.747L315.731 197.255L296.316 216.684L264.228 184.573L289.844 158.937C296.316 152.461 307.102 152.461 313.574 158.937L347.28 192.668Z"
        fill="white"
      />
      <path
        d="M103.786 97.1441C130.592 97.1441 152.323 75.3976 152.323 48.572C152.323 21.7464 130.592 0 103.786 0C76.9793 0 55.2485 21.7464 55.2485 48.572C55.2485 75.3976 76.9793 97.1441 103.786 97.1441Z"
        fill="#D5DDEA"
      />
      <defs>
        <filter
          id="filter0_d_1332_14911"
          x="205.349"
          y="24.3931"
          width="216.45"
          height="161.475"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="28.4956" />
          <feGaussianBlur stdDeviation="28.4956" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1332_14911"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1332_14911"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1332_14911"
          x="0.415546"
          y="101.03"
          width="205.664"
          height="171.728"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="28.4956" />
          <feGaussianBlur stdDeviation="28.4956" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1332_14911"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1332_14911"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
