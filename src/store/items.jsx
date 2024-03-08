import { createContext } from "react";

export const TodoItmesContext = createContext({
  todoData: [],
  addNewItem: () => {},
  onDeleteItem: () => {},
});
