import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import nav_logo from "../assets/img/svg/foot_logo.svg";
import in_img from "../assets/img/svg/in.svg";
import nav_circle from "../assets/img/svg/nav_circle.svg";
export const Footer = () => {
  return (
    <>
      <div className="bg_nav_black py-5 position-relative vh_100_1920">
        <span
          className="position-absolute end-0 bottom-0 d-flex justify-content-end"
          data-aos="fade-left"
        >
          <img
            src={nav_circle}
            alt="w-100"
            className="footer_circle_width w-50 hover_scale"
          />
        </span>
        <div className="footer_container d-flex flex-column justify-content-between h-100">
          <div>
            <span data-aos="fade-left">
              <img
                src={nav_logo}
                alt="nav_logo"
                className="w-25 mb-sm-5 mb-3"
              />
            </span>
            <Row>
              <Col lg={4} sm={6} xs={12} data-aos="fade-left">
                <a
                  href="mail:monudhaka829@gmail.com"
                  className="clr_red ff_Inter fw_700 fs_3xl"
                >
                  contact@eyona.co
                </a>
                <div className="pb-3 d-flex flex-column align-items-start">
                  <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                    Terms & Conditions
                  </p>
                  <p className="position-relative hover_line d-inline-block pointer mb-lg-5 mb-4 ff_Inter fw_400 fs_sm clr_light_white">
                    Privacy Policy
                  </p>
                </div>
                <span>
                  <img
                    src={in_img}
                    alt="in_img"
                    className="pointer mb-4 mb-lg-0 hover_scale"
                  />
                </span>
              </Col>
              <Col
                lg={4}
                sm={6}
                xs={12}
                className="d-flex justify-content-sm-center justify-content-start"
                data-aos="fade-left"
              >
                <div>
                  <p className="clr_white ff_Inter fw_700 fs_3xl">London</p>
                  <div className="pb-3 d-flex flex-column align-items-start">
                    <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                      77 Farringdon Road
                    </p>
                    <p className="position-relative hover_line d-inline-block pointer mb-2 ff_Inter fw_400 fs_sm clr_light_white">
                      London
                    </p>
                    <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white">
                      EC1m 3JU
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                sm={6}
                xs={12}
                className="d-flex justify-content-lg-center justify-content-start"
                data-aos="fade-left"
              >
                <div>
                  <p className="clr_white ff_Inter fw_700 fs_3xl">Cape Town</p>
                  <div className="pb-3 d-flex flex-column align-items-start">
                    <p className="pointer position-relative hover_line d-inline-block ff_Inter fw_400 fs_sm clr_light_white mb-2">
                      4 Alphons way,
                    </p>
                    <p className="pointer position-relative hover_line d-inline-block mb-2 ff_Inter fw_400 fs_sm clr_light_white">
                      Tokai, Cape Town,
                    </p>
                    <p className="pointer position-relative hover_line d-inline-block ff_Inter fw_400 fs_sm clr_light_white">
                      Western Cape 7420, ZA
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-start" data-aos="fade-left">
            <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white my-5">
              © Copyright – eyona
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
