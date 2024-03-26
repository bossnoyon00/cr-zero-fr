import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileDetails } from "../redux/actions/userActions";

import "../styles/style.css";
import Routes from "./Routes";
import { light, dark } from "./theme";
import { io } from "socket.io-client";
import { base_url } from "./constants";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const userProfileDetails = useSelector((state) => state.userReducer.user);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (theme === "light") {
      Object.keys(light).forEach((key) => {
        document.body.style.setProperty(`--${key}`, light[key]);
      });
    } else {
      Object.keys(dark).forEach((key) => {
        document.body.style.setProperty(`--${key}`, dark[key]);
      });
    }
  }, [theme]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(profileDetails());
    }
  }, [dispatch]);

  useEffect(() => {
    const newSocket = io(base_url);
    setSocket(newSocket);

    dispatch({
      type: "SET_SOCKET_SERVER",
      payload: newSocket,
    });
  }, [dispatch]);

  useEffect(() => {
    socket?.emit("newUser", userProfileDetails?._id);
  }, [socket, userProfileDetails]);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
