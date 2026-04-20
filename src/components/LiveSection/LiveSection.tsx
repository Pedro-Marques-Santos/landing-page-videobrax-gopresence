import "./LiveSection.scss";
import img_live_preview from "../../assets/images/sections/section-live-preview.svg";

import icon_facebook from "../../assets/images/icons/icon-facebook.svg";
import icon_instagram from "../../assets/images/icons/icon-instagram.svg";
import icon_tiktok from "../../assets/images/icons/icon-tiktok.svg";
import icon_twitch from "../../assets/images/icons/icon-twitch.svg";
import icon_youtube from "../../assets/images/icons/icon-youtube.svg";
import icon_zoom from "../../assets/images/icons/icon-zoom.svg";

export function LiveSection() {
  return (
    <section className="live-section">
      <div className="live-section__container">
        <div className="live-section__content">
          <div className="live-section__text">
            <h1>LIVE</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              laoreet risus neque, id convallis nisl euismod sed. Nullam neque
              nisl, blandit sed porta non, dapibus sed mauris.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              facilisi. Mauris venenatis augue quis felis viverra bibendum.
            </h3>
          </div>
        </div>
      </div>

      <div className="live-section__icons_container">
        <div className="live-section__container">
          <div className="live-section__container-icons">
            <img src={icon_facebook} alt="" />
            <img src={icon_instagram} alt="" />
            <img src={icon_tiktok} alt="" />
            <img src={icon_twitch} alt="" />
            <img src={icon_youtube} alt="" />
            <img src={icon_zoom} alt="" />
          </div>
        </div>
      </div>

      <div className="live-section__img_container">
        <img src={img_live_preview} alt="Prévia da live" />
      </div>
    </section>
  );
}
