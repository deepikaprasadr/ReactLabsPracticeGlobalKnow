import React from "react";
import ReactDOM from "react-dom/client";
import {TodoProvider} from "./TodoContext";
import TodoApp from "./App.jsx"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoApp/>
    </TodoProvider>  
  </React.StrictMode>,
)
