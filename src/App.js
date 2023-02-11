import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Pomodoro Timer</h1>

        <div className="timer">
            <span>00</span>
            <span>:</span>
            <span>00</span>
        </div>

        <div className="buttons">
            <button>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>


    </div>
  );
}

export default App;
