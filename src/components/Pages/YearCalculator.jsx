import React from "react";

const YearCalculator = () => {
	return (
		<>
			<section className="py-6 section">
    <div className="container pb-5 has-text-centered">
      <h1 className="title ">
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
                    maxlength="2"/>
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
                    maxlength="2" />
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
                    maxlength="4" />
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="control has-text-centered">
                  <button className="button is-link calculate"  type="button" name="submit" value="Submit" onclick="age()">Calculate</button>
                </div>
              </div>
            </div>
            <div id="age" className="text-center">
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
		</>
	);
}

export default YearCalculator;
