import { notification } from 'antd'
import { publicAPI } from '../../config/constants'
// import { profileDetails } from './userActions'
import { GET_USER_PROFILE } from '../types/generalTypes'

export const authLogin = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const res = await publicAPI.post('/auth/login', payload)
      if (res) {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('name', res.data.data.user.name)
        localStorage.setItem('id', res.data.data.user._id)
        // await dispatch(profileDetails())
        dispatch({
          type: GET_USER_PROFILE,
          payload: res.data.data.user,
        })
        notification.success({
          description: res.data.data.message,
          duration: 2,
        })
        navigate(res.data.data.user.role === 'influencer' ? '/home' : '/create-post')
      }
    } catch (err) {
      if(err.response.status === 401){
        notification.error({
          message: err?.response?.data?.message,
          duration: 3,
        })
      } else {
        notification.error({
          message: 'Invalid Credentials',
          duration: 3,
        })
      }
     
    }
  }
}

export const authSignUp = (payload, navigate, socket) => {
  return async () => {
    const localRole = localStorage.getItem('userRole')
    try {
      const res = await publicAPI.post('/auth/register', { ...payload, role: localRole })
      console.log(res)
      if (res) {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('name', res.data.data.user.name)
        localStorage.setItem('id', res.data.data.user._id)
        notification.success({
          description: res.data.data.message,
          duration: 2,
        })
        socket?.emit("newUser", res.data.data.user?._id);
        navigate(res.data.data.user.role === 'influencer' ? '/home' : '/create-post')
      }
    } catch (err) {
      console.log(err)
      notification.error({
        message: err?.response?.data?.message || 'Server Error',
        duration: 3,
      })
    }
  }
}
