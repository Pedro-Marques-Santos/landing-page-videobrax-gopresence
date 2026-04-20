import "./Footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content-container">
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className="footer__logo">LOREM</h2>
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              laoreet risus neque, id convallis nisl euismod sed.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <div className="footer__column">
              <h3>Navigation</h3>
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer__column">
              <h3>Products</h3>
              <a href="#">Lorem One</a>
              <a href="#">Lorem Two</a>
              <a href="#">Lorem Three</a>
              <a href="#">Lorem Four</a>
            </div>

            <div className="footer__column">
              <h3>Social</h3>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>© 2025 Lorem. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
