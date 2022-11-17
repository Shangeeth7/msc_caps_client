import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import { Col, Row } from "antd";
import Mechanic from "../components/Mechanic";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
function Home() {
  const [mechanics, setMechanics] = useState([]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(
        "https://motorcycle-servicing-company.herokuapp.com/api/user/get-all-approved-mechanics",
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.success) {
        setMechanics(response.data.data);
      }
    } catch (error) {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <h3 className="page-header">
        Choose a Mechanic according to your Motorcycle type
      </h3>
      <Row gutter={20}>
        {mechanics.map((mechanic) => (
          <Col span={8} xs={24} sm={24} lg={8}>
            <Mechanic mechanic={mechanic} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}

export default Home;
