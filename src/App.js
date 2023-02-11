import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Let the countdown begin!')
    const [timeLeft, setTimeLeft] = useState(10); // initial state = 25 minutes

    const minutes = Math.floor(timeLeft/60)
    const seconds = (timeLeft%60).toString().padStart(2, '0')

    const startTimer = () => {
        setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1)
                    return timeLeft-1;

                return 0
            })
        }, 1000)
    }

  return (
    <div className="App">
        <h1>Pomodoro Timer</h1>
        <h2>{title}</h2>

        <div className="timer">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>

        <div className="buttons">
            <button onClick={startTimer}>Start</button>
            <button>Stop</button>
            <button>Reset</button>
        </div>


    </div>
  );
}

export default App;
