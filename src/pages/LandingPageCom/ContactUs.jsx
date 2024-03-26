import React from "react";
import Footer from "./Footer";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFax } from "react-icons/fa";
import TWITTER from '../../assets/twitter-x.svg'
import ContactForm from "../../components/other/ContactForm";
import { NavLink } from "react-router-dom";
import MetaData from "../../components/other/MetaData";
function ContactUs() {
  return (
    <div className="cc">
      <MetaData title={'Contact Affiliated Refer'} />
      <div className="contactus-page">
        <div className="contact-top">
          <div className="contact-red">
            <h3>Contact Info</h3>
            <div className="new">
              <div>
                <FaMapMarkerAlt />
                <p className="red-text">7700, Rajbari Sadar, Bangladesh</p>
              </div>
              <div>
                <FaEnvelope />
                <p>info@affiliatedrefer.com</p>
              </div>
              <div>
                <FaPhone />
                <p className="red-text">+8801576448378</p>
              </div>
              <div>
                <img src={TWITTER} alt="X" className="w-[18px]" />
                <p className="red-text">@AffiliatedRefer</p>
              </div>
            </div>
          </div>
          <div className="contact-white">
            <div>
              <h2>Get in Direct Contact</h2>
              <p>
                If you're seeking support as a user, please go to <NavLink to={'/support'}className="text-[#0e9af2] hover:text-blue-300 font-semibold">User Support</NavLink>.
              </p>
            </div>
            <ContactForm
              placeholder={
                "Please state your concerns and add necessary details here…"
              }
              bgColor={""}
              page={'contact'}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
