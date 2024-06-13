import { PopUser } from "./components/PopUser";
import { PopNewCard } from "./components/PopNewCard";
import { PopBrowse } from "./components/PopBrowse";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import "./App.css";
import { cardList } from "../data";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";

function App() {
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
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header addCard={addCard} />
      {isLoading ? <Loading /> : <Main cards={cards} />}
    </div>
  );
}

export default App;
