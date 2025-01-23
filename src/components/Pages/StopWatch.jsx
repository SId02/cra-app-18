
import React, { useState, useEffect } from 'react';


const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => {
              if (prevMinutes === 59) {
                setHours((prevHours) => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (isRunning) {
      const lapTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      setLaps([...laps, lapTime]);
    }
  };

  const formatTime = (h, m, s) => 
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  return (
    <div className="container">
      <div className="card">
        <div className="card-content has-text-centered">
          <h1 className="title is-2 mb-5">
            {formatTime(hours, minutes, seconds)}
          </h1>
          
          <div className="buttons is-centered">
            <button 
              className={`button ${isRunning ? 'is-warning' : 'is-success'}`} 
              onClick={handleStartStop}
            >
              {isRunning ? 'Pause' : 'Start'}
            </button>
            
            <button 
              className="button is-info" 
              onClick={handleLap}
              disabled={!isRunning}
            >
              Lap
            </button>
            
            <button 
              className="button is-danger" 
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

          {laps.length > 0 && (
            <div className="mt-5">
              <h3 className="subtitle is-4">Laps</h3>
              <div className="tags are-medium is-centered">
                {laps.map((lap, index) => (
                  <span key={index} className="tag is-primary">
                    Lap {index + 1}: {lap}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
