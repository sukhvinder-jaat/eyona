import React from "react";
import { Col, Row } from "react-bootstrap";
import magic_img from "../assets/img/png/magic_img.png";
export const Magic = () => {
  return (
    <div className="py-5 pt-lg-5 pb-3">
      <div className="magic_container">
        <Row className="align-items-center">
          <Col xl={6} xs={12} className="pe-xxl-4" data-aos="fade-right">
            <p className="ff_Inter fw_700 clr_nav_black fs_10xl lh-sm">
              How we make <span className="clr_red">magic</span> happen.
            </p>
            <p
              className="ff_Inter fw_400 fs_lg clr_gray pe-lg-5 lh_40_lg mb-lg-5"
              data-aos="fade-right"
            >
              We seek breakthroughs that will stand the test of time. We keep
              experimenting that's how we innovate. Innovation we believe is
              admired but execution is worshipped. We love the problem and pain
              point and hence the journey more than the destination. We are
              constantly improving and meticulously refining our products
              foundation that has been built, and that is what we believe makes
              us great.
            </p>
            <p className="ff_Inter fw_400 fs_lg clr_gray pe-lg-5 lh_40_lg">
              We are passionately curious as we believe this is the fuel for
              discovery, inquiry and learning. Our main objective is to be
              customer obsessed and build products that are everyday utilities
              for businesses.
            </p>
          </Col>
          <Col xl={6} xs={12} className="py-5" data-aos="fade-left">
            <img src={magic_img} alt="magic_img" className="w-100" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
