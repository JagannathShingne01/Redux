import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo"


function App() {

  return (
    <>
    <div className="text-center mt-20">
      <h1 className="text-3xl text-white">Redux Toolkit Todo List</h1>
      <AddTodo/>
      <Todo/>
      </div>
    </>
  )
}

export default App
