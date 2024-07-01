import { useEffect, useState } from "react";
import { PopNewCard } from "../../components/PopNewCard";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Loading } from "../../components/Loading";
// import { cardList } from "../../../data";
import { Wrapper } from "../../globalStyle.stiled";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../../api/tasks";

// eslint-disable-next-line react/prop-types
export const MainPage = ({ theme, setTheme, user, setUser }) => {
  // const [cards, setCards] = useState(cardList);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

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
    // eslint-disable-next-line react/prop-types
    fetchTasks(user.token)
      .then((tasks) => {
        setCards(tasks.tasks);
        setIsloading(false);
      })
      .catch((error) => {
        setError(error);
        setIsloading(true);
        console.error("Не удалось загрузить данные с сервера:", error);
      });
  }, []);

  return (
    <Wrapper>
      <Outlet />
      <PopNewCard />
      <Header
        user={user}
        setUser={setUser}
        addCard={addCard}
        setTheme={setTheme}
        theme={theme}
      />
      {isLoading ? (
        <Loading setError={setError} error={error} />
      ) : (
        <Main cards={cards} />
      )}
    </Wrapper>
  );
};
