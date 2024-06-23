import { useEffect, useState } from "react";
import { PopNewCard } from "../../src/components/PopNewCard";
import { Header } from "../../src/components/Header";
import { Main } from "../../src/components/Main";
import { Loading } from "../../src/components/Loading";
import { cardList } from "../../data";
import { Wrapper } from "../../src/globalStyle.stiled";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const MainPage = ({ theme, setTheme, setIsAuth }) => {
  const [cards, setCards] = useState(cardList);
  const [isLoading, setIsloading] = useState(false);

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
    <Wrapper>
      <Outlet />
      <PopNewCard />
      <Header setIsAuth={setIsAuth} addCard={addCard} setTheme={setTheme} theme={theme} />
      {isLoading ? <Loading /> : <Main cards={cards} />}
    </Wrapper>
  );
};
