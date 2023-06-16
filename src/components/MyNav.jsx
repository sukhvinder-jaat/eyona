import React from "react";
import nav_logo from "../assets/img/svg/nav_logo.svg";
import in_img from "../assets/img/svg/in.svg";
import nav_circle from "../assets/img/svg/nav_circle.svg";
import cross from "../assets/img/svg/nav_cross.svg";
import { Col, Row } from "react-bootstrap";
export const MyNav = () => {
  return (
    <div className="bg_nav_black py-4 vh_100_1920 position-relative">
      <img
        src={nav_circle}
        alt="nav_circle"
        className="position-absolute nav_circle end-0 top-0"
      />
      <div className="mx-md-5 mx-3">
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <img src={nav_logo} alt="nav_logo" className="w-100" />
          </span>
          <span>
            <img src={cross} alt="cross" className="w-100" />
          </span>
        </div>
      </div>
      <div className="magic_container">
        <Row className="h-100">
          <Col
            xs={12}
            xl={5}
            xxl={6}
            className="d-flex align-items-center pb-sm-5 pt-sm-0 pt-4"
          >
            <p className="ff_Montserrat fw_700 clr_white fw_700 fs_10xl mx_650">
              Who we are Our Companies What we do Contact us Careers
            </p>
          </Col>
          {/* nav side >>> */}
          <Col
            xs={12}
            xl={7}
            xxl={6}
            className="d-flex align-items-xl-end align-items-start justify-content-xl-end justify-content-start pb-5"
          >
            <Row className="pb-5">
              <Col xs={12}>
                <a
                  href="mail:monudhaka829@gmail.com"
                  className="clr_red ff_Inter fw_700 fs_3xl"
                >
                  contact@eyona.co
                </a>
                <div className="pb-3 d-flex flex-column align-items-start">
                  <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                    Terms &
                  </p>
                  <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                    Conditions
                  </p>
                  <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white">
                    Privacy Policy
                  </p>
                </div>
              </Col>
              <Col
                xs={6}
                className="d-flex justify-content-start align-items-end"
              >
                <div>
                  <p className="clr_red ff_Inter fw_700 fs_3xl">London</p>
                  <div className="pb-3 d-flex flex-column align-items-start">
                    <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                      77 Farringdon
                    </p>
                    <p className="position-relative hover_line d-inline-block pointer ff_Inter fw_400 fs_sm clr_light_white mb-2">
                      Road
                    </p>
                    <p className="position-relative hover_line d-inline-block pointer mb-2 ff_Inter fw_400 fs_sm clr_light_white">
                      London
                    </p>
                    <p className="position-relative hover_line d-inline-block pointer ff_Inter mb-sm-5 mb-3 fw_400 fs_sm clr_light_white">
                      EC1m 3JU
                    </p>
                    <span>
                      <img
                        src={in_img}
                        alt="in_img"
                        className="pointer mb-sm-4 mb-3 mb-lg-0 hover_scale"
                      />
                    </span>
                  </div>
                </div>
              </Col>
              <Col
                lg={4}
                sm={6}
                xs={12}
                className="d-flex justify-content-lg-center justify-content-start"
              >
                <div>
                  <p className="clr_red ff_Inter fw_700 fs_3xl">Cape Town</p>
                  <div className="pb-3 d-flex flex-column align-items-start">
                    <p className="pointer position-relative hover_line d-inline-block ff_Inter fw_400 fs_sm clr_light_white mb-2">
                      4 Alphons way,
                    </p>
                    <p className="pointer position-relative hover_line d-inline-block mb-2 ff_Inter fw_400 fs_sm clr_light_white">
                      Tokai, Cape Town,
                    </p>
                    <p className="pointer position-relative hover_line d-inline-block ff_Inter fw_400 fs_sm clr_light_white">
                      Western Cape 7420,
                    </p>
                    <p className="pointer position-relative hover_line d-inline-block ff_Inter fw_400 fs_sm clr_light_white">
                      ZA
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
