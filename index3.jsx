const root = document.getElementById('root');

let todos = [];
let todoInput = '';

function renderApp() {
    const handleInputChange = (event) => {
        todoInput = event.target.value;
        renderApp();
    }

    const handleAddTodo = () => {
        if (todoInput.trim() !== '') {
            todos.push(todoInput);
            todoInput = '';
            renderApp();
        }
    }

    const handleDeleteTodo = (index) => {
        // todos = todos.filter((todo) => todo !== todoInput);
        todos.splice(index, 1);
        renderApp();
    }

    const input = React.createElement('input', {
        type: "text",
        value: todoInput,
        onChange: handleInputChange,
        placeholder: 'Enter todo',
    });

    const addButton = React.createElement('button', {
        onClick: handleAddTodo,
    }, 'Add todo');

    const deleteButton = React.createElement('button', {
        onClick: handleDeleteTodo,
    }, 'Delete todo');

    const todoList = React.createElement(
        'ul',
        {},
        todos.map((todo, index) => {
            return React.createElement('li', { key: todo }, todo, ' ', (index) => deleteButton);
        })
    );

    const app = React.createElement(
        'div',
        {},
        input,
        addButton,
        todoList
    );

    root.createElement(app);
    root.render(React.createElement(app));

}

renderApp();