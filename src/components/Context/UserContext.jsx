import { createContext, useEffect } from "react";
import { useUser } from "./useUser";

export const UserContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const { user, login, logOut } = useUser();

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
