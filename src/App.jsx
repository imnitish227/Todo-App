import "./App.css";
import Head from "./Head";
import TodoInp from "./TodoInp";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItem from "./TodoItem";
import { useState } from "react";
import Welcome from "./Welcome";
function App() {
  let mydata = [
    {
      task: "react",
      date: "10-01-2024",
    },
    {
      task: "node",
      date: "11-01-2024",
    },
    {
      task: "express",
      date: "12-01-2024",
    },
    {
      task: "mongo",
      date: "13-01-2024",
    },
  ];

  const [todoData, setTodoData] = useState(mydata);
  const [emptyError, setEmptyError] = useState("");

  function handleAdd(todoName, todoDate) {
    if (todoName === "") {
      setEmptyError("Please eneter task and date");
    } else if (todoDate === "") {
      setEmptyError("Please eneter task and date");
    } else {
      setEmptyError("");
      const newTodoItem = [{ task: todoName, date: todoDate }, ...todoData];
      setTodoData(newTodoItem);
    }
  }
  const onDeleteItem = (itemName) => {
    console.log(`iteme deleted: ${itemName}`);
    const newDeletedItem = todoData.filter((item) => item.task !== itemName);
    setTodoData(newDeletedItem);
  };

  return (
    <>
      <center>
        <Head />
        <TodoInp handleAdd={handleAdd} />
        <p style={{ color: "red" }}>{emptyError}</p>
        {todoData.length == 0 && <Welcome />}

        <TodoItem item={todoData} onDeleteItem={onDeleteItem} />
      </center>
    </>
  );
}

export default App;
