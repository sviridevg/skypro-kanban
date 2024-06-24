import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ isAuth }) => {
  return isAuth ? <Outlet /> : <Navigate to={routes.login} />;
};
