// function App() {
//     return React.createElement(
//         'h1',
//         { className: 'title', id: 'title', onClick: () => console.log('click') },
//         'Lesson 38 - React'
//     );
// }


function App() {
    return React.createElement(
        'div',
        { className: 'container'},
        React.createElement(
            'h1',
            { className: 'title', id: 'title'},
            'Lesson 38 - React'
        ),
        React.createElement(
            'p',
            {},
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.'
        ),
        React.createElement(
            'button',
            {onClick: () => console.log('click') },
            'Lesson 38 - React'
        ),
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));