import { NavLink, Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useState } from 'react'

import ecoSempreLogo from '../../../assets/imgs/logoEcoSempre.webp'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenSidebar() {
    setIsOpen((state) => !state)
  }

  return (
    <div
      className={`flex flex-col gap-5 p-4 bg-blue fixed bottom-0 top-0 z-10 ${
        isOpen ? 'w-[17.625rem]' : 'w-[4.875rem]'
      } text-white overflow-hidden transition-all duration-300`}
    >
      <div className="flex flex-row-reverse">
        <button
          type="button"
          className="p-3 ml-auto"
          onClick={handleOpenSidebar}
        >
          <Icon icon="ic:round-menu" className="w-6 h-6" />
        </button>
        <Link to="/">
          <img
            src={ecoSempreLogo}
            alt=""
            className={`block min-w-[8rem] h-[4rem] object-contain opacity-0 ${
              isOpen && 'opacity-100'
            } transition-all`}
          />
        </Link>
      </div>

      <nav
        className="flex flex-col gap-5"
        onMouseOver={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <LinkSidebar path="/admin" icon="material-symbols:dashboard">
          Dashboard
        </LinkSidebar>

        <LinkSidebar
          path="/admin/add-collection-point"
          icon="material-symbols:location-on-rounded"
        >
          Adicionar ponto de coleta
        </LinkSidebar>

        <LinkSidebar path="/admin/new-post" icon="mdi:pencil">
          Nova postagem
        </LinkSidebar>

        <LinkSidebar path="/admin/posts" icon="majesticons:article-search-line">
          Ver blog
        </LinkSidebar>

        <LinkSidebar path="/admin/post-labels" icon="mdi:tag">
          Categorias e Tags do Blog
        </LinkSidebar>
      </nav>
    </div>
  )
}

function LinkSidebar({ icon, children, path }) {
  return (
    <NavLink
      to={path}
      className="grid sidebar-link overflow-hidden grid-cols-sidebar-admin gap-3 rounded-lg whitespace-nowrap p-3 transition-colors hover:bg-white hover:text-blue"
      end
    >
      <Icon icon={icon} className="w-6 h-6" />
      <span className={`transition-opacity font-medium`}>{children}</span>
    </NavLink>
  )
}
