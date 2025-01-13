import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import styles from "./Welcomemsg.module.css";
//  const Welcomemsg = ({ todoItems }) => {
const Welcomemsg = () => {
  // const todoItems = useContext(TodoItemsContext);
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    todoItems.length === 0 && (
      <p className={`${styles.welcome} text-center`}>Enjoy Your Day</p>
    )
  );
};
export default Welcomemsg;
