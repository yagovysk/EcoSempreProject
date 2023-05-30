import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoEcoSempre.png";
import "./Header.css";

export function Header() {
  return (
    <header id="header" className="header">
      <img className="logo" src={logo} alt="logo" />
      <ul className="menu">
        <li>
          <NavLink to="/">Início</NavLink>
        </li>
        <li>
          <NavLink to="/about_us">
            EcoSempre
            <Icon icon="mdi:caret" rotate={2} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/material_list">
            Programas
            <Icon icon="mdi:caret" rotate={2} />
          </NavLink>
        </li>
        <li>
          <a href="">Pontos de coleta</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <div className="contact-container">
        <Icon icon="ph:magnifying-glass" className="lupaicon" />
        <button className="btnContato">
          <a className="contato" to="/">
            Entre em contato
            <Icon icon="octicon:arrow-right-16" />
          </a>
        </button>
      </div>
    </header>
  );
}
