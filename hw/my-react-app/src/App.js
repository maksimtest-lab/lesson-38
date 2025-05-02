import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import CurrentTime from './CurrentTime';

function App() {
  return (
    <>
      <h1>Lesson 38 - Homework from InnoDOM</h1>
      <h2>Задания 1-5</h2>
      <Greeting name="Yaro" />
      <Greeting name="Maks" />
      <Greeting name="Дима" />
      <Greeting name="Илья" />
      <Greeting name="Денис" />
      <h2>Задания 6 - счетчик</h2>
      <Counter />
      <h2>Задания 7 - текущее время</h2>
      <CurrentTime />
    </>
  );
}

export default App;
