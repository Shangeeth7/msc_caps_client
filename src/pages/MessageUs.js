import { Button, Form, Input, PageHeader, Divider } from "antd";
import { PasswordInput } from "antd-password-input-strength";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";
import { hideLoading, showLoading } from "../redux/alertsSlice";
import { LockOutlined, UserOutlined, IdcardOutlined } from "@ant-design/icons";
const { TextArea } = Input;

function MessageUs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (isNaN(values.phoneNumber)) {
      toast.error("Phone number not valid");
    } else {
      try {
        dispatch(showLoading());
        const response = await axios.post("/api/user/message", values);
        dispatch(hideLoading());
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/about-us");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        dispatch(hideLoading());
        toast.error("Something went wrong");
      }
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
          <Link to="/register">
            <h4 className="about-contact text-white">Sign Up</h4>
          </Link>,
        ]}
      />
      <div className="authentication">
        <div className="authentication-form card p-3">
          <h1 className="text-white">
            Tell us what you <span className="bavckss">Think</span>
          </h1>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              rules={[{ required: true }, { min: 2, max: 16 }]}
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
              label={<label style={{ color: "white" }}>Phone Number</label>}
              rules={[{ required: true }, { min: 7 }]}
              name="phoneNumber"
            >
              <Input placeholder="Phone Number" />
            </Form.Item>
            <Form.Item
              rules={[{ required: true }, { min: 6, max: 240 }]}
              label={<label style={{ color: "white" }}>Message</label>}
              name="message"
            >
              <TextArea
                allowClear
                className="height-inputts"
                placeholder="Tell us Something"
              />
            </Form.Item>

            <Button
              className="buttonss my-2 full-width-button"
              htmlType="submit"
            >
              Send Message
            </Button>
          </Form>
          <div className="link-anchor">
            <Link to="/register" className="anchor mt-2">
              New ? <span className="bavckss">REGISTER</span>
            </Link>
            <Link to="/login" className="anchor mt-2">
              New user..? <span className="bavckss">LOGIN</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageUs;
