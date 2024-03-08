import { useContext } from "react";
import TodoTask from "./TodoTask";
import { TodoItmesContext } from "./store/items";
function TodoItem() {
const { todoData } = useContext(TodoItmesContext);
  return (
    <>
      {todoData.map((items, index) => (
        <TodoTask
          task={items.task}
          date={items.date}
          key={index}
          
        />
      ))}
    </>
  );
}
export default TodoItem;
