import {
  GET_USER_PROFILE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "../types/generalTypes";

const initialState = {
  user: {},
  message: null,
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USER_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case UPDATE_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload
      };
    case UPDATE_USER_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        message: payload,
        error: null,
      };
    case UPDATE_PASSWORD_FAIL:
      return {
        ...state,
        message: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
