import TodoTask from "./TodoTask";
function TodoItem({ item, onDeleteItem }) {
  return (
    <>
      {item.map((items, index) => (
        <TodoTask
          task={items.task}
          date={items.date}
          key={index}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </>
  );
}
export default TodoItem;
