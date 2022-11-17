import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "antd";
import "./mechanic.css";

function Mechanic({ mechanic }) {
  const navigate = useNavigate();

  const scooter = "Scooter/Gearless";
  const standard = "Standard/Normal";
  const sports = "Sports Bike";
  const cruiser = "Cruiser";

  return (
    <div>
      <div className="crrdd card p-2  ">
        {mechanic.specialization === scooter ? (
          <Carousel autoplay>
            <div>
              <h3 className="mech-scooter1">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-scooter2">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-scooter3">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
          </Carousel>
        ) : null}
        {mechanic.specialization === standard ? (
          <Carousel autoplay>
            <div>
              <h3 className="mech-standard1">
                <h2 className="first-mm"> {mechanic.specialization} </h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-standard2">
                <h2 className="first-mm" style={{ color: "white" }}>
                  {mechanic.specialization}
                </h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-standard3">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-standard4">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
          </Carousel>
        ) : null}
        {mechanic.specialization === cruiser ? (
          <Carousel autoplay>
            <div>
              <h3 className="mech-cruiser1">
                <h2 className="first-mm" style={{ color: "white" }}>
                  {mechanic.specialization}
                </h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-cruiser2">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-cruiser3">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-cruiser4">
                <h2 className="first-mm" style={{ color: "white" }}>
                  {mechanic.specialization}
                </h2>
              </h3>
            </div>
          </Carousel>
        ) : null}
        {mechanic.specialization === sports ? (
          <Carousel autoplay>
            <div>
              <h3 className="mech-sports1">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-sports2">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
            <div>
              <h3 className="mech-sports3">
                <h2 className="first-mm"> {mechanic.specialization}</h2>
              </h3>
            </div>
          </Carousel>
        ) : null}

        <div
          className="cursor-pointer"
          onClick={() => navigate(`/book-appointment/${mechanic._id}`)}
        >
          {mechanic.specialization === cruiser ? (
            <h1 className="card-title">
              Specialized in :<b> {mechanic.specialization} Bike</b>
            </h1>
          ) : (
            <h1 className="card-title">
              Specialized in :<b> {mechanic.specialization} </b>
            </h1>
          )}

          <hr />
          <p>
            <b>Name : </b>
            {mechanic.firstName} {mechanic.lastName}
          </p>
          <p>
            <b>Experience : </b>
            {mechanic.experience} years
          </p>

          <p>
            <b>Phone Number : </b>
            {mechanic.phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mechanic;
