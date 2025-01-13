import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";
import { /*useState,*/ useReducer } from "react";
import Welcomemsg from "./components/Welcomemsg";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "new-item") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "delete-item") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};
function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy milk",
  //     dueDate: "4/10/2023",
  //   },

  //   {
  //     name: "Buy milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Eat Breakfast",
  //     dueDate: "4/10/2023",
  //   },
  // ];
  //const [todoItems, setTodoItems] = useState([]); //setTodoItems] = useState([initialTodoItems]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added: ${itemName} Date:${itemDueDate}`);

    // const newToddoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    //setTodoItems(newToddoItems);//it gives always update value
    const newItemAction = {
      type: "new-item",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDeleteItem = (todoItemName) => {
    //filter method mai ham jisko bhi print nehi karna jahete hai usko condition lagakar print nehi kartai hai like odd no ko print karna so here haam ek ek item ko check karenge agar item name and delete key press item name same hogaya to isko skip(filter) karenge i.e it is remove from the item list that is display then we set the todoItem

    const deleteItemAction = {
      type: "delete-item",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
    //filter method return which are true so when it match with delete item so it will not match so it will not return bcz !=
  };

  return (
    //to use TodoItemsContext in every component . todoItems it is from useStare bcz it givs the current value

    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: handleNewItem,
        deleteItem: handleDeleteItem,
      }}
    >
      {/* we can also write
  value={ 
  todoItem,
  addNewItem, 
  deleteItem,
  
  if handleNewItem name shouldbe addNewItem means the both side name should be same so that we can write in this way*/}
      <div className="todo-center">
        <AppName />
        {/* <AddTodo onNewItem={handleNewItem} /> */}
        <AddTodo />
        {/* <Welcomemsg todoItems={todoItems} /> */}
        <Welcomemsg />
        {/* <TodoItems todoItems={todoItems} onDeleteclick={handleDeleteItem} /> */}
        {/* <TodoItems onDeleteclick={handleDeleteItem} /> */}
        <TodoItems />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
