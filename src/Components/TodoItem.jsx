import React, { useState } from 'react'
import useTodo from '../Context/todocontext';

function TodoItem({ todo }) {
    
  const  [todoMsg, setTodoMsg] = useState(todo.todo)
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const {deletetodo, updatetodo , todocompleted} = useTodo()
  
  
  const editTodo = () =>{
    updatetodo(todo.id , {...todo, todo : todoMsg })
    setIsTodoEditable(false)
   }

   const togglecompleted = () =>{
    todocompleted(todo.id)
   }
 


    return (
        <div
            className={`flex border border-black/10 rounded-lg md:px-1 px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#49a3ec]" : "bg-[#a954eb]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={togglecompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg md:text-2xl text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 "
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "✔" : "✍️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
