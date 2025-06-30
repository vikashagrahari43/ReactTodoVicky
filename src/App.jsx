import { useEffect, useState } from 'react'

import { TodoProvider } from './Context/todocontext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, settodos] = useState([])
  
  const addtodo = (todo) =>{
    settodos((prev) => [{id: Date.now() , ...todo},...prev ])
  }

  const updatetodo = (id, todo) => {
    settodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)) )
  }
  
  const deletetodo = (id) =>{
    settodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id )) 
  }

  const todocompleted = (id) =>{
    settodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, completed : !prevtodo.completed } : prevtodo ))
  }

  useEffect(() => {
   const todos =  JSON.parse( localStorage.getItem("todoss"))

     if (todos && todos.length > 0){
      settodos(todos)
     }
  }, [])

  useEffect( () =>{
      localStorage.setItem("todoss", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addtodo, deletetodo, updatetodo, todocompleted}}>
    <div className="bg-[#739cd8] h-screen w-full md:p-8 p-4 ">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg md:px-4 px-2 py-3 text-white bg-black">
                    <h1 className="md:text-3xl text-xl font-bold text-center mb-8 mt-2 ">Manage Your Todos </h1>
                    <div className="mb-4 ">
                        {/* Todo form goes here */} 
                        <TodoForm/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3 text-sm md:text-2xl font-semibold">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) =>{
                          return(
                            <div key={todo.id}
                            className='w-full'
                            >
                              <TodoItem todo ={todo} />
                            </div>
                          )
                        })}

                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
