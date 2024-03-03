import { useState } from "react";
import style from "./TodoTask.module.css";

function TodoInp({ handleAdd }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  const handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };
  function onNewItemAdd() {
    handleAdd(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (
    <>
      <div className={`${style.TodoTaskRow} row`}>
        <div class="col-lg-6 col-sm-6 col-xs-6">
          <input
            type="text"
            placeholder="Enter your task"
            value={todoName}
            onChange={handleTodoName}
          ></input>
        </div>
        <div class="col-lg-4 col-sm-4 col-xs-4">
          <input
            type="date"
            placeholder="Enter Date"
            value={todoDate}
            onChange={handleTodoDate}
          ></input>
        </div>
        <div class="col-lg-2 col-sm-2 col-xs-2">
          <button
            type="button"
            class="btn btn-primary"
            style={{ width: "82px" }}
            onClick={onNewItemAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoInp;
