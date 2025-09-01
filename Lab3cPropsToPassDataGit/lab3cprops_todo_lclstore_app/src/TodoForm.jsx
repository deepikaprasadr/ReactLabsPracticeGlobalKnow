//child component for the the form

import React from "react";

const TodoForm=({newTodo,setNewTodo,addTodo})=>{
    const handleSubmit= (e) =>{
        e.preventDefault();
        if(newTodo.trim()){
            addTodo(newTodo); //call addTodo passed as props
        }
    };

return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        value={newTodo} 
        onChange={(e)=>setNewTodo(e.target.value)}
        placeholder="Enter a new task"/>
        {/*Update the newTodo state in the parent */}
        <button type="submit">Add ToDo</button>
    </form>
);
};
export default TodoForm;