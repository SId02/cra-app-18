import React, { useState } from "react";
import TipCalculator from "../Layout/TipCalculator/TipCalculator";
//import BmiCalculator from "../Layout/BmiCalculator/BmiCalculator";
import CountryDetails from "../Layout/CountryDetails/CountryDetails";
function Counter() {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount(count + 1);
	}
	function decrementCount() {
		setCount(count - 1);
	}
	function resetCount() {
		setCount(0);
	}

	let countColor = "grey";
	if (count > 0) {
		countColor = "green";
	} else if (count < 0) {
		countColor = "red";
	}
	
	return (
		<>
			

			<div className="container has-text-centered p-5">
				<h3 className="is-size-4"> Counter | Tip Calculator</h3>
			</div>
			<section className="section">
				<div className="container">
					<div className="mb-5 columns is-multiline is-centered">
						<div className="column is-10 is-6-desktop has-text-centered">
							<h2 className="mt-2 mb-4 title">
								Counter
							</h2>
						</div>
					</div>
                     <div className="columns is-multiline is-centered">
                            <div className="column is-10 is-8-desktop">
                                <div className="card ">      
                                        <div className="card-content">
                                        <div className="content has-text-centered ">
                                            <p style={{ color: countColor }}  className=" mt-2 mb-4 is-size-1  has-text-weight-bold">{count}</p>
                                        </div>
                                        </div>
                                        <footer className="card-footer m-3">
                                    <p className="card-footer-item button increment mb-3 "onClick={incrementCount}> Increment + &nbsp;<i class="fa-solid fa-plus"></i> </p>
                                        <p className="card-footer-item button reset mb-3"onClick={resetCount}>Reset &nbsp; <i class="fa-solid fa-rotate"></i></p>
                                    <p className="card-footer-item button decrementmb-3 "onClick={decrementCount}>Decrement - &nbsp; <i class="fa-solid fa-minus"></i></p>
                                        </footer>
                                    </div>
                            </div>    
                      </div> 
				</div>
			</section>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<hr />
							<div className="container">
										<TipCalculator/>
							</div>	
			<hr />
							{/* <div className="container">
										<BmiCalculator/>
							</div>	 */}
 							<div className="container">
										<CountryDetails/>
							</div>	
		
		
		</>
	);
}

export default Counter;
