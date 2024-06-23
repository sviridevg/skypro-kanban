import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

// eslint-disable-next-line react/prop-types
export const PrivatRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={routes.login} />;
};
