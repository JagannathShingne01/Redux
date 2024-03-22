import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

function Todo() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(
      <li className='my-2 text-xl' key={todo.id}>
        {todo.text}
        <button className='px-2 mx-2 rounded-md bg-black text-white' onClick={()=> dispatch(removeTodo(todo.id))}> X</button>
      </li>
    ))}
    </>
  )
}

export default Todo