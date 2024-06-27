import "./App.css";

import { useState } from "react";

import { GlobalStyle } from "./globalStyle.stiled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme";
import { AppRoutes } from "./router/AppRoutes";


function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <AppRoutes theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
