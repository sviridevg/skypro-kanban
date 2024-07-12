import { Navigate, Outlet } from "react-router-dom";
import { routes } from "./routes";
import { useUserContext } from "../components/Context/useUserContext";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = () => {
  const { user } = useUserContext();
  return user ? <Outlet /> : <Navigate to={routes.login} />;
};
