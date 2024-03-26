import {
  SET_NOTIFICATIONS_SUCCESS,
  SET_NOTIFICATIONS_REQUEST,
} from "../types/generalTypes";

const initialState = {
  ModalOpen2: false,
  tab: "1",
  notifications: [],
  counts: 0,
};

const notificationReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_MODEL_TWO": {
      return {
        ...state,
        ModalOpen2: true,
      };
    }
    case "CLOSE_MODEL_TWO": {
      return {
        ...state,
        ModalOpen2: false,
      };
    }
    case "CHANGE_TAB": {
      return {
        ...state,
        tab: "3",
      };
    }
    case "CHANGE_TAB_TWO": {
      return {
        ...state,
        tab: "2",
      };
    }
    case "CHANGE_TAB_ONE": {
      return {
        ...state,
        tab: "1",
      };
    }
    case SET_NOTIFICATIONS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_NOTIFICATIONS_SUCCESS: {
      return {
        ...state,
        notifications: payload.notifications,
        counts: payload.counts,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default notificationReducer;
