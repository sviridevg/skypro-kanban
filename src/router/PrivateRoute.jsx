import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ user }) => {
  return user ? <Outlet /> : <Navigate to={routes.login} />;
};
