import { useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'

import Logo from '../assets/project-logo.svg'
import { authSignUp } from '../redux'

const SignUp = ({ setTabKey }) => {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [userNameState, setUserNameState] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const socket = useSelector((state) => state.socketReducer.socket);

  const onFinish = async (values) => {
    setLoading(true)
    await dispatch(authSignUp(values, navigate, socket))
    setLoading(false)
  }

  useEffect(() => console.log(userNameState), [userNameState])
  const userRole = localStorage.getItem('userRole');
  if (!userRole) {
    localStorage.setItem('userRole', 'influencer');
  }
  // if (localStorage.hasOwnProperty("token")) {
  //   // return <Navigate replace to="/home" />;
  // } else {
  return (
    <>
      {/* <div className='signin'> */}
      <Form name='signup' className='login-form' layout='vertical' onFinish={onFinish}>
        <div className='header-container'>
          <img src={Logo}  alt=''/>
          <h2>Create New Account</h2>
        </div>

        <Form.Item
          name='name'
          rules={[
            {
              type: 'text',
            },
            {
              required: true,
              message: 'Username Required',
            },
          ]}
          label='Username'
        >
          <Input
            value={userNameState}
            type='text'
            placeholder='Choose a unique username'
            onKeyDown={(e) => {
              if (e.keyCode === 32) {
                e.preventDefault()
              } else {
                setUserNameState(e.target.value)
              }
            }}
          />
        </Form.Item>
        <Form.Item
          name='email'
          rules={[
            {
              type: 'email',
              message: 'The entered email is not valid!',
            },
            {
              required: true,
              message: 'Email is Required',
            },
          ]}
          label='Email'
        >
          <Input autoComplete='off' placeholder='Enter Email' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Password is Required',
            },
          ]}
          label='Password'
        >
          <Input type='password' placeholder='Enter a password' />
        </Form.Item>
        <Form.Item name='businessLink' label='Your Profile/Business Link'>
          <Input />
        </Form.Item>
        <Form.Item name='termsAndConditions' valuePropName='checked'>
          <Checkbox onChange={(e) => setChecked(e.target.checked)}>
            {' '}
            I accept the{' '}
            <Link to='/terms' target='_blank' className = "text-blue-700 hover:text-blue-500" >
              Terms of Use
            </Link>{' '}
            and{' '}
            <Link to='/privacy_policy' target='_blank' className = "text-blue-700 hover:text-blue-500">
              Privacy Policy
            </Link>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button loading={loading} type='primary' htmlType='submit' disabled={!checked}>
            Sign Up
          </Button>
        </Form.Item>
        <div className='back-to-login' onClick={() => setTabKey('1')}>
          Login if you already have an account
        </div>
      </Form>
      {/* </div> */}
    </>
  )
  // }
}

export default SignUp
