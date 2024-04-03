import React, { useState } from 'react';

const YearCalculator = () => {

 const [date, setDate] = useState(1);
 const [month, setMonth] = useState(1);
 const [year, setYear] = useState(1900);
 const [years, setYears] = useState('');

 const calculateYear = () => {
   const d2 = new Date().getDate();
   const m2 = 1 + new Date().getMonth();
   const y2 = new Date().getFullYear();
   let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   if (date > d2 && month >= m2 && year >= y2) {
     setYears("You haven't been born yet!");
     return;
   }
   if (date > d2) {
     d2 = d2 + monthDays[m2 - 1];
     m2 = m2 - 1;
   }
   if (month > m2) {
     m2 = m2 + 12;
     y2 = y2 - 1;
   }
   const d = d2 - date;
   const m = m2 - month;
   const y = y2 - year;
   setYears(`Years is ${y} Years ${m} Months ${d} Days`);
 };

  return (
    <>
      <section className="py-6 section">
            <div className="container pb-5 has-text-centered">
              <h1 className="title">
              Year Calculator
              </h1>
            </div>
    <div className="container pt-5 is-horizontal">
      <div className="columns is-multiline is-centered ">

        <div className="column is-5 is-8-desktop   ">
          <form className="box  ">
            <div className="columns">
              <div className="column">
                <div className="field">
                  <label for="weight" className="label">Enter in Day</label>
                  <div className="control">
                    <input className="input is-medium" name="date"
                    id="date"
                    placeholder="DD"
                    required="required"
                    minlength="1"
                          maxlength="2"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min="1"
                          max={new Date(year, month, 0).getDate()}
                        />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <label for="height" className="label">Enter in Month</label>
                  <div className="control">
                    <input className="input is-medium "name="month"
                    id="month"
                    placeholder="MM"
                    required="required"
                    minlength="1"
                          maxlength="2"
                          value={month}
                          onChange={(e) => setMonth(e.target.value)}
                          min="1"
                          max={12}
                        />
                  </div>
                </div>
              </div>
              
              <div className="column">
                <div className="field">
                  <label for="weight" className="label">Enter in Year</label>
                  <div className="control">
                    <input className="input is-medium"name="year"
                    id="year"
                    placeholder="YYYY"
                    required="required"
                          minlength="4"
                          maxlength="4"
                          type="number"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                          min="1900"
                          max="3000"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control has-text-centered">
                  <button className="button is-link calculate"  type="button" name="submit" value="Submit" onClick={calculateYear}>Calculate</button>
                </div>
              </div>
            </div>
                <h4 className="text-center has-text-centered mt-5">{years}</h4>
          </form>
        </div>

      </div>
    </div>
  </section>
		</>
	);
}

export default YearCalculator;
