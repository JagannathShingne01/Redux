import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo} from '../feature/todo/todoSlice'

function AddTodo() {
    
    const [input, setInput] = useState('') 
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
    <form className='flex items-center justify-center' action="" onSubmit={addTodoHandler}>
        <input 
        className='border-white text-black m-2 p-1 bg-white'
        type="text " 
        placeholder="Enter Text..." 
        value={input} onChange={(e) => setInput(e.target.value)}/>
        <button 
            type="submit"
            className='text-white bg-black border-white p-1 rounded-sm'
        >
            Add Todo
        </button>
    </form>
    </>
  )
}

export default AddTodo

//42min