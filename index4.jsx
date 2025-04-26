const root = ReactDOM.createRoot(document.getElementById("root"));

let todos = [];
let todoInput = "";

function renderApp() {

    const handleInputChange = (event) => {
        todoInput = event.target.value;
        renderApp();
    };

    const handleAddTodo = () => {
        if (todoInput.trim() !== "") {
            todos.push(todoInput);
            todoInput = '';
            renderApp();
        }
    };

    const handleDeleteTodo = (index) => {
        todos.splice(index, 1);
        renderApp();
    }   
    

    const app = (
        <div>
            <input type="text" value={todoInput} onChange={handleInputChange} placeholder="Enter a todo" />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={todo}>
                        {todo}
                        <button onClick={() => handleDeleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )

    root.render(app);
}

renderApp();