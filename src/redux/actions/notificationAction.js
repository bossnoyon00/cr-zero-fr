import { privateAPI } from "../../config/constants";
import {
  SET_NOTIFICATIONS_REQUEST,
  SET_NOTIFICATIONS_SUCCESS,
} from "../types/generalTypes";

export const sendNotifications = (socket, receiverId) => (dispatch) => {
  socket?.emit("sendNotification", { receiverId });
  dispatch({
    type: SET_NOTIFICATIONS_REQUEST,
  });
};

export const receiveNotifications = (socket) => (dispatch) => {
  socket?.on("receiveNotification", (data) => {
    dispatch({
      type: SET_NOTIFICATIONS_SUCCESS,
      payload: data,
    });
  });
};

export const updateNotificationReadStatus =
  (userId, id) => async (dispatch) => {
    try {
      const { data } = await privateAPI.put(`/notification/update/${id}`, {
        user: userId,
      });

      dispatch({
        type: SET_NOTIFICATIONS_SUCCESS,
        payload: data?.data,
      });
    } catch (err) {}
  };
export const updateNotificationAllReadStatus = (userId) => async (dispatch) => {
  console.log(userId)
  try {
    const { data } = await privateAPI.put(`/notification/all/update`, {
      user: userId,
    });
    

    dispatch({
      type: SET_NOTIFICATIONS_SUCCESS,
      payload: data?.data,
    });
  } catch (err) {}
};
