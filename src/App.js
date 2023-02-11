import './App.css';
import {useRef, useState} from "react";

function App() {
    const [title, setTitle] = useState('Let the countdown begin!')
    const [timeLeft, setTimeLeft] = useState(10); // initial state = 25 minutes

    const minutes = Math.floor(timeLeft/60)
    const seconds = (timeLeft%60).toString().padStart(2, '0')

    const intervalRef = useRef(null)

    const startTimer = () => {
        setTitle("You're doing great!")
        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1)
                    return timeLeft-1;

                return 0
            })
        }, 1000)
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current)
        setTitle('Keep it up!')
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
            <button onClick={stopTimer}>Stop</button>
            <button>Reset</button>
        </div>


    </div>
  );
}

export default App;
