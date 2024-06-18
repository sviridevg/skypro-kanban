import { PopUser } from "./components/PopUser";
import { PopNewCard } from "./components/PopNewCard";
import { PopBrowse } from "./components/PopBrowse";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.css";
import { cardList } from "../data";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { GlobalStyle, Wrapper } from "./globalStyle.stiled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme";

function App() {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsloading] = useState(false);
  const [theme, setTheme] = useState("light");

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      topic: "Web Design",
      title: "Название задачи",
      date: "06.12.2023",
      status: "Без статуса",
    };
    setCards([...cards, newCard]);
  };

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Wrapper>
        <PopUser />
        <PopNewCard />
        <PopBrowse />
        <Header addCard={addCard} setTheme={setTheme} theme={theme} />
        {isLoading ? <Loading /> : <Main cards={cards} />}
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
