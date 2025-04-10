import { useState, useEffect } from 'react';
const DigitalClock = () => {
  const [dateTime, setDateTime] = useState({
    time: '',
    date: '',
    day: ''
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      };

      setDateTime({
        time: now.toLocaleTimeString(),
        date: now.toLocaleDateString(undefined, options),
        day: now.toLocaleDateString(undefined, { weekday: 'long' })
      });
    };
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="box has-text-centered">
        <h1 className="title is-2">{dateTime.time}</h1>
        <h2 className="subtitle is-4">{dateTime.day}</h2>
        <h3 className="subtitle is-5">{dateTime.date}</h3>
      </div>
    </div>
  );
};

export default DigitalClock;
