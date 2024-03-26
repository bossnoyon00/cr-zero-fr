import { IoMdNotificationsOutline } from "react-icons/io";
import styled from "styled-components";
import Notifications from "./Notifications";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sendNotifications,
  receiveNotifications,
} from "../../redux/actions/notificationAction";

const AppNotifications = () => {
  const dispatch = useDispatch();
  const socket = useSelector((state) => state.socketReducer.socket);
  const { user } = useSelector((state) => state.userReducer);
  const { notifications, counts, loading } = useSelector(
    (state) => state.notificationReducer
  );

  const [show, setShow] = useState(false);

  const handleShowNotifications = async () => {
    setShow(!show);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");

    dispatch(sendNotifications(socket, id ? id : user._id));
  }, [socket, user, dispatch, show]);

  useEffect(() => {
    dispatch(receiveNotifications(socket));
  }, [socket, dispatch, show]);

  return (
    <Wrapper>
      <div className="notification-container" onClick={handleShowNotifications}>
        <IoMdNotificationsOutline className="notification-icon" />
        {counts > 0 && <span className="counts">{counts}</span>}
      </div>

      {show && notifications?.length > 0 && <span className="icon"></span>}

      {show && notifications?.length > 0 && (
        <div className="notifications" onClick={() => setShow(false)}>
          <Notifications
            loading={loading}
            notifications={notifications}
            handleShowNotifications={handleShowNotifications}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .notification-container {
    position: relative;

    .notification-icon {
      z-index: 999;
      font-size: 30px;
      color: #fff;
      cursor: pointer;
      user-select: none;
    }

    .counts {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: #bd2c2c;
      background-color: #f26522;
      color: #fff;
      width: 15px;
      height: 15px;
      border-radius: 50px;
      font-size: 10px;
      cursor: pointer;
      user-select: none;
    }
  }

  .icon {
    position: absolute;
    top: 30px;
    right: 0px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 10px solid #ffffff;
  }

  .notifications {
    position: absolute;
    top: -15px;
    right: -130px;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
`;

export default AppNotifications;
