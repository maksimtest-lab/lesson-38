// Это дополнительное задание, выполните его по желанию.
// Создайте еще один компонент, который будет отображать текущее время и обновлять его каждую секунду с использованием функции setInterval.
import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <p style={{ fontSize: '20px', color: 'blue', fontWeight: 'bold' }}>Текущее время: <span style={{ color: 'red' }}>{time}</span></p>
        </div>
    );
}

export default CurrentTime;