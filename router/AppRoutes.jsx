import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { NotFound } from "../pages/NotFound/NotFound";
import { MainPage } from "../pages/MainPage/MainPage";
import { LoginPage } from "../pages/Login/Login";
import { RegisterPage } from "../pages/Register/Register";
import { PrivatRoute } from "./PrivatRoute.";
import { useState } from "react";
import { ExitPage } from "../pages/ExitPage/ExitPage";
import { CardViewing } from "../pages/СardViewing/СardViewing";

// eslint-disable-next-line react/prop-types
export const AppRoutes = ({ theme, setTheme }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivatRoute isAuth={isAuth} />}>
          <Route
            path={routes.main}
            element={<MainPage setIsAuth={setIsAuth} theme={theme} setTheme={setTheme} />}>
            <Route path={routes.exit} to element={<ExitPage setIsAuth={setIsAuth} />} />
            <Route path={routes.card} to element={<CardViewing />} />
          </Route>
        </Route>
        <Route path={routes.notFound} element={<NotFound />} />
        <Route
          path={routes.login}
          element={<LoginPage setIsAuth={setIsAuth} />}
        />
        <Route path={routes.register} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
