import React from 'react';
import { useState, useEffect } from 'react';


const Task10 = () => {


const [todos, setTodos] = useState(()=>{
  const savedTodos =  localStorage.getItem("todos");
 if(savedTodos){
   return JSON.parse(savedTodos);
 }
 else{
   return[]
 }});

const [todo, setTodo] = useState("");
const [isEditing, setIsEditing] = useState(false);
const [currentTodo,  setCurrentTodo] = useState({});

const handleInputChange=(e)=>{
  setTodo(e.target.value)
}


const handleFormSubmit =(e)=>{
  e.preventDefault();
  if(todo !==""){

    setTodos([...todos,{
      id:todos.length  +1,
      Text: todo.trim()
    }])
  }
  setTodo("");
  }


  useEffect(() => {
localStorage.setItem("todos",   JSON.stringify(todos));   
  }, [todos]);


  const handleDeleteClick = (id) =>{
const removeItem = todos.filter((todo) => {
   return todo.id !== id;
})
setTodos(removeItem);
  }

  const handleEditInputChange = (e) =>{
setCurrentTodo({...currentTodo, Text:e.target.value})
console.log(currentTodo);
  }

const handleEditClick  = (todo) =>{
setIsEditing(true);
setCurrentTodo({...todo});
}

const handleUpdate =(id, updatedTodo)=>{
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });

    setIsEditing(false);

    setTodos(updatedItem);
  }


const handleEditFormSubmit = () =>{
  handleUpdate(currentTodo.id, currentTodo);
}
  

  return (
    <div>
    {isEditing ?(
      <form   onSubmit={handleEditFormSubmit}>
      <input 
      type="text"
      name="edit"
      placeholder='edit your name'
      value={currentTodo.Text}
      onChange={handleEditInputChange}
      /> <br /> <br />
    <button>update</button>
      </form> 

    ):(
      <form   onSubmit={handleFormSubmit}>
  <input 
  type="text"
  name="name"
  placeholder='Enter Name...'
  value={todo}
  onChange={handleInputChange}
  /><br /> <br />
  <button>Update</button>
  </form> 
    ) }
     
  <ul>
  {todos.map((todo)=>(<li  key={todo.id}>{todo.Text} <br/> <br/>

    <div><button onClick={()=> handleDeleteClick(todo.id)}> Delete</button>
    <button  onClick={() => handleEditClick(todo)}>Edit</button></div>
  </li>))}
  </ul>
    </div>
  );
}

export default Task10;
