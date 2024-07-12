import { useState } from "react";

const userToLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : "";
};

export const useUser = () => {
  const [user, setUser] = useState(userToLocalStorage());

  const login = (userData) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return { user, setUser, login, logOut };
};
