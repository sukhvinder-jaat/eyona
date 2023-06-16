import React from "react";
import join_img from "../assets/img/webp/join_img.webp";
import join_circle from "../assets/img/svg/join_circle.svg";
export const Join = () => {
  return (
    <>
      <div className="pt-5 position-relative">
        <span
          className="position-absolute z-1 top-50 start-0 translate-middle-y"
          data-aos="fade-right"
        >
          <img src={join_circle} alt="join_circle" className="w-100" />
        </span>
        <div className="footer_container">
          <p
            className="ff_Inter fw_700 fs_10xl text-lg-center text-start clr_nav_black lh-sm"
            data-aos="fade-right"
          >
            Join the <span className="clr_red pointer">eyona</span> team and
            find out where the true magic happens!
          </p>
          <p
            className="mx_1050 clr_gray ff_Inter fw_400 fs_lg mt-lg-5 mt-2"
            data-aos="fade-right"
          >
            It doesn’t matter where you come from, how you look or any other
            aspect about yourself. If you’re pssionate about what you do, we
            can’t wait to meet you.
          </p>
          <p
            className="mx_1050 clr_gray ff_Inter fw_400 fs_lg"
            data-aos="fade-right"
          >
            We are always looking for people, who put customers at the
            forefront. If you are seeking a culture with high performance
            standards that loves to create and build things with exceptional
            people, then Eyona may be the fit for you.
          </p>
          <div
            className="d-flex align-items-sm-center align-items-start mt-4 flex-column flex-sm-row"
            data-aos="fade-right"
          >
            <button className="d-inline-block border-0 send_btn rounded-pill clr_white ff_Inter fw_700 fs_md">
              Send Us A Message
            </button>
            <a
              href="mail:monudhaka829@gmail.com"
              className="clr_red ff_Inter fw_700 fs_2xl ps-sm-5 mt-sm-0 mt-3 d-block d-xxl-none"
            >
              recruitment@eyona.co
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end" data-aos="fade-left">
          <span className="d-flex justify-content-end align-items-center">
            <a
              href="mail:monudhaka829@gmail.com"
              className="clr_red ff_Inter fw_700 fs_2xl pe-5 d-none d-xxl-block"
            >
              recruitment@eyona.co
            </a>
            <img
              src={join_img}
              alt="join_img"
              className="w-75 mt_100_xxl z-2"
            />
          </span>
        </div>
      </div>
    </>
  );
};
