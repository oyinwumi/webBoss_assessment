import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos , removeTodo, completeTodo }) => {

    const handleTodos = () =>{
       if(todos.length > 0) {
        return todos.map((todo)=>{
            return <Todo key={todo.id} todo={todo}
                removeTodo={removeTodo} 
                completeTodo={completeTodo} 
               
             />
        });
       };
       return <p className='text-lg text-blue-600 text-center'>There are no todos</p>
    }

  return (
    <div className=' md:w-[500px] w-[250px]  mx-auto text-blue-600 text-lg'>
      {handleTodos()}
    
    </div>
  )
}

export default TodoList