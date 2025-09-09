import React from "react";

const TodoForm=({newTodo,setNewTodo,addTodo})=>{
    const handleSubmit= (e)=>{
        e.preventDefault();
        if(newTodo.trim()){
            addTodo(newTodo);//Calls the addTodo function from context
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter a new task"/>
            {/* Updates newTodo via context */}
        <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;