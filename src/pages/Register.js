import { Button, Form, Input, PageHeader, Divider } from "antd";
import { PasswordInput } from "antd-password-input-strength";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { LockOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="MSC"
        subTitle="Motorcycle Servicing Company"
        extra={[
          <Link to="/about-us">
            <h4 className="about-contact text-white">About</h4>
          </Link>,

          <Divider dashed type="vertical" />,
          <Link to="/message">
            <h4 className="about-contact text-white">Get in Touch</h4>
          </Link>,
        ]}
      />
      <div className="authentication">
        <div className="authentication-form card p-3">
          <h1 className="text-white">
            Nice To Meet <span className="bavckss">Ya</span>
          </h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              rules={[{ required: true }, { min: 2, max: 24 }]}
              label={<label style={{ color: "white" }}>Name</label>}
              name="name"
            >
              <Input className="height-inputts" placeholder="Name" />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>E-mail</label>}
              rules={[{ type: "email" }, { required: true }]}
              name="email"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              label={<label style={{ color: "white" }}>Password</label>}
              rules={[{ min: 6 }, { required: true }]}
              name="password"
            >
              <PasswordInput
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                type="password"
              />
            </Form.Item>

            <Button
              className="buttonss my-2 full-width-button"
              htmlType="submit"
            >
              REGISTER
            </Button>

            <Link to="/login" className="anchor mt-2">
              Already a user ? <span className="bavckss">LOGIN</span>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
