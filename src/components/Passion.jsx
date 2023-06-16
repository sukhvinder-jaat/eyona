import React from "react";
import circle from "../assets/img/svg/section_2_circle.svg";
export const Passion = () => {
  return (
    <div
      className="bg_red vh_100_1920 position-relative d-flex align-items-center side_text overflow-hidde"
      data-aos="fade-left"
    >
      <span className="position-absolute top-0 start-0 translate-middle-y z-n1">
        <img
          src={circle}
          alt="circle"
          className="w-100 position-relative z-n1"
        />
      </span>
      <div className="magic_container py-5 d-flex flex-column align-items-start">
        <p
          className="ff_Montserrat fw_700 clr_white fs_6xl mx_1250 position-relative z-3"
          data-aos="fade-right"
        >
          It’s our passion. Our business. We love to see our customers
          reinventing themselves, people discovering their true potential and
          creating products to enable industries.
        </p>
        <p
          className="ff_Montserrat fw_500 clr_light_black fs_lg mx_910 position-relative z-3"
          data-aos="fade-right"
        >
          To us innovation means: Seeing the bigger picture, striving for better
          insights, always curious, thinking the unthinkable, the impossible and
          then making it happen. In other words, we support our customers with
          the business and technology know-how they need to continuously improve
          and gain new advantages to win now and in the future.
        </p>
      </div>
    </div>
  );
};
