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

// eslint-disable-next-line react/prop-types
export const AppRoutes = ({ theme, setTheme }) => {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute user={user} />}>
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
          </Route>
        </Route>
        <Route path={routes.notFound} element={<NotFound />} />
        <Route path={routes.login} element={<LoginPage setUser={setUser} />} />
        <Route path={routes.register} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
