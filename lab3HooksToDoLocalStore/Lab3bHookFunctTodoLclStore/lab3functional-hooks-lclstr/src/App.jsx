import React,{useState,useEffect} from "react";

const App=()=> {
  const [todos,setTodos]=useState(()=>{
    const savedTodos=localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos):[];
  });
  const [newTodo,setNewTodo]=useState("");
  

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]); //Dependency array ensures this runs when todos changes

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newTodo.trim()){
      addTodo(newTodo);//fn call
      setNewTodo("");
    }
  };

  const addTodo=(text) =>{
    setTodos([...todos, {text,completed:false}]);
  };

//   [...todos, {text, completed: false}]
// This creates a new array for the state update, using two key features:
// Spread operator (...todos): This takes every item from the existing todos array and "spreads" them into the new array. It effectively creates a shallow copy of the current state.
// New object {text, completed: false}: This is the new todo item being added to the end of the array. It is an object with a text property (from the function argument) and a completed property set to false by default. 

  const toggleTodo=(index) =>{
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);
  };

return(
  <div>
    <h1>To do list</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Enter a new task"/>
      <button type="submit">Add Todo</button>
    </form>

    <ul>
      {todos.map((todo,index)=>(<li key={index} style={{textDecoration:todo.completed?"line-through":"none",}} onClick={()=>toggleTodo(index)}>{todo.text}</li>))}
    </ul>
  </div>
);

};

export default App;
