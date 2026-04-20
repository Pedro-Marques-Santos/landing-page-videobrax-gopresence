import "./MediaShowcase.scss";

import img_collaboration from "../../assets/images/sections/section-collaboration.svg";
import img_device from "../../assets/images/sections/section-device.svg";

export function MediaShowcase() {
  return (
    <section id="sobre" className="media-show-case">
      <div className="media-show-case__content-container">
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className="media-show-case__img_container">
          <div className="media-show-case__card-left">
            <img src={img_device} alt="" />
            <h5>Lorem ipsum, dolor sit amet</h5>
          </div>
          <div className="media-show-case__card-center">
            <img src={img_collaboration} alt="" />
            <h5>Lorem ipsum, dolor sit amet</h5>
          </div>
          <div className="media-show-case__card-right">
            <img src={img_device} alt="" />
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
