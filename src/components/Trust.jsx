import React from "react";
import { Row, Col } from "react-bootstrap";

import map1 from "../assets/img/svg/map1.svg";
import map2 from "../assets/img/svg/map2.svg";
import map3 from "../assets/img/svg/map3.svg";
import map4 from "../assets/img/svg/map4.svg";
import map5 from "../assets/img/svg/map5.svg";
import map6 from "../assets/img/svg/map6.svg";
import map7 from "../assets/img/svg/map7.svg";
import map8 from "../assets/img/svg/map8.png";
import map9 from "../assets/img/svg/map9.svg";
import map10 from "../assets/img/svg/map10.svg";
import map11 from "../assets/img/svg/map11.svg";
import map12 from "../assets/img/svg/map12.svg";
import map13 from "../assets/img/svg/map13.svg";
import Slider from "react-slick";

export const Trust = () => {
  var trust_slider = {
    autoplay: true,
    cssEase: "linear",
    speed: 2500,
    autoplaySpeed: 2,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 12000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="py-5 px-3">
      <div>
        <p
          className="ff_Inter fw_700 fs_10xl clr_nav_black text-lg-center lh-sm"
          data-aos="zoom-out-right"
        >
          <span className="d-xl-block">We’ve built relationships</span> based on
          <span className="clr_red"> trust.</span>
        </p>
        <p
          className="ff_Inter fw_400 pb-5 fs_lg clr_gray text-lg-center"
          data-aos="zoom-out-down"
        >
          <span className="d-xl-block">
            We pride ourselves on having global companies as our partners & we
            also service
          </span>
          independant small businesses. We love to work with all businesses big
          or small.
        </p>
      </div>
      <div className="trust_container map_bg" data-aos="flip-right">
        <Slider
          {...trust_slider}
          className="pb-5 slider_trust"
          data-aos="zoom-out"
        >
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <img className="" src={map1} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <img className="" src={map2} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <img className="" src={map3} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center"
          >
            <img className="" src={map4} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center pt-xl-5 mt-xl-5"
          >
            <img className="" src={map5} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center pt-xl-5 mt-xl-5"
          >
            <img className="" src={map6} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center pt-xl-5 mt-xl-5"
          >
            <img className="" src={map7} alt="map1" />
          </Col>
          <Col
            lg={3}
            className="text-center d-flex align-items-center justify-content-center pt-xl-5 mt-xl-5"
          >
            <img className="" src={map8} alt="map1" />
          </Col>
          {/* w-20 */}
          <Col className="text-center d-flex align-items-center justify-content-center pt-xl-5 w_20">
            <img className="" src={map9} alt="map1" />
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center pt-xl-5 w_20">
            <img className="" src={map10} alt="map1" />
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center pt-xl-5 w_20">
            <img className="" src={map11} alt="map1" />
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center pt-xl-5 w_20">
            <img className="" src={map12} alt="map1" />
          </Col>
          <Col className="text-center d-flex align-items-center justify-content-center pt-xl-5 w_20">
            <img className="" src={map13} alt="map1" />
          </Col>
        </Slider>
        {/* red box */}
        <div
          className="d-flex justify-content-center align-items-end mt-sm-5 pt-sm-5"
          data-aos="flip-right"
        >
          <div className="red_box rounded-4 px-4 py-3">
            <Row>
              <Col
                sm={4}
                xs={12}
                className="d-flex flex-column align-items-sm-center align-items-start"
              >
                <p className="ff_Inter fw_700 mb-0 fs_5xl clr_white">6</p>
                <p className="mb-0 clr_light_black ff_Inter fw_400 fs_sm text-center">
                  Products
                </p>
              </Col>
              <Col
                sm={4}
                xs={12}
                className="d-flex flex-column align-items-sm-center align-items-start pt-3"
              >
                <p className="ff_Inter fw_700 mb-0 fs_5xl clr_white">5</p>
                <p className="mb-0 clr_light_black ff_Inter fw_400 fs_sm text-center">
                  Countries
                </p>
              </Col>
              <Col
                sm={4}
                xs={12}
                className="d-flex flex-column align-items-sm-center align-items-start pt-3"
              >
                <p className="ff_Inter fw_700 mb-0 fs_5xl clr_white">50+</p>
                <p className="mb-0 clr_light_black ff_Inter fw_400 fs_sm text-center">
                  Employees
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
