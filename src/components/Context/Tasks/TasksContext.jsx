import { createContext } from "react";
import { useTasks } from "./useTasks";

export const TasksContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const TasksProvider = ({ children }) => {
  const { cards, isLoading, error, setError } = useTasks();

  return (
    <TasksContext.Provider value={{ cards, isLoading, error, setError }}>
      {children}
    </TasksContext.Provider>
  );
};
