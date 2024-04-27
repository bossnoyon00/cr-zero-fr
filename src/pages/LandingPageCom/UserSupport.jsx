import React, { useState } from "react";
import Footer from "./Footer";
import newCase from "../assets/assets/brifcase.svg";
import liveChat from "../assets/assets/livechat.svg";
import ContactForm from "../../components/other/ContactForm";
import { NavLink } from "react-router-dom";
import MetaData from "../../components/other/MetaData";

function UserSupport() {
  const [open, setOpen] = useState(false);

  return (
    <div className="support-container">
      <MetaData title={"Get User Support"} />
      <p className="support-header">
        For business related queries and legal delegations, please go to{" "}
        <NavLink
          to={"/contact"}
          className="text-[#0e9af2] hover:text-blue-300 font-semibold"
        >
          Contact Us
        </NavLink>
        .
      </p>
      <div className="user-support">
        <div className="new-case">
          <img src={newCase} width="100px" alt="Live Chat" />
          <h3>NEW CASE</h3>
          <p>
            Open a new case for any problems and concerns that you might have,
            including as much detail as possible. We will respond to you via
            email or our platform within a few days.
          </p>
          <button onClick={() => setOpen(true)}>Add a New Case</button>
        </div>
        <div className="live-chat">
          <img src={liveChat} width="100px" alt="New Case" />
          <h3>LIVE CHAT</h3>
          <p>
            Start chatting with our support agents dedicated to help resolve any
            minor issues or answer general questions for you to properly
            navigate our platform.
          </p>
          <button
            onClick={() =>
              alert(
                "All our representatives are busy at the moment. Please try again later."
              )
            }
          >
            Start Chatting
          </button>
        </div>
      </div>

      {/* Popup */}

      {open && (
        <div
          className="w-[100vw] h-[100vh] absolute top-0 left-0  "
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* -webkit-box-shadow:0px 1px 11px 0px rgba(62,66,66,0.45); */}
      {/* -moz-box-shadow: 0px 1px 11px 0px rgba(62,66,66,0.45); */}
      {/* box-shadow: 0px 1px 11px 0px rgba(62,66,66,0.45); */}

      <div
        className={`bg-white shadow-[0px_0px_10px_0px_rgba(62,66,66,0.45)] fixed bottom-5 transition-all ease-in-out duration-500 p-5 rounded-md ${
          open
            ? " left-5 opacity-[1] mobile:left-[50%] mobile:translate-x-[-50%] "
            : " left-[-350px] opacity-0 "
        } `}
      >
        <ContactForm open={open} page={"support"} bgColor={"#f26422"} />
      </div>
      <Footer />
    </div>
  );
}

export default UserSupport;
