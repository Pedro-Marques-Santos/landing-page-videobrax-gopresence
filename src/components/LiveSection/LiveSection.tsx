import "./LiveSection.scss";

import img from "../../assets/images/sections/section-live-preview.svg";

export function LiveSection() {
  return (
    <section className="live-section">
      <div className="live-section__container">
        <div className="live-section__quebracontainer">
          <h1>LIVE</h1>
          <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque, id convallis nisl euismod sed. Nullam neque
            nisl, blandit sed porta non, dapibus sed mauris.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Mauris venenatis augue quis felis viverra bibendum.
          </h3>
        </div>
      </div>
      <div className="live-section__icons_container">
        <div className="live-section__container">
          <div className="live-section__container-icons">teste</div>
        </div>
      </div>
      <div className="live-section__img_container">
        <img src={img} alt="" />
      </div>
    </section>
  );
}
