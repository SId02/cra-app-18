import React, { useState } from 'react';


const AgeValidation = () => {
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
  
    const handleInputChange = (event) => {
      const inputAge = parseInt(event.target.value, 10);
      setAge(inputAge);
  
      if (inputAge < 18) {
        setMessage('You are not yet 18 years old.');
      } else if (inputAge >= 60 && inputAge < 75) {
        setMessage('You are a senior citizen aged 60 or 75 years old.');
      } else if (inputAge >= 75) {
        setMessage('You are a senior citizen aged 75 or above.');
      } else {
        setMessage('');
      }
    };
  
  return (
      <>
      <section>
			<div className="container p-5 has-text-centered">
				<h1 className="title ">Age Validation</h1>
			</div>

			<div className="container p-6 is-centered">
						<div className="columns is-desktop  has-text-centered">
					  <div className="column is-4 is-offset-one-quarter box ">
								<form >
                <input  type="number" value={age}  onChange={handleInputChange}  className="input" />
                  {message && (
                    <p className={`notification p-3 m-2 ${message.includes('18') ? 'is-danger' : 'is-warning'}`}>
                      {message}
                    </p>
                  )}
								</form>
							</div>
						</div>
             </div>
        </section>
      </>
      
    );
  };
  
  export default AgeValidation;