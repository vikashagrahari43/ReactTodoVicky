import React, { createContext, useContext } from "react";

export const Todo = createContext({
    todos : 
 [{
    id : 1,
    Todo : "", 
    completed : false
}]
, addtodo: (todo) =>{} ,
updatetodo : (id , todo) =>{},
deletetodo: (id) =>{}, 
todocompleted :(id) =>{},

})

export const TodoProvider = Todo.Provider 

export default function useTodo() {
    return useContext(Todo)
}