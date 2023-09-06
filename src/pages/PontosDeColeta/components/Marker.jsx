import * as Tooltip from '@radix-ui/react-tooltip'

export function Marker({ pontoDeColeta, ...props }) {
  const { lat: latitude, lng: longitude } = pontoDeColeta.location

  const googleMapsUrl = `https://www.google.com/maps/place/${encodeURIComponent(
    pontoDeColeta.address,
  )}/${latitude},${longitude}`

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger {...props} className="absolute">
          <MarkerIcon />
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={6}
            align="start"
            alignOffset={-32}
            className="max-w-xs w-full p-3 bg-white rounded-lg shadow-lg font-inter"
          >
            <strong className="text-green-300 font-semibold text-xs/5">
              {pontoDeColeta.name}
            </strong>
            <p className="text-gray-500 text-xs/5 pt-1 pb-3">
              {pontoDeColeta.address} - CEP: {pontoDeColeta.cep}.{' '}
              {pontoDeColeta.state}
            </p>

            <a
              target="_blank"
              href={googleMapsUrl}
              className="bg-blue cursor-pointer py-[0.4rem] px-[0.6rem] rounded-md text-white font-medium text-sm"
              rel="noreferrer"
            >
              Ver no Mapa
            </a>
            <Tooltip.Arrow className="fill-white w-4 h-2" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

function MarkerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="animate-pulse"
    >
      <g filter="url(#filter0_d_1462_30448)">
        <rect
          x="2"
          y="2"
          width="15.8049"
          height="15.8049"
          rx="7.90244"
          fill="white"
        />
        <circle cx="9.9027" cy="9.9027" r="2.63415" fill="#0457E3" />
        <rect
          x="2.43902"
          y="2.43902"
          width="14.9268"
          height="14.9268"
          rx="7.46341"
          stroke="#0457E3"
          strokeWidth="0.878049"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1462_30448"
          x="0.243902"
          y="0.243902"
          width="19.3169"
          height="19.3171"
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
          <feMorphology
            radius="1.7561"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1462_30448"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.882353 0 0 0 0 0.882353 0 0 0 0 0.996078 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1462_30448"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1462_30448"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
