import logo from "../../assets/logoEcoSempre.png";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FormSearch } from "../FormSearch";
import "./Header.css";

const linksEcoSempre = [
  {
    name: "Sobre Nós",
    path: "/about_us",
  },
  {
    name: "Contato",
    path: "/contact",
  },
  {
    name: "Parceiros",
    path: "/parceiros",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
];
const linksPrograms = [
  {
    name: "Logística Reversa",
    path: "/logistica",
  },
  {
    name: "Descarte Correto do Lixo Eletrônico",
    path: "/descarte",
  },
  {
    name: "Coleta em Condomínios",
    path: "/",
  },
  {
    name: "Lista de Materiais",
    path: "/material_list",
  },
  {
    name: "Agendar coleta",
    path: "/agendar",
  },
];

export function Header() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "initial";
  }, [isActive]);

  function handleOpenMenu() {
    setIsActive(!isActive);
  }

  return (
    <header className={`header ${isActive && "on"}`}>
      <div className="container header_content">
        <Link aria-label="Voltar para o início" className="logo" to="/">
          <img src={logo} alt="logo da EcoSempre" />
        </Link>

        {!isActive && <Menu />}

        <BurgerMenu onActive={handleOpenMenu} isActive={isActive} />
      </div>
      {isActive && <MenuMobile setIsActive={setIsActive} />}
    </header>
  );
}

function Menu({ setIsActive = false }) {
  const [dropdownIndex, setDropdownIndex] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  function handleClick(id) {
    if (setIsActive) {
      setIsActive(false);
    }
    toggleDropdown(id);
  }

  function handleCloseBurger() {
    if (setIsActive) {
      setIsActive(false);
    }
  }

  function toggleDropdown(id) {
    if (id !== dropdownIndex) {
      setDropdownIndex(id);
    } else {
      setDropdownIndex(false);
    }
  }

  return (
    <>
      <ul className="menu">
        <li className="menu_li" onClick={() => handleClick(dropdownIndex)}>
          <NavLink className="menu_item" to="/">
            Início
          </NavLink>
        </li>
        <li className="menu_li" onClick={() => toggleDropdown(0)}>
          <div className={`menu_item ${dropdownIndex === 0 && "active"}`}>
            EcoSempre
            <Icon className="arrow_menu_item" icon="mdi:caret" rotate={2} />
          </div>
          {dropdownIndex === 0 && (
            <Dropdown
              onActiveBurger={handleCloseBurger}
              links={linksEcoSempre}
            />
          )}
        </li>
        <li className="menu_li" onClick={() => toggleDropdown(1)}>
          <div className={`menu_item ${dropdownIndex === 1 && "active"}`}>
            Programas
            <Icon className="arrow_menu_item" icon="mdi:caret" rotate={2} />
          </div>

          {dropdownIndex === 1 && (
            <Dropdown
              onActiveBurger={handleCloseBurger}
              links={linksPrograms}
            />
          )}
        </li>
        <li className="menu_li" onClick={() => handleClick(dropdownIndex)}>
          <NavLink className="menu_item" to="/coletas">
            Pontos de coleta
          </NavLink>
        </li>
        <li className="menu_li" onClick={() => handleClick(dropdownIndex)}>
          <NavLink className="menu_item" to="/blog">
            Blog
          </NavLink>
        </li>
      </ul>

      <div
        onClick={() => toggleDropdown(dropdownIndex)}
        className="contact-container"
      >
        <Icon
          onClick={() => setIsSearchActive(true)}
          icon="ph:magnifying-glass"
          className="lupaicon"
        />
        {isSearchActive && <CampoDeBusca onSearchActive={setIsSearchActive} />}

        <Link
          onClick={handleCloseBurger}
          className="btnContato contato"
          to="/contact"
        >
          Entre em contato
          <Icon icon="octicon:arrow-right-16" />
        </Link>
      </div>
    </>
  );
}

function Dropdown({ links, onActiveBurger }) {
  return (
    <div className="wrapper_dropdown">
      <ul className="dropdown_list">
        {links.map((link, index) => (
          <li key={link.name} onClick={onActiveBurger}>
            <NavLink
              className={`dropdown_item ${
                links.length - 1 === index && "last_item"
              }`}
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CampoDeBusca({ onSearchActive }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        onSearchActive(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="search_container">
      <button
        onClick={() => onSearchActive(false)}
        type="button"
        className="close_search"
      >
        <Icon icon="ic:round-close" />
      </button>

      <FormSearch
        onSearchActive={onSearchActive}
        placeholder="Digite aqui para buscar"
      />
    </div>
  );
}

function BurgerMenu({ onActive, isActive }) {
  return (
    <div
      onClick={() => onActive()}
      className={`menu_burger ${isActive && "active"}`}
      aria-controls="menu"
      aria-haspopup={true}
      aria-label={!isActive ? "Abrir menu" : "Fechar menu"}
      aria-expanded={isActive ? true : false}
    >
      <div className="trace trace1"></div>
      <div className="trace trace2"></div>
      <div className="trace trace3"></div>
    </div>
  );
}

function MenuMobile({ setIsActive }) {
  return (
    <div className="menu_mobile_container">
      <Menu setIsActive={setIsActive} />
    </div>
  );
}
