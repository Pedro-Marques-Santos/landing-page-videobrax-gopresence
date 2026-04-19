import "./OverviewSection.scss";

import icon_star from "../../assets/images/icons/icon-star.svg";

export function OverviewSection() {
  return (
    <section className="overview-section">
      <h1 className="overview-section__title">
        Lorem ipsum dolor sit amet, consectetur.
      </h1>
      <div className="overview-section__cards-container">
        <div className="overview-section__card">
          <img src={icon_star} alt="icon-star" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque,
          </p>
        </div>
        <div className="overview-section__card">
          <img src={icon_star} alt="icon-star" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque,
          </p>
        </div>
        <div className="overview-section__card">
          <img src={icon_star} alt="icon-star" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque,
          </p>
        </div>
      </div>
    </section>
  );
}
