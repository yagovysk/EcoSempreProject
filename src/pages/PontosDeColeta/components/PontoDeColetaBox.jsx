import { Icon } from '@iconify/react'
import { PontoDeColetaLoader } from './PontoDeColetaLoader'

export function PontoDeColetaBox({ pontoDeColeta, isLoading }) {
  if (isLoading) {
    return <PontoDeColetaLoader />
  }

  return (
    <div className="space-y-3 bg-white rounded-md shadow-[0px_10px_25px_-2px_rgba(16,24,40,0.10)] p-6 md:pl-10">
      <section className="space-y-3">
        <strong className="text-green-300 font-medium">
          {pontoDeColeta.name}
        </strong>
        <p className="text-[#8C8A97] text-sm">
          {pontoDeColeta.address}. CEP: {pontoDeColeta.cep}.{' '}
          {pontoDeColeta.city} - {pontoDeColeta.state}
        </p>
      </section>

      <hr className="border-[#EAEAEA]" />

      <div className="flex justify-between gap-4 text-blue font-roboto">
        <div className="flex gap-2 items-center">
          <Icon className="w-5 h-5 md:w-6 md:h-6" icon="ic:round-info" />
          <span className="text-sm/8 md:text-base/8 font-medium">
            Coletor Tamanho {pontoDeColeta.size}
          </span>
        </div>

        {pontoDeColeta.category && (
          <div className="flex gap-2 items-center">
            <Icon className="w-5 h-5 md:w-6 md:h-6" icon="mdi:recycle" />
            <span className="text-sm/8 md:text-base/8 font-medium">
              {pontoDeColeta.category}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
