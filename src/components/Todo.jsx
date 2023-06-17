import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";


const Todo = ({ todo , removeTodo, completeTodo }) => {
  return (
    <div className='flex items-center text-center md:w-3/4 w-full   md:px-10 px-6 justify-between gap-4 mt-8 '>
     <div className='flex items-center justify-center '>
       <div className=''>
          <input type="checkbox" checked={todo.isCompleted} 
          className='w-4 h-4 outline-none border border-blue-600 '
          onChange={() => completeTodo(todo.id)}
          />
        </div>

        <div className='ml-2 '>
          <p className={`text-xl text-justify break-all ${todo.isCompleted? " line-through text-black": ""}`}>{todo.todoText}</p>
        </div>
     </div>

      <div className='flex text-center justify-center text-2xl text-red-700 gap-2 '>
       <span onClick={() => removeTodo(todo.id)}><RiDeleteBin6Line  /></span>
      </div>
    </div>
  )
}

export default Todo