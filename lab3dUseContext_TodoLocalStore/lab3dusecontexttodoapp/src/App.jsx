import { useState } from 'react'
import react from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {useTodos} from "./TodoContext";
import './App.css'
//importing the custome hook to access the context.

const App=()=>  {
  const {todos,addTodo,toggleTodo,newTodo,setNewTodo}= useTodos();

  return (
    <div>
      <h1>To-do Lsit</h1>
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
        <TodoList todos={todos} toggleTodo={toggleTodo}/>
    </div>
  
  );
};

export default App;
