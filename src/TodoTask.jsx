import style from "./TodoTask.module.css";
import { MdDelete } from "react-icons/md";
function TodoTask({ task, date, onDeleteItem }) {
  return (
    <>
      <div
        className={`${style.TodoTaskRow} row`}
        style={{
          marginTop: "25px",
        }}
      >
        <div class=" col-lg-6 col-sm-6">
          <p>{task}</p>
        </div>
        <div class="col-lg-4 col-sm-4">
          <p>{date} </p>
        </div>
        <div class="col-lg-2 col-sm-2">
          <button
            type="button"
            style={{ width: "83px" }}
            class="btn btn-danger "
            onClick={() => onDeleteItem(task)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
}
export default TodoTask;
