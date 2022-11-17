import { Carousel, PageHeader, Divider, Layout, Button, Popover } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

import React from "react";
import "./carousel.css";
const { Footer } = Layout;

function Carousels() {
  let content,
    content1,
    content2,
    content3,
    content4,
    content5,
    content6,
    content7;
  content = (
    <div>
      <p>
        <CaretRightOutlined />
        For the time in motorcycle services you can choose your Mechanic
      </p>
      <p>
        <CaretRightOutlined />
        We know , your Bike is your Top priority. So we provide you with variety
        of Mechanics
      </p>
      <p>
        <CaretRightOutlined />
        You can choose them according to their Specialization and Experience
      </p>
    </div>
  );
  content1 = (
    <div>
      <p>
        <CaretRightOutlined />
        Routine checkup and service
      </p>
      <p>
        <CaretRightOutlined />
        Oil and Filter Changes
      </p>
      <p>
        <CaretRightOutlined />
        Water wash and lubricants
      </p>
      <p>
        <CaretRightOutlined />
        Lights check and Battery Recharge
      </p>
    </div>
  );
  content2 = (
    <div>
      <p>
        <CaretRightOutlined />
        Spareparts Repair
      </p>
      <p>
        <CaretRightOutlined />
        Spareparts Only replaced when its efficiency is not recommended
      </p>
      <p>
        <CaretRightOutlined />
        Every Insurance companies covered
      </p>
    </div>
  );
  content3 = (
    <div>
      <p>
        <CaretRightOutlined />
        Foam Wash
      </p>
      <p>
        <CaretRightOutlined />
        Chain lubricants
      </p>
      <p>
        <CaretRightOutlined />
        Tyre check
      </p>
    </div>
  );
  content4 = (
    <div>
      <p>
        <CaretRightOutlined />
        We are Hiring fersh and experienced mechanics
      </p>
      <p>
        <CaretRightOutlined />
        Sign Up for more details -{" "}
        <Link to="/register" style={{ color: "orange" }}>
          click here
        </Link>
      </p>
    </div>
  );
  content5 = (
    <div>
      <p>
        <CaretRightOutlined />
        We Deliver your Motorcycle within 6 Hrs on General Service
      </p>
      <p>
        <CaretRightOutlined />
        Water Wash is done within an hour
      </p>
      <p>
        <CaretRightOutlined />
        Spareparts servicing time may take long (or) vary upon the parts that
        being fixed or replaced
      </p>
    </div>
  );
  content6 = (
    <div>
      <p>
        <CaretRightOutlined />
        We are Hiring fersh and experienced mechanics
      </p>
      <p>
        <CaretRightOutlined />
        Log in for more details
      </p>
    </div>
  );
  content7 = (
    <div>
      <p>
        <CaretRightOutlined />
        Gears available for Every types of Motorcycle
      </p>
      <p>
        <CaretRightOutlined />
        Come visit the store{" "}
        <a
          href="https://www.google.com/maps/place/Karumathampatti,+Tamil+Nadu/@11.1129085,77.1653398,14z/data=!3m1!4b1!4m5!3m4!1s0x3ba8ffcb711accab:0x434cbe20e94cf8de!8m2!3d11.1051541!4d77.1750461"
          target="blank"
          style={{ color: "orange" }}
        >
          <u>(Address)</u>
        </a>
      </p>
    </div>
  );
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="MSC"
        subTitle="Motorcycle Servicing Company"
        extra={[
          <Link to="/login">
            <h4 className="about-contact2 text-white">Login</h4>
          </Link>,

          <Divider dashed type="vertical" />,
          <Link to="/register">
            <h4 className="about-contact2 text-white">Sign up</h4>
          </Link>,
          <Divider dashed type="vertical" />,
          <Link to="/message">
            <h4 className="about-contact2 text-white">Get in Touch</h4>
          </Link>,
        ]}
      />
      <div className="carousel-all">
        <Carousel>
          <Popover
            content={content}
            title="What seperates us from other Motorcycle services"
            placement="bottom"
          >
            <div>
              <h3 className="carousel-each">
                <h2 className="first-linec">Why Choose us ?</h2>
              </h3>
            </div>
          </Popover>
          <Popover
            content={content1}
            title="General Service"
            placement="bottom"
          >
            <div>
              <h3 className="carousel-each1">
                <h2 className="first-linec">General Service</h2>
              </h3>
            </div>
          </Popover>
          <Popover content={content2} title="Spareparts" placement="bottom">
            <div>
              <h3 className="carousel-each2">
                <h2 className="first-linec">Spareparts</h2>
              </h3>
            </div>
          </Popover>
          <Popover content={content3} title="Water wash" placement="bottom">
            <div>
              <h3 className="carousel-each3">
                <h2 className="first-linec">Water Wash</h2>
              </h3>
            </div>
          </Popover>
          <Popover content={content5} title="Delivery Time" placement="bottom">
            <div>
              <h3 className="carousel-each5">
                <h2 className="first-linec">
                  We Value your<span className="first-linec1">Time</span>
                </h2>
              </h3>
            </div>
          </Popover>

          <Popover
            content={content4}
            title="Apply for a job"
            placement="bottom"
          >
            <div>
              <h3 className="carousel-each4">
                <h2 className="first-linec">Carrier with us</h2>
              </h3>
            </div>
          </Popover>

          <Popover
            content={content7}
            style={{ color: "orange" }}
            title="Gear and Accessories"
            placement="bottom"
          >
            <div>
              <h3 className="carousel-each6">
                <h2 className="first-linec">Gears</h2>
              </h3>
            </div>
          </Popover>

          <div>
            <h3 className="carousel-each7">
              <h2 className="first-linec1">We would love to hear from You</h2>
              <h4 className="first-linec2">
                Leave us a message -
                <Link to="/message">
                  <span style={{ color: "darkorange" }}>
                    {" "}
                    <u>click here</u>
                  </span>
                </Link>
              </h4>
            </h3>
          </div>
        </Carousel>
      </div>
      <Footer style={{ textAlign: "center", backgroundColor: "transparent" }}>
        <h6>
          <span className="email-cc">
            E-mail : moto.service.centerr@gmail.com
            <Divider type="vertical" />
            Call us - 0422 2575833
            <br />
            <Divider type="vertical" />
            Address : Karumathampatti , Coimbatore
            <a
              href="https://www.google.com/maps/place/Karumathampatti,+Tamil+Nadu/@11.1129085,77.1653398,14z/data=!3m1!4b1!4m5!3m4!1s0x3ba8ffcb711accab:0x434cbe20e94cf8de!8m2!3d11.1051541!4d77.1750461"
              target="blank"
              style={{ color: "orange" }}
            >
              (G-map)
            </a>
          </span>
        </h6>
        <Divider />
        <span className="email-cc">
          © Copyright 2022 - Motorycle Servicing Company All Rights Reserved.
        </span>
      </Footer>
    </div>
  );
}
export default Carousels;
