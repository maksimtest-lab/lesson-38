# Getting Started with Create React App
## Задание 1

Создайте новый проект React с использованием Create React App. Назовите его "MyReactApp". Убедитесь, что проект успешно создан.

`npx create-react-app my-react-app`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

`cd my-react-app`

`npm start`

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Задание 2

Исследуйте структуру проекта, созданного с помощью Create React App. Ответьте на следующие вопросы:

- В каком каталоге находится исходный код вашего приложения?

    `src`
- Где хранятся статические файлы, такие как HTML?

    `public`

- Какие файлы и каталоги относятся к зависимостям проекта?

    `package.json`, `node_modules`, `package-lock.json`

## Задание 3

Создайте новый функциональный компонент с именем "Greeting". Этот компонент должен выводить на экран приветствие, например, "Привет, мир!".

## Задание 4

В компоненте "Greeting" используйте JSX для отображения текста приветствия. Затем вставьте этот компонент в файл "src/App.js" и выведите его на странице.

## Задание 5

Расширьте компонент "Greeting", чтобы он мог принимать имя пользователя в качестве свойства (props) и выводить приветствие с именем пользователя. Вызовите компонент с разными именами пользователей.

## Задание 6

Создайте классовый компонент с именем "Counter". Добавьте в него состояние (state) в виде счетчика, начальное значение которого равно 0. Выведите счетчик на страницу и добавьте кнопки для увеличения и уменьшения его значения.

## Задание 7

    Это дополнительное задание, выполните его по желанию.

- Создайте еще один компонент, который будет отображать текущее время и обновлять его каждую секунду с использованием функции setInterval.

- Стилизуйте компоненты.