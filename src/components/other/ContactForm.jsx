import React, { useEffect, useState } from "react";
import { Spin, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendContactUsData } from "../../redux/actions/formsAction";

const ContactForm = ({ open, page }) => {
  const dispatch = useDispatch();
  const { loading, success, message, error } = useSelector(
    (state) => state.formReducer
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      notification.info({
        message: "Please fill all the fields.",
        duration: 3,
      });
    } else {
      dispatch(sendContactUsData({ ...formData, page }));
    }
  };

  useEffect(() => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }, [open]);

  useEffect(() => {
    if (success) {
      notification.success({
        message: message,
        duration: 3,
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }

    if (error) {
      notification.error({
        message: error,
        duration: 3,
      });
    }

    if (error || success) {
      dispatch({ type: "FORM_SUBMIT_RESET" });
    }
  }, [success, message, error, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 items-center">
        <input
          type="text"
          name="name"
          className="bg-[#eeeef0] outline-none transition-all duration-300 ease-in-out px-4 py-3 rounded-md w-full text-sm border border-[#d9d9d9] hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0]"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          className="bg-[#eeeef0] outline-none transition-all duration-300 ease-in-out px-4 py-3 rounded-md w-full text-sm border border-[#d9d9d9] hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0]"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          value={formData.message}
          cols="30"
          rows="5"
          className="bg-[#eeeef0] outline-none transition-all duration-300 ease-in-out px-4 py-3 rounded-md min-h-[80px] text-sm border border-[#d9d9d9] hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0]"
          placeholder={
            page === "support"
              ? "Please describe your problems in detail, but do not share any sensitive information or credentials in the case..."
              : "Please state your concerns and add necessary details here…"
          }
          onChange={handleChange}
        ></textarea>

        {loading ? (
          <Spin />
        ) : (
          <button
            type="submit"
            className={`${
              page === "support"
                ? "bg-[#f26422] hover:text-[#f26422] hover:bg-transparent border border-[#f26422]"
                : ""
            } transition-all duration-300 ease-in-out max-w-max cursor-pointer px-3 py-1 rounded-[5px] text-white text-sm`}
          >
            Send
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
