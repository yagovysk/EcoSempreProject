import { NavLink } from "react-router-dom";
import logo from "../assets/logoEcoSempre.png";
import lupa from "../assets/lupaicon.svg";
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
          <NavLink to="/about_us">EcoSempre ⌄</NavLink>
        </li>
        <li>
          <a href="#">Programas ⌄</a>
        </li>
        <li>
          <a href="">Pontos de coleta</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>

      <div className="contact-container">
        <img className="lupaicon" src={lupa} alt="iconlupa" />
        <button className="btnContato">
          <a className="contato" to="/">
            Entre em contato
            <span>🡢</span>
          </a>
        </button>
      </div>
    </header>
  );
}
