import { NavLink } from "react-router-dom";
import logo from "../assets/logoEcoSempre.png";
import "./Header.css";
import { ArrowRight, CaretDown, MagnifyingGlass } from "@phosphor-icons/react";

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
            <CaretDown weight="bold" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/material_list">
            Programas
            <CaretDown weight="bold" />
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
        <MagnifyingGlass className="lupaicon" />
        <button className="btnContato">
          <a className="contato" to="/">
            Entre em contato
            <ArrowRight weight="bold" />
          </a>
        </button>
      </div>
    </header>
  );
}
