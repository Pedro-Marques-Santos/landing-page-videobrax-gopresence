import "./MediaShowcase.scss";

import img from "../../assets/images/sections/section-collaboration.svg";
import im2 from "../../assets/images/sections/section-device.svg";

export function MediaShowcase() {
  return (
    <section className="media-show-case">
      <div className="media-show-case__content-container">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="media-show-case__img_container">
          <div className="media-show-case__card-left">
            <img src={im2} alt="" />
            <h5>Lorem ipsum, dolor sit amet</h5>
          </div>
          <div className="media-show-case__card-center">
            <img src={img} alt="" />
            <h5>Lorem ipsum, dolor sit amet</h5>
          </div>
          <div className="media-show-case__card-right">
            <img src={im2} alt="" />
            <h5>Lorem ipsum, dolor sit amet</h5>
          </div>
        </div>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          laoreet risus neque, id convallis nisl euismod sed.
        </h2>
      </div>
    </section>
  );
}
