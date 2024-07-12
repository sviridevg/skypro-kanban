import { useEffect, useState } from "react";
import { fetchTasks } from "../../../api/tasks";
import { useUserContext } from "../useUserContext";

export const useTasks = () => {
  const { user, setUser } = useUserContext();

  const [cards, setCards] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");

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

  return { cards, isLoading, error, setError, user, setUser };
};
