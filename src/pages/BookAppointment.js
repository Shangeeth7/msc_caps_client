import { Button, Col, DatePicker, Row, TimePicker } from "antd";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import booknow from "./others-images/booknow.jpg";
function range(start, end) {
  const resultTimeDis = [];
  for (let i = start; i < end; i++) {
    resultTimeDis.push(i);
  }
  return resultTimeDis;
}

function disabledHours() {
  const hours = range(0, 60);
  hours.splice(7, 14);
  return hours;
}

function BookAppointment() {
  const [isAvailable, setIsAvailable] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const { user } = useSelector((state) => state.user);
  const [mechanic, setMechanic] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();

  const getMechanicData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/mechanic/get-mechanic-info-by-id",
        {
          mechanicId: params.mechanicId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        setMechanic(response.data.data);
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };
  const checkAvailability = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/check-booking-avilability",
        {
          mechanicId: params.mechanicId,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setIsAvailable(true);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };
  const bookNow = async () => {
    setIsAvailable(false);
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "/api/user/book-appointment",
        {
          mechanicId: params.mechanicId,
          userId: user._id,
          mechanicInfo: mechanic,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/appointments");
      }
    } catch (error) {
      toast.error("Error booking appointment");
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getMechanicData();
  }, []);
  return (
    <Layout>
      {mechanic && (
        <div>
          <h1 className="page-title">
            Specialized in :<b> {mechanic.specialization}</b>
          </h1>
          <hr />
          <Row gutter={20} className="mt-5" align="middle">
            <Col span={8} sm={24} xs={24} lg={8}>
              <img src={booknow} alt="book-now" width="100%" height="200" />
            </Col>
            <Col span={8} sm={24} xs={24} lg={8}>
              <h1 className="normal-text">
                <b>Name :</b> {mechanic.firstName} {mechanic.lastName}
              </h1>
              <p>
                {/* <b>Timings :</b> {mechanic.timings[0]} - {mechanic.timings[1]} */}
                <b>Timings :</b> 07:00 - 10:00
              </p>
              <p>
                <b>Phone Number : </b>
                {mechanic.phoneNumber}
              </p>

              <p>
                <b>Experience : </b>
                {mechanic.experience} years
              </p>

              <div className="d-flex flex-column pt-2 mt-2">
                <DatePicker
                  disabledDate={(current) => {
                    return current && current < moment().endOf("day");
                  }}
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                    setIsAvailable(false);
                  }}
                />
                <TimePicker
                  disabledHours={disabledHours}
                  placeholder="Time"
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    setIsAvailable(false);
                    setTime(moment(value).format("HH:mm"));
                  }}
                />
                {!isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={checkAvailability}
                  >
                    Check Availability
                  </Button>
                )}

                {isAvailable && (
                  <Button
                    className="primary-button mt-3 full-width-button"
                    onClick={bookNow}
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      )}
    </Layout>
  );
}

export default BookAppointment;
