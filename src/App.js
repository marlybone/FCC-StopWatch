
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);


  const handleIncrement = (e) => {
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

  const handleDecrement = (e) => {
    switch (e) {
      case 1:
        setBreakLength(breakLength - 1)
        break;
        case 2:
        setSessionLength(sessionLength - 1)
        break;
        default:
        break;
    }
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
    <div id="time-left">{}</div>
    <div>
    <button id="start_stop"></button>
    <button id="reset"></button>
    </div>
  </div>
 </div>
  );
}

export default App;
