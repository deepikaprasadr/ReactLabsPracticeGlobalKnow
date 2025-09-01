//app.jsx parent comonent
//todoform.jsx child comp for form
//todolist.jsx child comp for todolist
//todoitem.jsx fhild comp for todo item
//parent will pass the state to the child components through props.
//store todos in local storage. bcos local store stores strings.
//later when you read from local storage, JSON.parse() to turn the string back into an array.
import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

//todo is an array of objects with text and completed status
//example { text: "Buy milk", completed: false }

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));//store todos in local storage. bcos local store stores strings.
    }
  }, [todos]);

  const addTodo = (text) => 
  {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
    setNewTodo(""); //clear input field after adding a todo
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
