import React from "react";

const TodoItem=({todo,index,toggleTodo})=>{
    return(
        <li style={{textDecoration:todo.completed?"line-through":"none"}}
          onClick={() => toggleTodo(index)}>{todo.text}
        </li>
    );
};


export default TodoItem;