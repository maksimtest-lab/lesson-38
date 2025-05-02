// Создайте классовый компонент с именем "Counter". Добавьте в него состояние (state) в виде счетчика, начальное значение которого равно 0. Выведите счетчик на страницу и добавьте кнопки для увеличения и уменьшения его значения.

import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <>
            <p>Count: <b style={{color: 'red'}}>{count}</b></p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;