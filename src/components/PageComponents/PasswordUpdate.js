import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { updatePassword } from "../../redux/actions/userActions";
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Layout from "../../layout/Layout";
import MetaData from "../other/MetaData";

const PasswordUpdatePage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handlePasswordUpdate = async (values) => {
    try {
      await dispatch(
        updatePassword(values.currentPassword, values.newPassword)
      );
    } catch (error) {
      // Handle any error that occurred during the password update
      console.error("Error updating password:", error);
      message.error("An error occurred. Please try again.");
      console.log("currentPassword", values.currentPassword);
    }
  };

  return (
    <Layout>
      <MetaData title={"Affiliated Refer"} />
      <div>
        <div style={{ marginTop: "50px", marginLeft: "220px" }}>
          <NavLink to={"/settings"} className="inline-block hover:text-black">
            <BsArrowLeft style={{ width: "24px", height: "24px" }} />
          </NavLink>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="mb-10 font-semibold text-xl text-gray-600">
            Change Password
          </h2>
          {/* Password update form */}
          <Form form={form} onFinish={handlePasswordUpdate}>
            <Form.Item
              name="currentPassword"
              label="Current Password"
              rules={[
                {
                  required: true,
                  message: "Please enter your current password",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Please enter a new password",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" className="bg-blue-500" htmlType="submit">
                Update Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

export default PasswordUpdatePage;
