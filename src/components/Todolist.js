import Todo from "./Todo";

function Todolist({todos, ToggleTodo}) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} ToggleTodo={ToggleTodo} todo={todo}/>
    })
  )
}

export default Todolist;