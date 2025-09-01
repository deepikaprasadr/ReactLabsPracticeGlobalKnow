import React from "react";
import TodoItem from "./TodoItem";

const TodoList=({todos,toggleTodo})=>{return(
    <ul>
        {todos.map((todo,index)=>(
            <TodoItem key={index} todo={todo} index={index} toggleTodo={toggleTodo}/>
        ))}
    </ul>
);
};

export default TodoList;