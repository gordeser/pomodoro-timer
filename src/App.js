import './App.css';
import {useState} from "react";

function App() {
    const [timeLeft, setTimeLeft] = useState(25 * 60); // initial state = 25 minutes

    const minutes = Math.floor(timeLeft/60)
    const seconds = (timeLeft%60).toString().padStart(2, '0')

  return (
    <div className="App">
        <h1>Pomodoro Timer</h1>

        <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
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
