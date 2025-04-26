
function App() {
    let a = 1;
    return (
        <div className="container">
            <h1 className="title" id="title">Lesson 38 - React {a}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quidem.</p>
            <button onClick={() => console.log('click')}>Click me</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);