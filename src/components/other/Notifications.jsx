import React from "react";
import styled from "styled-components";
import ICON from "../../assets/AR.svg";
import moment from "moment";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSinglePost } from "../../redux/actions/postsAction";
import { updateNotificationAllReadStatus, updateNotificationReadStatus } from "../../redux/actions/notificationAction";

const Notifications = ({ loading, notifications, handleShowNotifications }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const handleNotificationStatus = (id) => {
    dispatch(updateNotificationReadStatus(user?._id, id));
    handleShowNotifications();
  };
  const handleNotificationAllStatus = () => {
    dispatch(updateNotificationAllReadStatus(user?._id));
    handleShowNotifications();
  };

  const handleSinglePost = (id) => {
    dispatch(fetchSinglePost(id));
    dispatch({ type: "OPEN_MODEL_TWO" });
    dispatch({ type: "CHANGE_TAB_ONE" });
  };

  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <>
        <button className="my-5 z-50 text-blue-500 hover:text-blue-400 transition-all ease-in-out duration-300 " onClick={handleNotificationAllStatus}>Mark All as Read</button>
        {notifications?.map((item, index) => {
          return (
            <div
              className={
                index !== notifications?.length - 1 && item.isRead === false
                  ? "borderBottom item"
                  : index !== notifications?.length - 1
                  ? "borderBottom item"
                  : "item"
              }
              key={index}
              style={
                index === 0
                  ? {
                      borderTopRightRadius: "5px",
                      borderTopLeftRadius: "5px",
                    }
                  : {}
              }
              onClick={() => handleNotificationStatus(item?._id)}
            >
              <div style={{ position: "relative" }}>
                <img src={item.icon || ICON} alt="icon" />
                {
                  item.isRead === false && <span className="unread-icon"></span>
                  // <img  src={DOT} alt='' />
                }
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "5px",
                }}
              >
                {item.notificationType === "profileUpdated" ? (
                  <NavLink className={"link-element"} to={"/settings"}>
                    {item?.notification}
                  </NavLink>
                ) : item.notificationType === "newlyPost" ? (
                  <NavLink
                    className={"link-element"}
                    to={"/programs"}
                    onClick={() => handleSinglePost(item?.post?._id)}
                  >
                    {item?.notification}
                  </NavLink>
                ) : item.notificationType === "toBeExpired" ? (
                  <NavLink
                    className={"link-element"}
                    to={"/programs"}
                    onClick={() => handleSinglePost(item?.post?._id)}
                  >
                    {item?.notification?.slice(0, 12)} "
                    {item?.post?.title?.slice(0, 25)}
                    {item?.post?.title?.length > 24 && "..."}"{" "}
                    {item?.notification?.slice(12)}
                  </NavLink>
                ) : item.notificationType === "isExpired" ? (
                  <NavLink
                    className={"link-element"}
                    to={"/programs"}
                    onClick={() => {
                      dispatch({ type: "CHANGE_TAB" });
                    }}
                  >
                    {item?.notification?.slice(0, 12)} "
                    {item?.post?.title?.slice(0, 25)}
                    {item?.post?.title?.length > 24 && "..."}"{" "}
                    {item?.notification?.slice(12)}
                  </NavLink>
                ) : item.notificationType === "deletedPost" ? (
                  <NavLink className={"link-element"} to={"/contact"}>
                    {item?.notification?.slice(0, 12)}
                    {item?.notification?.slice(12)}
                  </NavLink>
                ) : item.notificationType === "comment" ? (
                  <NavLink
                    className={"link-element"}
                    to={"/programs"}
                    onClick={() => handleSinglePost(item?.post?._id)}
                  >
                    {item?.notification?.slice(0, 37)} "
                    {item?.post?.title?.slice(0, 25)}
                    {item?.post?.title?.length > 24 && "..."}"{" "}
                    {item?.notification?.slice(37)}
                  </NavLink>
                ) : item.notificationType === "newUser" ? (
                  <p>{item?.notification}</p>
                ) : (
                  ""
                )}
                <span>
                  {moment(moment(item.createdAt).format("MM-DD-YYYY")).isSame(
                    moment().format("MM-DD-YYYY")
                  )
                    ? `Today ${moment(item.createdAt).format("LT")}`
                    : moment(item.createdAt).format("LLL")}
                </span>
              </div>
            </div>
          );
        })}
        </>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 105px;
  top: 55px;
  background-color: #fff;
  width: 400px;
  max-height: 350px;
  overflow-y: scroll;
  z-index: 1000;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.08);

  .borderBottom {
    border-bottom: 1px solid #ccc;
  }

  .unread {
    background-color: #d3d5d9 !important;
  }

  .unread-icon {
    position: absolute;
    top: -5px;
    right: 5px;
    background-color: #f26522;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .item {
    width: 100%;
    display: flex;
    // align-items: flex-start;
    justify-content: space-between;
    gap: 5px;
    padding: 15px 10px;
    transition: all 300ms ease-in-out;
    z-index: 1;

    img {
      width: 25px;
      height: 25px;
    }

    p,
    .link-element {
      line-height: 17px;
      margin: 0;
    }

    .link-container {
      width: 100%;
      display: flex;
      // align-items: flex-start;
      justify-content: space-between;
    }
    span {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
      flex-wrape: no-wrape;
      text-align: right;
      line-height: 16px;
      font-size: 12px;
      color: #626262;
    }

    &:hover {
      background-color: #f0f3f7;
    }
  }
`;

export default Notifications;
