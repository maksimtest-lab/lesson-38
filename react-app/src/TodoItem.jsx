function TodoItem({ todo, handleDeleteTodo }) {
    const { text, completed, id } = todo;

    return (
        <li className="todo-list-item">
            <p>{`${text} - ${completed ? "Completed" : "Not Completed"}`}</p>
            <button onClick={() => handleDeleteTodo(id)}>Delete</button>
        </li>
    )
}

export default TodoItem;