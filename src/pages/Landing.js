import React from 'react'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div className='landing-container'>
      <div className='left-container'>
        <div className='shape'></div>
        <Button
          className='custom-btn'
          onClick={() => {
            localStorage.setItem('userRole', 'influencer')
            navigate('/login')
          }}
        >
          Influencer
        </Button>
      </div>
      <div className='right-container'>
        <Button
          className='custom-btn'
          onClick={() => {
            localStorage.setItem('userRole', 'business')
            navigate('/login')
          }}
        >
          Business
        </Button>
      </div>
    </div>
  )
}

export default Landing
