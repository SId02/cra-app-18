import React, { useState } from 'react';

const LeapYearChecker = () => {
    const [year, setYear] = useState('');
    const [message, setMessage] = useState('');
  
    const checkLeapYear = () => {
      const isLeapYear = new Date(year, 1, 29).getMonth() === 1;
      const messageText = isLeapYear
        ? `The year ${year} is a leap year.`
        : `The year ${year} is not a leap year.`;
      setMessage(messageText);
    };
   
    return (
        <>
            <section>
                    <div className="container p-5 has-text-centered">
                        <h1 className="title ">Leap Year Checker</h1>
                    </div>
                     <div className="container p-6 ">
                                <div className="columns is-desktop  has-text-centered">
                                    <div className="column is-4 is-offset-one-quarter box">
                                            <div className="field">
                                                <div className="control">
                                              <input type="number" className="input" placeholder="Enter a year" value={year} onChange={(e) => setYear(e.target.value)} />
                                                </div>
                                            </div>
                                             <p className="  p-3 m-2">{message}</p>
                                            <button className="button is-primary is-outlined" type="submit" onClick={checkLeapYear}>
                                                Submit
                                            </button>
                                    </div>
                                </div>
                    </div> 
            </section>
        </>
    );
   }

export default LeapYearChecker;