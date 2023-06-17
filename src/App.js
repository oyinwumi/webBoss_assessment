import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos , setTodos] = useState([]);
  const [todo , setTodo] = useState("");
  

    // getting todos from localstorage
    useEffect(()=>{
      const todoJSON = localStorage.getItem("todos");
      const getTodos = JSON.parse(todoJSON);
      if(getTodos.length > 0){
        setTodos(getTodos)
      }
      
    }, [])

  // setting todos to localstorage
  useEffect(()=>{
    const todoJSON = JSON.stringify(todos);
    localStorage.setItem("todos", todoJSON); 
  }, [todos])
  

  // function to update form input
  const handleChanges = (e) =>{
    console.log(e);
    setTodo(e.target.value)
  }

  // function that handles form submission (todoform)
  const handleSubmit = (e) =>{
    e.preventDefault()

  const newTodo = {
    id: uuidv4(),
    todoText: todo,
    isCompleted: false,
  };
    setTodos([ ...todos, newTodo])
    setTodo("")
  }
   
  // function for deleting todo
  const removeTodo = (id) =>{
    const updateTodos = [...todos].filter((todo) => {
      return todo.id !== id ;
    })
    setTodos(updateTodos)
  }
 
  // function for toggling status of todos
  const completeTodo = (id) =>{
    const updateTodos = [...todos].map((todo)=>{
      if(todo.id === id){
        return{...todo, isCompleted: !todo.isCompleted }
      }
      return todo;
    })
    setTodos(updateTodos)
  }



  return (
    <div className="bg-white md:w-2/4 w-full  md:mx-auto mx-0 md:h-auto h-screen md:my-20 my-0 items-center md:p-10 p-5 rounded-lg">
       <TodoForm id='todo-add' value={todo} type= 'text'
         onChange={handleChanges}
         onSubmit={handleSubmit}
       />
       <TodoList todos={todos} 
          removeTodo={removeTodo} 
          completeTodo={completeTodo}
         
       />
       
    </div>
  );
}

export default App;
