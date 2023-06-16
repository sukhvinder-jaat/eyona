import React from "react";
import { Col } from "react-bootstrap";
import truedata from "../assets/img/svg/truedata.svg";
import true_crical from "../assets/img/svg/true_crical.svg";
import true_big from "../assets/img/webp/true_big.webp";
import true_yellow from "../assets/img/svg/true_yellow.svg";
import repforce from "../assets/img/svg/repforce.svg";
import repforce_big from "../assets/img/webp/repforce_big.webp";
import assetforce from "../assets/img/svg/assetforce.svg";
import easyhr from "../assets/img/svg/easyhr.svg";
import easyhr_crical from "../assets/img/webp/arivu_crical.svg";
import assetforce_big from "../assets/img/webp/set_big.svg";
import easyhr_big from "../assets/img/webp/easy_hrbig.svg";
import arivu from "../assets/img/svg/arivu.svg";
import arivu_big from "../assets/img/webp/arivu_big.webp";
import zoosh from "../assets/img/svg/zoosh.svg";
import zoosh_big from "../assets/img/webp/zoosh_big.webp";
import arivu_crical from "../assets/img/webp/arivu_crical.svg";
import zoosh_jus from "../assets/img/svg/zoosh_jus.svg";
import zoosh_ice from "../assets/img/svg/zoosh_ice.svg";
import zoosh_mint from "../assets/img/svg/zoosh_mint.svg";
import zoosh_mint_s from "../assets/img/svg/zoosh_mint_s.svg";
import easyhr_lines from "../assets/img/svg/easyhr_lines.svg";
import Slider from "react-slick";
const Our = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section>
      <div className="magic_container py-md-5 pb-5 pt-0">
        <div
          className="d-flex flex-column align-items-center text-center"
          data-aos="zoom-out-up"
        >
          <p className="fw_700 ff_Inter fs_10xl clr_black">Our products.</p>
          <p className="fw_400 ff_Inter fs_lg clr_grey max_w_820 lh_40">
            We exclusively create and build B2B software. This specialization
            has helped us build unmatched deep domain expertise for global fit
            and scale.
          </p>
        </div>
        <Slider {...settings} className="pt-lg-5 pt-4 our_dot">
          <Col lg={6} data-aos="zoom-out-right">
            <div className="p-3 h-100">
              <div className="truedata overflow-hidden position-relative h-100">
                <div className="position-absolute d-none d-xl-block">
                  <img src={true_yellow} alt="true_yellow" />
                </div>
                <div className="px-xl-5 p-3 pt-xl-5 mt-xl-4 pb-0">
                  <img src={truedata} alt="truedata" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2 mb-0 mb-xl-2">
                    Data Unifying & Analytics Platform
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30 max_w_508">
                    Basecamp software to automate the collation, cleaning,
                    integrating and visualising for all of your businesses
                    market facing sales data across all channels.
                  </p>
                </div>
                <div className="pt-4 pt-lg-0">
                  <img className="w-100" src={true_big} alt="true_big" />
                  <img
                    className="position-absolute bottom-0 start-50"
                    src={true_crical}
                    alt="true_crical"
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="p-3 h-100" data-aos="zoom-out-left">
              <div className="repforce position-relative  h-100 d-flex flex-column justify-content-between">
                <div className="p-xl-5 p-3 ps-4 mt-xl-4 pb-0">
                  <img src={repforce} alt="repforce" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2 mb-0 mb-xl-2">
                    Field Sales Automation Software
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30">
                    Provides superior field sales routing capability, retail
                    execution management and sales order integration for mobile
                    workforces within businesses.
                  </p>
                </div>
                <div className="position-relative">
                  <img
                    className="w-100"
                    src={repforce_big}
                    alt="repforce_big"
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-xl-5 pt-xl-5" data-aos="zoom-out-right">
            <div className="p-3 h-100 ">
              <div className="assetforce overflow-hidden position-relative h-100  d-flex flex-column justify-content-between">
                <div className="p-xl-5 p-3 mt-xl-4 pb-0">
                  <img src={assetforce} alt="assetforce" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2 mb-0 mb-xl-2">
                    Facility & Maintenance Management Software
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30 max_w_508">
                    Web and mobile-based CMMS software that offers asset
                    management, downtime tracking & workflow automation
                    solutions of businesses.
                  </p>
                </div>
                <div>
                  <img
                    className="w-100"
                    src={assetforce_big}
                    alt="assetforce_big"
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-xl-5 pt-xl-5" data-aos="zoom-out-right">
            <div className="p-3 h-100 ">
              <div className="repforce overflow-hidden position-relative h-100  d-flex flex-column justify-content-between">
                <div className="position-absolute easyhr_crical d-none d-xl-block">
                  {/* <img src={easyhr_crical} alt="easyhr_crical"/> */}
                </div>
                <div className="position-absolute easyhr_lines d-none d-xl-block">
                  <img src={easyhr_lines} alt="easyhr_lines" />
                </div>
                <div className="p-xl-5 ps-xl-4 p-3 mt-xl-4 pb-0">
                  <img src={easyhr} alt="easyhr" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2 mb-0 mb-xl-2">
                    HR Management Software
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30 max_w_508">
                    Human resource software solution that combines several
                    systems and processes to manage and optimize daily HR tasks
                    and the overall HR goals of a given organization.
                  </p>
                </div>
                <div className="position-relative">
                  <img
                    className="w-100 easyhr_big"
                    src={easyhr_big}
                    alt="easyhr_big"
                  />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-xl-5 pt-xl-5" data-aos="zoom-out-right">
            <div className="p-3 h-100 ">
              <div className="zoosh overflow-hidden position-relative h-100  d-flex flex-column justify-content-between">
                <div>
                  <img
                    className="position-absolute zoosh_jus d-none d-xl-block"
                    src={zoosh_jus}
                    alt="zoosh_jus"
                  />
                  <img
                    className="position-absolute zoosh_ice d-none d-xl-block"
                    src={zoosh_ice}
                    alt="zoosh_ice"
                  />
                  <img
                    className="position-absolute zoosh_mint d-none d-lg-block"
                    src={zoosh_mint}
                    alt="zoosh_mint"
                  />
                  <img
                    className="position-absolute zoosh_mint_s"
                    src={zoosh_mint_s}
                    alt="zoosh_mint_s"
                  />
                </div>
                <div className="pt-xl-5 px-xl-5 p-3 mt-xl-4 pb-0">
                  <img src={zoosh} alt="zoosh" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2 mb-0 mb-xl-2">
                    Gig Economy for Activations
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30 max_w_508">
                    Interconnected ecosystem for promotions management. Where
                    brands and agencies promote products and capture consumer
                    feedback and behaviour.
                  </p>
                </div>
                <div>
                  <img className="w-100" src={zoosh_big} alt="zoosh_big" />
                </div>
              </div>
            </div>
          </Col>

          <Col lg={6} className="mt-xl-5 pt-xl-5" data-aos="zoom-out-right">
            <div className="p-3 h-100 ">
              <div className="arivu overflow-hidden position-relative h-100  d-flex flex-column justify-content-between">
                <div className="position-absolute arivu_crical d-none d-xl-block">
                  <img src={arivu_crical} alt="arivu_crical" />
                </div>
                <div className="pt-xl-5 ps-xl-4 pe-xl-5 p-3 ps-lg-4 mt-xl-4 pb-0">
                  <img src={arivu} alt="arivu" />
                  <p className="fw_700 ff_Inter fs_2xl clr_black pt-xl-5 pt-2">
                    Learning Management Software
                  </p>
                  <p className="fw_400 ff_Inter fs_sm clr_grey mb-0 pt-2 lh_30 max_w_508">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="position-relative">
                  <img className="w-100" src={arivu_big} alt="arivu_big" />
                </div>
              </div>
            </div>
          </Col>
        </Slider>
      </div>
    </section>
  );
};

export default Our;
