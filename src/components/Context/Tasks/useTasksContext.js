import { useContext } from "react";
import { TasksContext } from "./TasksContext.jsx";

export const useTasksContext = () => {
  return useContext(TasksContext);
};
