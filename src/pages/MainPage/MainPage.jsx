import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Loading } from "../../components/Loading";
import { Wrapper } from "../../globalStyle.stiled";
import { Outlet } from "react-router-dom";
import { fetchTasks } from "../../api/tasks";
import { useUser } from "../../context/User/useUser";
import { useTasks } from "../../context/Tasks/useTasks";

export const MainPage = ({ theme, setTheme }) => {
  const { user, setUser } = useUser();
  const { cards, setCards } = useTasks();
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
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
      <Header user={user} setUser={setUser} setTheme={setTheme} theme={theme} />
      {isLoading ? (
        <Loading setError={setError} error={error} />
      ) : (
        <Main cards={cards} />
      )}
    </Wrapper>
  );
};
