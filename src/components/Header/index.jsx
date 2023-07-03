import { forwardRef, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import { FormSearch } from "../FormSearch";
import { handleKeyboardTrap, useClickAway } from "../../helpers";
import logo from "../../assets/logoEcoSempre.png";
import "./Header.css";

const linksEcoSempre = [
  {
    name: "Sobre Nós",
    path: "/sobre",
  },
  {
    name: "Contato",
    path: "/contato",
  },
  {
    name: "Parceiros",
    path: "/parceiros",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
  {
    name: "Doação",
    path: "/doar",
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
    name: "Lista de Materiais",
    path: "/materiais",
  },
  {
    name: "Agendar coleta",
    path: "/agendar",
  },
];

export function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const focusableElementsMobile = useRef(null);
  const focusableElementsSearch = useRef(null);
  const lastFocusedElement = document.activeElement;

  useEffect(() => {
    document.body.style.overflow =
      isActive || isSearchActive ? "hidden" : "initial";

    if (isActive || isSearchActive) {
      const firstTabStop =
        isActive && !isSearchActive
          ? focusableElementsMobile.current.get(0)
          : focusableElementsSearch.current.get(0);
      const lastTabStop =
        isActive && !isSearchActive
          ? focusableElementsMobile.current.get(
              focusableElementsMobile.current.size - 1
            )
          : focusableElementsSearch.current.get(
              focusableElementsSearch.current.size - 1
            );

      document.addEventListener("keydown", (e) => {
        handleKeyboardTrap(
          e,
          isActive && !isSearchActive
            ? () => setIsActive(false)
            : () => setIsSearchActive(false),
          firstTabStop,
          lastTabStop
        );
      });

      return () =>
        document.removeEventListener("keydown", (e) => {
          handleKeyboardTrap(
            e,
            isActive && !isSearchActive
              ? () => setIsActive(false)
              : () => setIsSearchActive(false),
            firstTabStop,
            lastTabStop
          );
        });
    }
  }, [isActive, isSearchActive]);

  function handleOpenMenu() {
    setIsActive(!isActive);
  }

  function handleToggleSearch(bool) {
    setIsSearchActive(bool);
    if (!bool) {
      lastFocusedElement.focus();
    }
  }

  function getMap(isMobile) {
    if (isMobile) {
      if (!focusableElementsMobile.current) {
        focusableElementsMobile.current = new Map();
      }
      return focusableElementsMobile.current;
    } else {
      if (!focusableElementsSearch.current) {
        focusableElementsSearch.current = new Map();
      }
      return focusableElementsSearch.current;
    }
  }

  function getRef(node, id, isMobile = true) {
    const map = getMap(isMobile);
    if (node) {
      map.set(id, node);
    } else {
      map.delete(id);
    }
  }

  return (
    <header className={`header ${isActive && "on"}`}>
      <div className="container header_content">
        <Link aria-label="Voltar para o início" className="logo" to="/">
          <img src={logo} alt="logo da EcoSempre" />
        </Link>

        {!isActive && <Menu onToggleSearch={handleToggleSearch} />}

        <BurgerMenu
          ref={(node) => getRef(node, 0)}
          onActive={handleOpenMenu}
          isActive={isActive}
        />
      </div>

      {isActive && (
        <div
          className="menu_mobile_container"
          aria-expanded={isActive ? true : false}
        >
          <Menu
            setIsActive={setIsActive}
            onToggleSearch={handleToggleSearch}
            ref={(node) => getRef(node, 1)}
          />
        </div>
      )}

      {isSearchActive && (
        <div className="search_container">
          <button
            onClick={() => handleToggleSearch(false)}
            type="button"
            className="close_search"
            ref={(node) => getRef(node, 0, false)}
            aria-label="Fechar busca"
          >
            <Icon icon="ic:round-close" aria-hidden={true} />
          </button>

          <FormSearch
            onCloseSearch={() => {
              handleToggleSearch(false);
              setIsActive(false);
            }}
            placeholder="Digite aqui para buscar"
            autoFocus={true}
            ref={(node) => getRef(node, 1, false)}
          />
        </div>
      )}
    </header>
  );
}

const Menu = forwardRef(({ onToggleSearch, setIsActive = false }, ref) => {
  function handleCloseBurger() {
    if (setIsActive) {
      setIsActive(false);
    }
  }

  return (
    <>
      <ul className="menu">
        <li className="menu_li" onClick={handleCloseBurger}>
          <NavLink className="menu_item" to="/">
            Início
          </NavLink>
        </li>
        <li className="menu_li">
          <Dropdown
            label="EcoSempre"
            onActiveBurger={handleCloseBurger}
            links={linksEcoSempre}
          />
        </li>
        <li className="menu_li">
          <Dropdown
            label="Programas"
            onActiveBurger={handleCloseBurger}
            links={linksPrograms}
          />
        </li>
        <li className="menu_li" onClick={handleCloseBurger}>
          <NavLink className="menu_item" to="/coletas">
            Pontos de coleta
          </NavLink>
        </li>
        <li className="menu_li" onClick={handleCloseBurger}>
          <NavLink className="menu_item" to="/blog">
            Blog
          </NavLink>
        </li>
      </ul>

      <div className="contact-container">
        <button
          className="btn_search"
          onClick={() => onToggleSearch(true)}
          type="button"
          aria-label="Buscar postagens"
          aria-haspopup="dialog"
        >
          <Icon icon="ph:magnifying-glass" className="lupaicon" />
        </button>

        <Link
          onClick={handleCloseBurger}
          className="btnContato contato"
          to="/contato"
          role="button"
          ref={ref}
        >
          Entre em contato
          <Icon icon="octicon:arrow-right-16" />
        </Link>
      </div>
    </>
  );
});

const Dropdown = ({ label, links, onActiveBurger }) => {
  const [isActive, setIsActive] = useState(false);
  const elRef = useRef(null);
  useClickAway(elRef, () => setIsActive(false));

  function handleToggleDropdown(e) {
    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click") {
      setIsActive(!isActive);
    }
  }

  return (
    <>
      <div
        ref={elRef}
        onClick={handleToggleDropdown}
        onKeyDown={handleToggleDropdown}
        className={`menu_item ${isActive && "active"}`}
        tabIndex={0}
        role="button"
        aria-haspopup="menu"
        aria-expanded={isActive ? true : false}
      >
        {label}
        <Icon className="arrow_menu_item" icon="mdi:caret" rotate={2} />
      </div>

      {isActive && (
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
      )}
    </>
  );
};

const BurgerMenu = forwardRef(({ onActive, isActive }, ref) => {
  return (
    <button
      onClick={() => onActive()}
      className={`menu_burger ${isActive && "active"}`}
      aria-label={!isActive ? "Abrir menu" : "Fechar menu"}
      aria-haspopup="menu"
      ref={ref}
    >
      <div aria-hidden={"true"} className="trace trace1"></div>
      <div aria-hidden={"true"} className="trace trace2"></div>
      <div aria-hidden={"true"} className="trace trace3"></div>
    </button>
  );
});
