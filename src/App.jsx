import { useState , useEffect} from 'react'
import './App.css'
import { Todoprovider } from './context/todoContext';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, settodos] = useState([]);

  const addTodo = (todomsg) => {
    settodos((prev) => [{id: Date.now(), ...todomsg},...prev])
  }

  const updateTodo = (id, todomsg) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todomsg : prevTodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed
    }: prevTodo)))
  }
  
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      settodos(todos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <Todoprovider value={{todos, deleteTodo, updateTodo, addTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">
              <TodoForm/>
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id}
                    className='w-full'>
                      <TodoItem todo={todo}/>
                </div>
              ))}
            </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
