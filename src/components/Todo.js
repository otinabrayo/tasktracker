function Todo({todo, ToggleTodo}) {
    const handletodoClick = () =>{
        ToggleTodo(todo.id)
    }

  return (
    <label>
        <input type="checkbox" checked={todo.complete} onChange={handletodoClick}/>
        {todo.name}
    </label>
  )
}

export default Todo
