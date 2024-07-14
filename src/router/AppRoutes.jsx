import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { LoginPage } from "../pages/Login/Login";
import { RegisterPage } from "../pages/Register/Register";
import { useState } from "react";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { CardViewing } from "../pages/СardViewing/СardViewing";
import { routes } from "./routes";
import { PrivateRoute } from "./PrivateRoute";
import { UserProvider } from "../context/User/UserContext";
import { NewCard } from "../pages/NewCard/NewCard";
import { TasksProvider } from "../context/Tasks/TasksContext";

export const AppRoutes = ({ theme, setTheme }) => {
  const [user, setUser] = useState(null);

  return (
    <UserProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route
                path={routes.main}
                element={
                  <MainPage
                    user={user}
                    setUser={setUser}
                    theme={theme}
                    setTheme={setTheme}
                  />
                }>
                <Route
                  path={routes.exit}
                  element={<ExitPage setUser={setUser} />}
                />
                <Route path={routes.card} element={<CardViewing />} />
                <Route path={routes.newCard} element={<NewCard />} />
              </Route>
            </Route>
            <Route path={routes.notFound} element={<NotFound />} />
            <Route
              path={routes.login}
              element={<LoginPage setUser={setUser} />}
            />
            <Route path={routes.register} element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </UserProvider>
  );
};
