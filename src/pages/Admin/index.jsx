import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { ContactsTable } from './components/ContactsTable'
import { DataResume } from './components/DataResume'
import { CollectionPointsTable } from './components/CollectionPointsTable'
import { NewsletterTable } from './components/NewsletterTable'

export function Admin() {
  return (
    <>
      <header className="border-b pb-9">
        <h1 className="text-gray-800 text-4xl mb-1 font-IBM-plex-sans">
          Bem vindo, Administrador(a)!
        </h1>
        <p className="text-gray-500 font-medium text-lg">
          O que você quer fazer?
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <Link
            to="/admin"
            className="rounded flex p-4 gap-2 items-center bg-green-300 text-white transition-all border-2 border-green-300 hover:bg-blue hover:border-blue hover:-translate-y-1 duration-300"
          >
            <Icon
              icon="material-symbols:location-on-rounded"
              className="w-5 h-5"
            />
            <span className="flex-1">Adicionar um novo ponto de coleta</span>
          </Link>

          <Link
            to="/admin/new-post"
            className="rounded flex p-4 gap-2 items-center bg-green-300 text-white transition-all border-2 border-green-300 hover:bg-blue hover:border-blue hover:-translate-y-1 duration-300"
          >
            <Icon icon="mdi:pencil" className="w-5 h-5" />
            <span className="flex-1">Escrever uma nova postagem</span>
          </Link>

          <Link
            to="/admin"
            className="rounded flex p-4 gap-2 items-center max-w-[14rem] bg-blue text-white transition-all border-2 border-blue hover:bg-white hover:text-blue hover:-translate-y-1 duration-300"
          >
            <Icon icon="fe:edit" className="w-5 h-5" />
            <span className="flex-1">Editar uma postagem</span>
          </Link>

          <Link
            to="/admin"
            className="rounded flex p-4 gap-2 items-center max-w-[14rem] bg-red-500 text-white transition-all border-2 border-red-500 hover:bg-white hover:text-red-500 hover:-translate-y-1 duration-300"
          >
            <Icon icon="ant-design:delete-filled" className="w-5 h-5" />
            <span className="flex-1">Deletar postagens</span>
          </Link>
        </div>
      </header>

      <main className="pt-9 flex flex-col gap-6">
        <DataResume />
        <hr />

        <div>
          <h2 className="text-gray-800 font-IBM-plex-sans text-2xl mb-6">
            Pessoas que entraram em contato
          </h2>

          <ContactsTable />
        </div>
        <hr />

        <div>
          <h2 className="text-gray-800 font-IBM-plex-sans text-2xl mb-6 flex items-center gap-3">
            Pontos de Coletas
          </h2>

          <CollectionPointsTable />
        </div>
        <hr />

        <div>
          <h2 className="text-gray-800 font-IBM-plex-sans text-2xl mb-6">
            Newsletter
          </h2>

          <NewsletterTable />
        </div>
      </main>
    </>
  )
}
