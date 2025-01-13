import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
// const TodoItems = ({ todoItems, onDeleteclick }) => {
// const TodoItems = ({ onDeleteclick }) => {
const TodoItems = () => {
  // const todoItemsFromContext = useContext(TodoItemsContext);
  // const todoItems = useContext(TodoItemsContext);we can,t write like this bcz in context three object is there so
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  // OR in a single line we can write
  // const {todoItems}=useContext(TodoItemsContext);

  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};
export default TodoItems;
