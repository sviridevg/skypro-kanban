import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

const userToLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : "";
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userToLocalStorage());

  const login = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

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
