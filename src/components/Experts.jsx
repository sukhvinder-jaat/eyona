import React from "react";
import { Col, Row } from "react-bootstrap";
import soft_1 from "../assets/img/svg/soft_1.svg";
import soft_2 from "../assets/img/svg/soft_2.svg";
import soft_3 from "../assets/img/svg/soft_3.svg";
import soft_4 from "../assets/img/svg/soft_4.svg";
import side_img from "../assets/img/png/world_img.png";
import world_circle from "../assets/img/svg/world_circle.svg";
import expert_circle from "../assets/img/svg/expert_circle.svg";
export const Experts = () => {
  return (
    <div className="py-md-5 pb-3 pt-5 position-relative">
      <span className="position-absolute end-0 top-0 d-md-block d-none">
        <img src={expert_circle} alt="expert_circle" className="w-100" />
      </span>
      <p
        className="mb-0 ff_Inter fw_700 lh-1 fs_12xl clr_nav_black ps-lg-5 ps-2"
        data-aos="fade-down-right"
      >
        Eyona are
      </p>
      <p
        className="text-end mb-0 ff_Inter fw_700 fs_11xl text-nowrap pe-lg-5 pe-2 position-relative"
        data-aos="fade-down-left"
      >
        <span className="position-absolute start-0 top-0">
          <img src={world_circle} alt="world_circle" className="w-100" />
        </span>
        <span className="world_text">World Class</span>
        <span className="clr_red">Experts</span>
      </p>
      {/* text */}
      <div className="trust_container pt-xl-5 pt-3">
        <Row>
          <Col xl={6} xs={12} className="pe-xl-5 d-flex align-items-center">
            <p
              className="ff_Montserrat fw_400 clr_gray pb-xl-0 pb-3 fs_xl"
              data-aos="flip-up"
            >
              We create <span className="clr_red">SaaS products</span> for
              markets that have the ability to generate substantial annual
              recurring revenue (ARR). Leveraging big data and automating matket
              facing business processes.
            </p>
          </Col>
          <Col xl={6} xs={12} data-aos="flip-down">
            <img src={side_img} className="w-100" alt="" />
          </Col>
        </Row>
        {/* software */}
        <Row className="py-5">
          <Col xxl={5} lg={6} xs={12} data-aos="zoom-in">
            <div>
              <div className="man_box rounded-circle">
                <img src={soft_1} alt="soft_1" className="w-100" />
              </div>
              <p className="ff_Montserrat fw_700 clr_nav_black fs_4xl pt-3">
                B2B Software
              </p>
              <p className="ff_Montserrat fw_400 fs_lg clr_gray">
                Our products are the forefront of the industry, creating
                streamlined processing for your business needs.
              </p>
            </div>
          </Col>
          <Col xxl={2} className="d-xxl-block d-none"></Col>
          <Col
            xxl={5}
            lg={6}
            xs={12}
            className="py-lg-5 pe-xxl-0 pe-4"
            data-aos="zoom-in-down"
          >
            <div className="pt-sm-5 pt-3">
              <div className="man_box rounded-circle">
                <img src={soft_2} alt="soft_2" className="w-100" />
              </div>
              <p className="ff_Montserrat fw_700 clr_nav_black fs_4xl pt-3">
                Eco-system Ownership
              </p>
              <p className="ff_Montserrat fw_400 fs_lg clr_gray">
                We provide ourselves on making our products easy to use and
                personalised for your business needs.
              </p>
            </div>
          </Col>
          {/* 2 */}
          <Col
            xxl={5}
            lg={6}
            xs={12}
            className="py-lg-5 pt-3 pe-xxl-0 pe-4"
            data-aos="zoom-in-up"
          >
            <div>
              <div className="man_box rounded-circle">
                <img src={soft_3} alt="soft_1" className="w-100" />
              </div>
              <p className="ff_Montserrat fw_700 clr_nav_black fs_4xl pt-3">
                Globally Relevant
              </p>
              <p className="ff_Montserrat fw_400 fs_lg clr_gray">
                All our software if fit for purpose and easy to scale across
                your organisation in any country.
              </p>
            </div>
          </Col>
          <Col xxl={2} className="d-xxl-block d-none"></Col>
          <Col
            xxl={5}
            lg={6}
            xs={12}
            className="py-3 pe-xxl-0 pe-lg-3 mt-lg-5"
            data-aos="zoom-out"
          >
            <div className="pt-lg-5">
              <div className="man_box rounded-circle">
                <img src={soft_4} alt="soft_2" className="w-100" />
              </div>
              <p className="ff_Montserrat fw_700 clr_nav_black fs_4xl pt-3">
                Eco-system Ownership
              </p>
              <p className="ff_Montserrat fw_400 fs_lg clr_gray">
                Our products are the forefront of the industry, creating
                streamlined processing for your business needs.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
