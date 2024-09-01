import React, {useState, useRef, useEffect} from "react";
import Todolist from "./components/Todolist";
import uuidv4 from "uuid";

const localStorageKey = "todoApp.todos"

function App() {
  const [todos,setTodos] = useState([])
  const todoRef =  useRef()

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(localStorageKey)) 
    if (storedTodo) setTodos(storedTodo)
  }, [])

  const ToggleTodo = (id) => {
    const newTodo = [...Todolist]
    const todo = newTodo
    todo.complete = !todo.complete
    setTodos(newTodo)
  }

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  },[todos])

  function addTodo(e)  {
    const name = todoRef.current.value
    if (name ==='') return
      setTodos( prevTodo => {
        return [...prevTodo, {id:1, name:name, complete: false}]
      })
      todoRef.current.value = null
  }

  return (
    <>
      <h4>{todos.filter(todo => !todo.complete).length} left to do</h4>
      <input ref={todoRef} type="text"/>
      <input type="button" value="Add Todo" onClick={addTodo}/>
      <input type="button"  value="Clear Complete"/> <br />
      <Todolist todos= {todos} ToggleTodo={ToggleTodo}/>
    </>
  );
}

export default App;
 