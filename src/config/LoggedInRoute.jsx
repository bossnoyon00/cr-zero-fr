import { Navigate, Outlet } from "react-router-dom";

const LoggedInRoute = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/home" />;
  }
};

export default LoggedInRoute;
