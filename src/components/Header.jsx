import "./Header.css";
import logo from "../assets/logoEcoSempre.png";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { CampodeBusca } from "../components/CampodeBusca";


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
    name: "Lista de Materiais",
    path: "/material_list",
  },
];

export function Header() {
  const [dropdownIndex, setDropdownIndex] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  console.log(isSearchActive);
  function toggleDropdown(id) {
    if (id !== dropdownIndex) {
      setDropdownIndex(id);
    } else {
      setDropdownIndex(false);
    }
  }

  return (
    <header id="header" className="header">
      <div className="container header_content">
        <img className="logo" src={logo} alt="logo" />
        <ul className="menu">
          <li onClick={() => toggleDropdown(dropdownIndex)}>
            <NavLink className="menu_item" to="/">
              Início
            </NavLink>
          </li>
          <li onClick={() => toggleDropdown(0)}>
            <div className={`menu_item ${dropdownIndex === 0 && "active"}`}>
              EcoSempre
              <Icon icon="mdi:caret" rotate={2} />
              {dropdownIndex === 0 && <Dropdown links={linksEcoSempre} />}
            </div>
          </li>
          <li onClick={() => toggleDropdown(1)}>
            <div className={`menu_item ${dropdownIndex === 1 && "active"}`}>
              Programas
              <Icon icon="mdi:caret" rotate={2} />
            </div>

            {dropdownIndex === 1 && <Dropdown links={linksPrograms} />}
          </li>
          <li onClick={() => toggleDropdown(dropdownIndex)}>
            <NavLink className="menu_item" to="/coletas">
              Pontos de coleta
            </NavLink>
          </li>
          <li onClick={() => toggleDropdown(dropdownIndex)}>
            <NavLink className="menu_item" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>

        <div
          onClick={() => toggleDropdown(dropdownIndex)}
          className="contact-container"
        >
          <Icon icon="ph:magnifying-glass" className="lupaicon" />
          <button className="btnContato">
            <Link className="contato" to="/contact">
              Entre em contato
              <div onClick={() => setIsSearchActive(!isSearchActive)}>
                <Icon icon="octicon:arrow-right-16" />
              </div>  
              {isSearchActive && (
              <CampodeBusca onSearchActive={setIsSearchActive} />
              )}
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

function Dropdown({ links }) {
  return (
    <div className="wrapper_dropdown">
      <ul className="dropdown_list">
        {links.map((link, index) => (
          <NavLink
            className={`dropdown_item ${
              links.length - 1 === index && "last_item"
            }`}
            to={link.path}
            key={link.name}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
