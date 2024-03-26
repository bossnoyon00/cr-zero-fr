import { notification } from "antd";
import { attachToken, privateAPI } from "../../config/constants";
import {
  GET_USER_PROFILE,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_FAIL,
} from "../types/generalTypes";

// export const profileDetails = (setUserProfile) => {
export const profileDetails = () => {
  return async (dispatch) => {
    try {
      attachToken();
      const res = await privateAPI.get("/user/profile/get");
      if (res) {
        dispatch({
          type: GET_USER_PROFILE,
          payload: res.data.data,
        });
        // setUserProfile(res.data.data)
      }
    } catch (err) {
      console.log(err);
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const updateProfile = (payload) => {
  return async (dispatch) => {
    try {
      attachToken();
      dispatch({
        type: UPDATE_USER_PROFILE_REQUEST,
      });
      const {data} = await privateAPI.post("/user/profile/update", payload);
      if (data) {
        dispatch({
          type: UPDATE_USER_PROFILE_SUCCESS,
          payload: data?.data,
        });
      }
    } catch (err) {
      dispatch({
        type: UPDATE_USER_PROFILE_FAIL,
      });
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const updatePassword = (currentPassword, newPassword) => {
  return async (dispatch) => {
    try {
      const response = await privateAPI.post("/user/password/update", {
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        dispatch({
          type: UPDATE_PASSWORD_SUCCESS,
          payload: "Password updated successfully",
        });

        notification.success({
          message: "Password updated successfully",
          duration: 3,
        });
      } else {
        throw new Error(response?.data?.message || "Password update failed");
      }
    } catch (error) {
      dispatch({
        type: UPDATE_PASSWORD_FAIL,
        payload: error?.response?.data?.message || "Server Error",
      });

      notification.error({
        message: error?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};
