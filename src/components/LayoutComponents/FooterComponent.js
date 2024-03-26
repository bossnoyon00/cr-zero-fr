import React from 'react'
import { BiEnvelope } from 'react-icons/bi'
import {
  BsWhatsapp,
  BsFillTelephoneFill,
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const FooterComponent = () => {
  const navigate = useNavigate()
  return (
    <div className='footer-container'>
      <div className='wrapper'>
        <div className='mid-sec'>
          <div className='col-1'>
            <p className='title'>Contact Us</p>
            <div className='list'>
              <div className='row'>
                <BiEnvelope />
                <p>junaid@iltspk.com</p>
              </div>
              <div className='row'>
                <BiEnvelope />
                <p> iltspk@gmail.com </p>
              </div>
              <div className='row'>
                <BsFillTelephoneFill />
                <p> 0092 335 7545612</p>
              </div>
              <div className='row'>
                <BsWhatsapp />
                <p>0092 321 3852399</p>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <p className='title'>Menu</p>
            <div className='list'>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/')
                }}
              >
                Home
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Services
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/about-us')
                }}
              >
                About Us
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/contact-us')
                }}
              >
                Contact Us
              </p>
            </div>
          </div>
          <div className='col-3'>
            <p className='title'>Services</p>
            <div className='list'>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Web Designing and Developing
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Localization
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Proofreading
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Desktop publishing
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Document Developing
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Content-Writing
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Translation
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                Editing
              </p>
              <p
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate('/services')
                }}
              >
                More...
              </p>
              {/* <p>Original Writing</p>
              <p>Transcription</p>
              <p>Voice Over</p>
              <p>Typing</p> */}
            </div>
          </div>
          <div className='col-4'>
            <p className='title'>Address</p>
            <div className='address-container'>
              <p>Pakistan:</p>
              <p>
                E-31 First Floor, P.R.E.C.H Society Project # 3 Jinnah Avenue Near Jinnah
                International Airport, Karachi, Pakistan-75100
              </p>
            </div>
          </div>
        </div>
        <div className='bottom-sec'>
          <div className='social-icons-container'>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
          </div>
          <p className='copy-right'>© COPYRIGHT 2023 - Iqra Linguistics Translation Services</p>
        </div>
      </div>
    </div>
  )
}

export default FooterComponent
