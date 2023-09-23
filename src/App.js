
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [time, setTime] = useState(sessionLength * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isSession, setIsSession] = useState(true)


  const handleIncrement = (e) => {
    switch (e) {
      case 1:
        if(timerRunning === true) {
          return;
        }
        if (breakLength === 60) {
          return;
        } else if (breakLength < 60) {
        setBreakLength(breakLength + 1);
        if (!isSession){
          setTime((breakLength + 1) * 60)
        }
        break;
        }
        case 2:
          if(timerRunning === true) {
            return;
          }
          if(sessionLength === 60) {
            return;
          } else if (sessionLength < 60) {
        setSessionLength(sessionLength + 1);
        if (isSession){
        setTime((sessionLength + 1) * 60)
        }
        break;
          }
        default:
        break;
  }
  }

  const handleDecrement = (e) => {
    switch (e) {
      case 1:
        if(timerRunning === true) {
          return;
        }
        if (breakLength === 1){
          return;
        } else if (breakLength > 1) {  
        setBreakLength(breakLength - 1);
        if(!isSession){
          setTime((breakLength - 1) * 60)
        }
        break;
        }
        case 2:
          if(timerRunning === true) {
            return;
          }
          if (sessionLength === 1) {
          return;
          } else if (sessionLength > 1) {
        setSessionLength(sessionLength - 1);
        if(isSession) {
        setTime((sessionLength - 1) * 60)
        }
        break;
          }
        default:
        break;
    }
  }
  

  useEffect(() => {
    const beepSound = document.getElementById("beep");

if (timerRunning && time === 0) {
  beepSound.play();

  setTimeout(() => {
    beepSound.pause();
    beepSound.currentTime = 0;
  }, 2000);
}
  
    if (timerRunning && time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } if (time === 0 && isSession === true){
      setIsSession(!isSession);
      setTime(breakLength * 60);
      setTimerRunning(true)
    } else if (time === 0 && isSession === false) {
      setIsSession(true)
      setTime(sessionLength * 60)
      setTimerRunning(true)
    }
  }, [time, timerRunning, isSession, sessionLength, breakLength]);

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


  const handleReset = () => {
    setBreakLength(5);
    setSessionLength(25)
    setTime(1500)
    setIsSession(true)
    
  }


  return (
 <div >
  <div>
  <div id='break-label'>Break Length</div>
  <button id="break-decrement" onClick={(() => handleDecrement(1))} >Decrement</button>
  <button id="break-increment" onClick={(() => handleIncrement(1))} >Increment</button>
  <div id="break-length">{breakLength}</div>
  </div>
  <div>
  <div id='session-label'>Session Length</div>
  <button id="session-decrement" onClick={(() => handleDecrement(2))} >Decrement</button>
  <button id="session-increment" onClick={(() => handleIncrement(2))} >Increment</button>
  <div id="session-length">{sessionLength}</div>
  </div>
  <div>
    <div id="timer-label">{isSession ? 'Session' : 'Break'}</div>
    <div id="time-left">{formatTime(time)}</div>
    <div>
    <button id="start_stop" onClick={toggleTimer}>{timerRunning ? 'Pause' : 'Start'}</button>
    <button id="reset" onClick={() => handleReset()}>Reset</button>
    <audio id='beep' src='https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3'></audio>
    </div>
  </div>
 </div>
  );
}

export default App;
