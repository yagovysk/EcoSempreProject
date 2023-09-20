import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { ContactsTable } from './components/ContactsTable'
import { DataResume } from './components/DataResume'
import { CollectionPointsTable } from './components/CollectionPointsTable'
import { NewsletterTable } from './components/NewsletterTable'
import { HeadingAdmin } from '../../components/HeadingAdmin'

export function Admin() {
  return (
    <>
      <header className="border-b pb-9">
        <HeadingAdmin>Bem vindo, Administrador(a)!</HeadingAdmin>
        <p className="text-gray-500 font-medium text-lg mt-1">
          O que você quer fazer?
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <Link
            to="/admin/new-collection-point"
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
            to="/admin/posts"
            className="rounded flex p-4 gap-2 items-center bg-blue text-white transition-all border-2 border-blue hover:bg-white hover:text-blue hover:-translate-y-1 duration-300"
          >
            <Icon icon="majesticons:article-search-line" className="w-5 h-5" />
            <span className="flex-1">Ver postagens</span>
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
