import { useState } from 'react'
import './App.css'
import { Todoprovider } from './context/todoContext';

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todomsg) => {
    settodos((prev) => [{id: Date.now(),...todomsg},...prev])
  }

  const updateTodo = (id, todomsg) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todomsg : prevTodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevTodo) => prevTodo !== id))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed
    }: prevTodo)))
  }
  
  return (
    <Todoprovider value={{todos, deleteTodo, updateTodo, addTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              {/* Todo form goes here */} 
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
            </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
