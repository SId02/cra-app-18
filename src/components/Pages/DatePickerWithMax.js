import React, { useState} from 'react';

const DatePickerWithMax = () => {
 
	const [date, setDate] = useState('');
	const [error, setError] = useState('');
   
	const handleSubmit = (e) => {
	   e.preventDefault();
   
	   const maxDate = new Date();
	   maxDate.setDate(maxDate.getDate() + 180);
   
	   if (date === '') {
		 setError('Date is required');
	   } else if (new Date(date) > maxDate) {
		 setError('Date must be within 180 days from today');
	   } else {
		 setError('');
	   }
	};


  return (
    <>
        <section>
			<div className="container p-5 has-text-centered">
				<h1 className="title ">Date Validation for 180 days</h1>
			</div>

			<div className="container p-6 is-centered">
						<div className="columns is-mobile ">
					  <div className="column is-4 is-offset-one-quarter box">
								<form onSubmit={handleSubmit}>
									<div className="field">
											<div className="control">
												<input
												className="input"
												type="date"
												value={date}
												onChange={(e) => setDate(e.target.value)}
												/>
											</div>
									</div>
									{error && (
									<div className="notification is-danger">
										<p>{error}</p>
									</div>
									)}
									<div className="field">
									<div className="control">
										<button className="button is-primary">Submit</button>
									</div>
									</div>
								</form>
							</div>
						</div>
             </div>
        </section>

      </>
  )

}

export default DatePickerWithMax;
