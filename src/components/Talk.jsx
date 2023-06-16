import React from "react";
import { Row, Col } from "react-bootstrap";
import in_img from "../assets/img/svg/in.svg";
export const Talk = () => {
  return (
    <div className="position-relative">
      <div className="bg_nav_black overflow-hidden">
        <div className="magic_container py-xl-5 py-4 my-xl-5">
          <Row className="py-xl-5 justify-content-between contact align-items-center py-4">
            <Col
              xl={6}
              xs={12}
              className="col-lg-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <p className="fw_700 ff_Inter fs_9xl clr_white text-nowrap position-relative contact-text z-5 d-inline">
                Let’s Talk
              </p>
              <p className="fw_400 ff_Inter fs_lg clr_light_black pt-4 mt-2 mx_500">
                We would love to hear from you. Fill out the form or contact us
                sending an email to:
              </p>
              <a className="fw_700 ff_Inter fs_xl clr_red mt-4" href="#">
                contact@eyona.co
              </a>
              <a className="d-flex justify-content-start mt-4" href="#">
                <img src={in_img} alt="in_img" />
              </a>
            </Col>
            <Col xl={5} xs={12} className="pt-5 pt-xl-0" data-aos="fade-left">
              <form>
                <div className="border_bottom pb-2 ">
                  <input
                    className="fw_400 py-3 ps-2 ff_Inter fs_sm clr_white_1 bg-transparent your_input w-100"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="pb-2 ">
                  <input
                    className="bg-transparent py-3 ps-2 fw-400 font-xs clr_white your_input w-100"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <p className="text-danger d-none">email is required</p>
                <div className="pb-2">
                  <textarea
                    type="text"
                    placeholder="What would you like to know?"
                    className="fw-400 font-xs bg-transparent w-100 clr_white pt-3 pb-xl-5 pb-3 ps-2 your_input w-100"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="fw-700 ff_Montserrat fs_md clr_white bg_red border-0 rounded-pill message_btn mt-lg-5 mt-2"
                >
                  Send Message
                </button>
              </form>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bg-clr_white-dark overflow-hidden w-0 d-none py-5">
        <div className="container container-modified min-vh-100 d-flex align-items-center"></div>
      </div>
    </div>
  );
};
