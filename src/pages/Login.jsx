import { useState, useRef } from "react";
import { Form, Input, Button, Tabs } from "antd";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import SignUp from "./SignUp";
import Logo from "../assets/project-logo.svg";

import { authLogin } from "../redux";
import MetaData from "../components/other/MetaData";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [tabKey, setTabKey] = useState("1");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const captchaRef = useRef();
  const SITE_KEY = "6LezCOMoAAAAAHyWr3nsdF11-koCHhSrI14XHuZU";
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleCaptcha = (value) => {
    setRecaptchaValue(value);
  };

  const changeTab = (key) => {
    setTabKey(key);
  };

  const onFinish = async (values) => {
    let formValues = { ...values, recaptchaValue };

    setLoading(true);
    captchaRef.current.reset();
    await dispatch(authLogin(formValues, navigate));
    setLoading(false);
  };

  if (localStorage.getItem("token")) {
    return <Navigate replace to="/home" />;
  } else {
    return (
      <div className="login-body">
        <MetaData title={'Sign in to Affiliated Refer'} />
        <div className="signin">
          <Tabs
            defaultActiveKey="1"
            activeKey={tabKey}
            className="log-sign-tabs"
            onChange={changeTab}
          >
            <Tabs.TabPane key={"1"} tab={"Login"}>
              <Form
                name="login"
                className="login-form"
                layout="vertical"
                onFinish={onFinish}
              >
                {/* <img src={logo} /> */}
                <div className="header-container">
                  <img src={Logo} alt="" />
                  <h2>Log In</h2>
                </div>
                <Form.Item
                  name="email"
                  rules={[
                    // {
                    //   type: 'email',
                    //   message: 'The entered email is not valid!',
                    // },
                    {
                      required: true,
                      message: "Email/Username is Required",
                    },
                  ]}
                  label="Email or Username"
                >
                  <Input
                    autoComplete="off"
                    placeholder="Enter your email or username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Password is Required",
                    },
                  ]}
                  label="Password"
                >
                  {/* <Input.Password */}
                  <Input type="password" placeholder="Password..." />
                </Form.Item>

                <ReCAPTCHA
                  style={{ marginBottom: "15px", width: "400px" }}
                  className="recaptcha mobile:!w-[300px]"
                  sitekey={SITE_KEY}
                  onChange={handleCaptcha}
                  size="normal"
                  theme="light"
                  ref={captchaRef}
                />

                <Form.Item>
                  <Button loading={loading} type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
                <div className="back-to-login" onClick={() => setTabKey("2")}>
                  {`Register if you don't have an account`}
                </div>
              </Form>
              {/* <div className='login-btn'>
              <p>Do not have an account?</p>
              <div className='back-to-signup' onClick={() => navigate('/signup')}>
                SignUp
              </div>
            </div> */}
            </Tabs.TabPane>
            <Tabs.TabPane key={"2"} tab={"Register"}>
              <SignUp setTabKey={setTabKey} />
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default SignIn;
