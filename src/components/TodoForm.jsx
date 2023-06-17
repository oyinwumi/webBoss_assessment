import React from 'react'

const TodoForm = ({id, type, value,onSubmit,onChange}) => {
  return (
    <div className='p-10'>
        <h1 className='text-2xl text-blue-600 text-center mt-14'>TODO APP</h1>
        <p className='text-sm mt-2 text-blue-400 text-center'>Track and get your task done easily!</p>
        <form action="" id={`${id}-form`} onSubmit={(e) => onSubmit(e)}
          className='flex mt-14  px-10  justify-center'
        >
            <div className=''>
                <input type={type} id={`${id}-input`} value={value} required placeholder='Enter your todo'
                  onChange={(e) => onChange(e)}
                  className='border rounded outline-none p-3 border-blue-400   text-blue-500 text-xl'
                />
             
            </div>
            <button
             type='submit' id={`${id}-btn`}
            className='bg-blue-600 text-white border rounded p-2 text-center ml-4'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm