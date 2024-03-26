import React from 'react'
import { Typography, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

// import Self from '../assets/self.png'
// import Self2 from '../assets/self-2.png'
// import Image2 from '../assets/landing-img-2.png'
// import Image2 from '../assets/landing-img-1.gif'
// import Logo from '../assets/project-logo.png'

const Landing2 = () => {
  const navigate = useNavigate()
  return (
    <div className='landing2-container'>
      <div className='wrapper'>
        <div className='header'>
          <div className='left'>
            <img src={Logo} />
          </div>
          <div className='right'>
            {/* <p>HOME</p>
            <p>LOGIN</p> */}
          </div>
        </div>
        <div className='section-1'>
          <div className='left'>
            <Typography.Title className='landing-title-1'>ARTIFICIAL</Typography.Title>
            <Typography.Title className='landing-title-2'>INTELLIGENCE</Typography.Title>
            <Typography.Paragraph className='landing-para'>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
            </Typography.Paragraph>
            <div className='btns-container'>
              <Button
                className='landing-btn-1'
                onClick={() => {
                  localStorage.setItem('userRole', 'business')
                  navigate('/login')
                }}
              >
                Business
              </Button>
              <Button
                className='landing-btn-1'
                onClick={() => {
                  localStorage.setItem('userRole', 'influencer')
                  navigate('/login')
                }}
              >
                Influencer
              </Button>
            </div>
          </div>
          <div className='right'>
            <img src={Self2} />
          </div>
        </div>
        {/* <div className='section-2'>
          <div className='left'>
            <img src={Image2} />
          </div>
          <div className='right'>
            <Typography.Title className='landing-title-1'>ARTIFICIAL</Typography.Title>
            <Typography.Title className='landing-title-2'>INTELLIGENCE</Typography.Title>
            <Typography.Paragraph className='landing-para'>
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum`}
            </Typography.Paragraph>
            <Button className='landing-btn-1'>Button</Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Landing2
