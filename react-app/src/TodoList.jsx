import './App.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const handleAddTodo = () => {
        const newTodo = {
            id: todos.length + 1,
            text: value,
            completed: false,
        };
        setValue('');
        setTodos([...todos, newTodo]);
    };

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

  return (
    <div>
      <h1 className="todo-list-title">Todo List</h1>
      <input type="text" value={value} placeholder="Enter a todo" onChange={handleOnChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;