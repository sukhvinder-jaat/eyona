import React from "react";
import team_1 from "../assets/img/svg/team_1.svg";
import team_2 from "../assets/img/svg/team_2.svg";
import team_3 from "../assets/img/svg/team_3.svg";
import team_4 from "../assets/img/svg/team_4.svg";
import team_5 from "../assets/img/svg/team_5.svg";
import team_6 from "../assets/img/svg/team_6.svg";
import team_7 from "../assets/img/svg/team_7.svg";
import team_8 from "../assets/img/svg/team_8.svg";
import Slider from "react-slick";

const Team = () => {
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
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="bg_nav_black py-5">
      <div className="trust_container">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw_700 ff_Inter fs_7xl clr_white text-nowrap position-relative eyona-text">
            Our Management Team
          </p>
          <div className="d-none d-xxl-block">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_1} alt="team_1" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Stephan
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm">
                  Chief Operations Officer
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-xxl-block">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_2} alt="team_1" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Larnelle
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm">
                  Human Resources
                </p>
              </div>
            </div>
          </div>
          <div className="d-none d-xxl-block">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_3} alt="team_1" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="ff_Inter fw_500 fs_xl clr_white text-center">
                  Richard
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm text-center">
                  Head of Client Management
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slider {...settings} className="py-5 justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_4} alt="team_4" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Ashiana
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm">Head Analyst</p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_5} alt="team_5" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Danielle
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm">
                  DevOps Manager
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_6} alt="team_6" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Sharon
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm">
                  Head of Data Process
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_7} alt="team_7" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white text-center">
                  Ian
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm text-center">
                  Head of Systems Architecture
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <div className="profile_box mx-4 position-relative overflow-hidden show_box_big rounded-circle">
              <img src={team_8} alt="team_8" className="w-100" />
              <div className="d-flex flex-column justify-content-center align-items-center bg_red w-100 position-absolute translate-middle-y h-100  start-0 rounded-circle red_box">
                <p className="text-center ff_Inter fw_500 fs_xl clr_white">
                  Sven
                </p>
                <p className="fw_500 ff_Inter clr_white fs_sm text-center">
                  National Operations Manager
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Team;
