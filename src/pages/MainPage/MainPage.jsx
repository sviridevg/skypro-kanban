// import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Loading } from "../../components/Loading";
import { Wrapper } from "../../globalStyle.stiled";
import { Outlet } from "react-router-dom";
// import { fetchTasks } from "../../api/tasks";
// import { useUserContext } from "../../components/Context/useUserContext";
import { useTasksContext } from "../../components/Context/Tasks/useTasksContext";

// eslint-disable-next-line react/prop-types
export const MainPage = ({ theme, setTheme }) => {
  // const { user, setUser } = useUserContext();
  const { cards, isLoading, error, setError, user, setUser } = useTasksContext();
  // const [cards, setCards] = useState([]);
  // const [isLoading, setIsloading] = useState(true);
  // const [error, setError] = useState("");


  // useEffect(() => {
  //   // eslint-disable-next-line react/prop-types
  //   fetchTasks(user.token)
  //     .then((tasks) => {
  //       setCards(tasks.tasks);
  //       setIsloading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setIsloading(true);
  //       console.error("Не удалось загрузить данные с сервера:", error);
  //     });
  // }, []);

  return (
    <Wrapper>
      <Outlet />
      <Header
        user={user}
        setUser={setUser}
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
