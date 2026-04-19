import logo from "../../assets/images/logos/logo-gopresence-white.svg";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="header__logo">
          <img src={logo} alt="Go Presence" />
        </a>

        <nav className="header__nav">
          <a href="#home" className="header__link">
            Início
          </a>
          <a href="#produtos" className="header__link">
            Produtos
          </a>
          <a href="#sobre" className="header__link">
            Sobre
          </a>
          <a href="#contato" className="header__link">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
