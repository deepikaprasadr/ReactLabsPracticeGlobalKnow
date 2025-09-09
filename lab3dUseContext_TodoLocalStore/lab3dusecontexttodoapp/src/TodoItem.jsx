 
import React from "react";

const TodoItem=({todo,index,toggleTodo})=>{
    console.log(index)
    console.log(todo)
    console.log(toggleTodo)
    return(
        
        <li style={{textDecoration:todo.completed?"line-through":"none"}} onClick={()=>toggleTodo(index)}>
{/* //Toggle completion */}
            {todo.text}
        </li>
    );
};

export default TodoItem;