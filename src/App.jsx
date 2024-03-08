import "./App.css";
import Head from "./Head";
import TodoInp from "./TodoInp";
import { TodoItmesContext } from "./store/items";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoItem from "./TodoItem";
import { useState } from "react";
import Welcome from "./Welcome";

//app component
function App() {
  const [todoData, setTodoData] = useState([]);
  const [emptyError, setEmptyError] = useState("");

  function addNewItem(todoName, todoDate) {
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
    <TodoItmesContext.Provider value={{ todoData, addNewItem, onDeleteItem }}>
      <center>
        <Head />
        <TodoInp />
        <p style={{ color: "red" }}>{emptyError}</p>
        <Welcome />

        <TodoItem />
      </center>
    </TodoItmesContext.Provider>
  );
}

export default App;
