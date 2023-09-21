
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [time, setTime] = useState(sessionLength * 60);
  const [timerRunning, setTimerRunning] = useState(false);


  const handleIncrement = (e) => {
    if (e === 60) {
      return;
    } else {
    switch (e) {
      case 1:
        setBreakLength(breakLength + 1)
        break;
        case 2:
        setSessionLength(sessionLength + 1)
        break;
        default:
        break;
    }
  }
  }

  const handleDecrement = (e) => {
    switch (e) {
      case 1:
        if (breakLength === 0 || breakLength === 60){
          return;
        } else {  
        setBreakLength(breakLength - 1)
        break;
        }
        case 2:
          if (sessionLength === 0 || sessionLength === 60) {
          return;
          } else {
        setSessionLength(sessionLength - 1)
        setTime((sessionLength - 1) * 60)
        break;
          }
        default:
        break;
    }
  }
  

  useEffect(() => {
    if (timerRunning && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [time, timerRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const toggleTimer = () => {
    setTimerRunning(!timerRunning);
  }


  return (
 <div >
  <div>
  <div id='break-label'>Break Length</div>
  <button id="break-decrement" onClick={(() => handleDecrement(1))}></button>
  <button id="break-increment" onClick={(() => handleIncrement(1))}></button>
  <div id="break-length">{breakLength}</div>
  </div>
  <div>
  <div id='session-label'>Session Length</div>
  <button id="session-decrement" onClick={(() => handleDecrement(2))}></button>
  <button id="session-increment" onClick={(() => handleIncrement(2))}></button>
  <div id="session-length">{sessionLength}</div>
  </div>
  <div>
    <div id="timer-label">Session</div>
    <div id="time-left">{formatTime(time)}</div>
    <div>
    <button id="start_stop" onClick={toggleTimer}> {timerRunning ? 'Pause' : 'Start'}</button>
    <button id="reset"></button>
    </div>
  </div>
 </div>
  );
}

export default App;
