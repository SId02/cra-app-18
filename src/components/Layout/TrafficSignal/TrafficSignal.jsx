
import  { useState, useEffect, useRef } from 'react';
import "./TrafficSignal.css";

function TrafficSignal() {
  const [color, setColor] = useState('red');
  const [time, setTime] = useState(10); 
  const timerRef = useRef(null); 

  const timings = {
    red: 40,    
    green: 15,  
    yellow: 5,   
  };

  useEffect(() => {
   
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (time > 0) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else {

      clearInterval(timerRef.current);
      timerRef.current = null; 
    
      if (color === 'red') {
        setColor('green');
        setTime(timings.green);
      } else if (color === 'green') {
        setColor('yellow');
        setTime(timings.yellow);
      } else {
        setColor('red');
        setTime(timings.red);
      }
    }

   
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [color, time, timings]); 

  return (
    <div className="container has-text-centered mt-6">
      <div className="box">
        <h1 className="title">Traffic Signal</h1>
        <div className="traffic-signal">
          <div className={`signal red-signal ${color === 'red' ? 'active' : ''}`}></div>
          <div className={`signal yellow-signal ${color === 'yellow' ? 'active' : ''}`}></div>
          <div className={`signal green-signal ${color === 'green' ? 'active' : ''}`}></div>
        </div>
        <p className="is-size-3">Time remaining: {time} seconds</p>
      </div>
    </div>
  );
}

export default TrafficSignal;