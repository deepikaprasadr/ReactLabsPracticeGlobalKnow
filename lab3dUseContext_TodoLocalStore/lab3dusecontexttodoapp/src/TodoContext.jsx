import React, { createContext, useState, useEffect, useContext } from "react";

//create the context
const TodoContext = createContext();

//create the provider component that will wrap the app
export const TodoProvider = ({ children }) => {
  //Managing todos state
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  //save todos to localstorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //function to add a new todo

  const addTodo = (text) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);

    setNewTodo(""); //clear the input after adding a todo
  };
 
  //Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, newTodo, setNewTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos=()=> useContext(TodoContext);

// Custom hook to use the Todo context in any component
 