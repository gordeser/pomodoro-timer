import './App.css';
import {useRef, useState} from "react";

function App() {
    const [title, setTitle] = useState('Let the countdown begin!')
    const [timeLeft, setTimeLeft] = useState(3); // initial state = 25 minutes
    const [isRunning, setIsRunning] = useState(false)

    const minutes = Math.floor(timeLeft/60)
    const seconds = (timeLeft%60).toString().padStart(2, '0')

    const intervalRef = useRef(null)

    const startTimer = () => {
        if (intervalRef.current !== null) return

        setTitle("You're doing great!")
        setIsRunning(true)
        intervalRef.current = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft >= 1)
                    return timeLeft-1;

                resetTimer()
            })
        }, 1000)
    }

    const stopTimer = () => {
        if (intervalRef.current === null) return

        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTitle('Keep it up!')
        setIsRunning(false)
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setTitle('Ready to go another round?')
        setTimeLeft(25 * 60)
        setIsRunning(false)
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
            {!isRunning && <button onClick={startTimer}>Start</button>}
            {isRunning && <button onClick={stopTimer}>Stop</button>}
            <button onClick={resetTimer}>Reset</button>
        </div>

    </div>
  );
}

export default App;
