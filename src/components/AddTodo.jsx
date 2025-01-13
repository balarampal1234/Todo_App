import { MdAddComment } from "react-icons/md"; //this is for react icon which is in place of Add line n0 44 ---><MdAddComment />
import { useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
//function AddTodo({onNewItem})
function AddTodo() {
  const contextObj = useContext(TodoItemsContext);
  const addNewItem = contextObj.addNewItem;
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //};

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
