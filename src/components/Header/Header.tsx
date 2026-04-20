import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logos/logo-gopresence-white.svg";
import "./Header.scss";

export function Header() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

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

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="header__menuButton"
              aria-label="Abrir menu"
            >
              <Menu size={30} />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="header__overlay" />

            <Dialog.Content className="header__mobileMenu">
              <div className="header__mobileTop">
                <a
                  href="#home"
                  className="header__logo header__logo--mobile"
                  onClick={handleClose}
                >
                  <img src={logo} alt="Go Presence" />
                </a>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="header__closeButton"
                    aria-label="Fechar menu"
                  >
                    <X size={30} />
                  </button>
                </Dialog.Close>
              </div>

              <nav className="header__mobileNav">
                <a
                  href="#home"
                  className="header__mobileLink"
                  onClick={handleClose}
                >
                  Início
                </a>
                <a
                  href="#produtos"
                  className="header__mobileLink"
                  onClick={handleClose}
                >
                  Produtos
                </a>
                <a
                  href="#sobre"
                  className="header__mobileLink"
                  onClick={handleClose}
                >
                  Sobre
                </a>
                <a
                  href="#contato"
                  className="header__mobileLink"
                  onClick={handleClose}
                >
                  Contato
                </a>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
