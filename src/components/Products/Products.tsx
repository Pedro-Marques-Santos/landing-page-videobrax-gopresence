import "./Products.scss";

import product from "../../assets/images/products/product-switcher-mini.svg";
import section_img from "../../assets/images/sections/section-showcase-event.svg";
import { Button } from "../Button/Button";

export function Products() {
  return (
    <section className="products">
      <div className="products__content-container">
        <div className="products__content-left-container">
          <h1>Lorem ipsum</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <div className="products__cards-container">
            <div className="products__card">
              <img src={product} alt="product" />
            </div>
            <div className="products__card">
              <img src={product} alt="product" />
            </div>
          </div>
          <Button />
        </div>
        <div className="products__img-container">
          <img src={section_img} alt="showcase" />
        </div>
      </div>
    </section>
  );
}
