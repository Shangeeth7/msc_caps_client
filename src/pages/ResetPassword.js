import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Form, Input, PageHeader, Divider } from "antd";
import { PasswordInput } from "antd-password-input-strength";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const resetPassword = async () => {
    try {
      toast.loading();
      const response = await axios.post("/api/user/resetpassword", {
        password,
        token: params.token,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error("Expired or Invalid Link");
      }
      toast.dismiss();
    } catch (error) {
      toast.dismiss();
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
        <div className="authentication-form card p-3 ">
          <h1 className="text-white">
            Reset <span className="bavckss">Password</span>{" "}
          </h1>

          <PasswordInput
            rules={[{ required: true }, { min: 6 }]}
            // type="password"
            className="py-1  px-3 border-2 border-secondary focus:outline-none w-full"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {password.length > 0 && password.length < 6 ? (
            <span className="foredddr">
              'password' should contain min 6 characters
            </span>
          ) : (
            <span></span>
          )}
          <br />
          <Input.Password
            type="password"
            className="py-1 px-3  border-2 border-secondary focus:outline-none w-full"
            placeholder="confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmpassword}
          />
          <br />

          <div className="flex justify-between items-end">
            {password === confirmpassword ? (
              <Button
                className="buttonss my-2 full-width-button"
                onClick={resetPassword}
              >
                RESET PASSWORD
              </Button>
            ) : (
              <span className="text-white">Fill the Required Feilds</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
