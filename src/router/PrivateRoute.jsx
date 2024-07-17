import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";

import { useUser } from "../context/User/useUser";

export const PrivateRoute = () => {
  const { user } = useUser();
  return user ? <Outlet /> : <Navigate to={routes.login} />;
};
