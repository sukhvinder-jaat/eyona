import React from "react";
import { Col, Row } from "react-bootstrap";
import nav_logo from "../assets/img/svg/nav_logo.svg";
import nav_logo_top from "../assets/img/svg/hero_logo.svg";
import in_img from "../assets/img/svg/in.svg";
import nav_circle from "../assets/img/svg/nav_circle.svg";
import cross from "../assets/img/svg/nav_cross.svg";
import nav_btn from "../assets/img/svg/nav_btn.svg";
import circle_center from "../assets/img/svg/nav_center.svg";
import side_circle from "../assets/img/svg/hero_side_circle.svg";
import laptop from "../assets/img/webp/herocomputer.webp";
import graph from "../assets/img/webp/heroimggraph.webp";
import meeting from "../assets/img/webp/heromeeting.webp";
import people from "../assets/img/webp/people.webp";
import elogo from "../assets/img/svg/elogo.svg";
export const Hero = () => {
  const [First, setFirst] = React.useState(true);
  function clickshow() {
    setFirst(!First);
  }
  if (!First) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div className="vh_100_1920 position-relative overflow-hidden d-flex flex-column py-lg-5 py-3 px-lg-5 px-4">
      <span className="position-absolute end-0 top-0 z-n1">
        <img src={side_circle} alt="side_circle" className="w-100" />
      </span>
      {/* hero */}
      <div className="flex-grow-">
        <div className="d-flex align-items-center justify-content-between">
          <span>
            <img src={nav_logo_top} alt="nav_logo_top" />
          </span>
          <h2 onClick={clickshow} className="pointer position-relative Z-3">
            {First ? (
              <img src={nav_btn} alt="nav_btn" />
            ) : (
              <img src={nav_btn} alt="nav_btn" />
            )}
          </h2>
        </div>
        <div className="d-flex justify-content-between">
          <div className={`nav_show ${First ? "" : "ps-0 showw"}`}>
            <div className="bg_nav_black py-4 vh_100_1920 position-relative">
              <img
                src={nav_circle}
                alt="nav_circle"
                className="position-absolute nav_circle end-0 top-0"
              />
              <div className="mx-md-5 mx-sm-3 mx-1">
                <div className="d-flex justify-content-between align-items-center">
                  <span>
                    <img src={nav_logo} alt="nav_logo" className="w-100" />
                  </span>
                  <span className="pointer">
                    <h2
                      onClick={clickshow}
                      className="pointer position-relative z-3"
                    >
                      {First ? (
                        <img src={cross} alt="cross" className="w-100" />
                      ) : (
                        <img src={cross} alt="cross" className="w-100" />
                      )}
                    </h2>
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
                          <p className="clr_red ff_Inter fw_700 fs_3xl">
                            London
                          </p>
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
                          <p className="clr_red ff_Inter fw_700 fs_3xl">
                            Cape Town
                          </p>
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
          </div>
        </div>
      </div>
      <div className="hero_container d-flex align-items-xxl-center flex-grow-1 pb-5">
        <Row className="py-xxl-5 pt-4">
          <Col
            xxl={5}
            md={8}
            xs={12}
            className="d-flex justify-content-lg-end justify-content-center align-items-start position-relative"
          >
            {/* <div className="position-absolute top-50 start-50 translate-middle">
              <div className="position-relative top_img">
                <img
                  src={circle_center}
                  alt="circle_center"
                  className="hero_circle_w position-relative z-3 hero_top"
                />
              </div>
            </div> */}
            <div className="d-grid tranform_image_hero">
              <div className="heroitem heroitems1 p-sm-2 p-1">
                <img src={laptop} alt="laptop" className="w-100" />
              </div>
              <div className="heroitem heroitems2 p-sm-2 p-1">
                <img src={graph} alt="graph" className="w-100 h-100" />
              </div>
              <div className="heroitem heroitems3 p-sm-2 p-1">
                <img src={meeting} alt="meeting" className="w-100" />
              </div>
              <div className="heroitem heroitems4 p-sm-2 p-1">
                <img src={people} alt="people" className="w-100" />
              </div>
              <div className="heroitem heroitems5 p-sm-2 p-1">
                <img src={elogo} alt="elogo" className="w-100 hero_top" />
              </div>
            </div>
          </Col>
          <Col
            xxl={7}
            xs={12}
            className="px-xxl-5 head_padding d-flex align-items-center"
          >
            <div className="px-xxl-5">
              <p className="ff_Montserrat fw_700 fs_5xl clr_hero_black">
                We’re a multi-product company specialising in B2B products.
              </p>
              <p className="ff_Montserrat fw_400 fs_sm clr_hero_light">
                Eyona is a team of dedicated, passionate people building B2B
                software for the FMCG industry.
              </p>
              <button className="touch_btn overflow-hidden position-relative bg_red border-0 ff_Montserrat fw_700 fs_md rounded-pill clr_white">
                Get In Touch
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
