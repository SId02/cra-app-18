import  { useState } from 'react';

const DateDifferenceCalculator = () => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('');
    const [result, setResult] = useState('');

    const calculateDifference = (date1Input, date2Input) => {
        const [day1, month1, year1] = date1Input.split('/').map(Number);
        const [day2, month2, year2] = date2Input.split('/').map(Number);

        const firstDate = new Date(year1, month1 - 1, day1);
        const secondDate = new Date(year2, month2 - 1, day2);

        if (firstDate > secondDate) {
            [firstDate, secondDate] = [secondDate, firstDate];
        }

        const timeDifference = Math.abs(secondDate - firstDate);
        const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        let years = year2 - year1;
        let months = month2 - month1;

        if (months < 0) {
            years--;
            months += 12;
        }

        let days = day2 - day1;

        if (days < 0) {
            months--;
            const lastMonth = new Date(year2, month2 - 1, 0);
            days += lastMonth.getDate();
            if (months < 0) {
                years--;
                months += 12;
            }
        }

        return { years, months, days, totalDays };
    };

    const handleCalculate = () => {
        const { years, months, days, totalDays } = calculateDifference(date1, date2);
        setResult(`Difference: ${years} years, ${months} months, and ${days} days (Total: ${totalDays} days)`);
    };

    return (
        <div className="container">
            <h1 className="title">Calculate Days Between Two Dates</h1>
            <div className="columns">
                <div className="column">
                <div className="field">
                <label className="label" htmlFor="date1">First Date (DD/MM/YYYY):</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        id="date1" 
                        placeholder="DD/MM/YYYY" 
                        value={date1} 
                        onChange={(e) => setDate1(e.target.value)} 
                    />
                </div>
            </div>
                </div>
                <div className="column">
                <div className="field">
                <label className="label" htmlFor="date2">Second Date (DD/MM/YYYY):</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        id="date2" 
                        placeholder="DD/MM/YYYY" 
                        value={date2} 
                        onChange={(e) => setDate2(e.target.value)} 
                    />
                </div>
            </div>
                </div>
            </div>
            

            <button className="button is-primary" onClick={handleCalculate}>Calculate Difference</button>

            { result && (
                
                <div className="container p-5 box">
                     <h2 className="subtitle">{result}</h2>
                </div>
               
            )}
        </div>
    );
};

export default DateDifferenceCalculator;