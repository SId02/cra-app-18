
import React ,{ useState } from "react";
const TipCalculator = () => {
	const [billAmount, setBillAmount] = useState(null);
	const [tipPercentage, setTipPercentage] = useState();
	const [splitCount, setSplitCount] = useState();
	const [tipAmount, setTipAmount] = useState(null);
	const [errorMsg, setErrorMsg] = useState("");

	function handleCalculteTip() {
	    if ( !billAmount || billAmount <= 0 || !tipPercentage || tipPercentage <= 0) {
	        setTipAmount(null)
	      setErrorMsg("Please Enter Valid Values For Bill Amount & Tip Percentage");
	      return;
	    }

	    const bill = parseFloat(billAmount);
	    const tip = (bill * tipPercentage) / 100;
	    const totalAmount = bill + tip;
	    const tipAmountPerPerson = tip / splitCount;
	    const totalAmountPerPerson = totalAmount / splitCount;

	    setTipAmount({
	      totalAmount: totalAmount.toFixed(2),
	      tipPerPerson: tipAmountPerPerson.toFixed(2),
	      totalPerPerson: totalAmountPerPerson.toFixed(2),
	    });
	    setErrorMsg('')
	  }

	return (
		<>
			<section className="py-6 section">
				<div className="container pb-5 has-text-centered">
					<h1 className="title"> TIP CALCULATOR </h1>
				</div>
				<div className="container pt-5 ">
					<div className="columns is-multiline is-centered">
						<div className="column is-5 is-4-desktop">
                            <div className="box">
                             
                                <div className="text-center p-3 ">
                                    { errorMsg ? (
                                        <div className="box">
										<p className="">{errorMsg}</p>
                                        </div>
									) : null}
									{tipAmount ? (
										<div className="text-center notification is-light">
											<p>Total Amount : &#8377; {tipAmount.totalAmount}</p>
											<p>Tip Per Person : &#8377; {tipAmount.tipPerPerson}</p>
											<p>Total Amount Per Person: &#8377; {tipAmount.totalPerPerson}</p>
										</div>
									) : null}
								</div>
                          
								<div className="field">
									<label for="amount" className="label">
										Bill Amount
									</label>
									<div className="control">
										<input className="input is-medium amount" id="amount"
											placeholder="&#8377; Bill Amount to be Paid"
											onChange={(event) => setBillAmount(event.target.value)}
											value={billAmount}
											type="number"
										/>
									</div>
								</div>
								<div className="field">
									<label for="guests" className="label">
										Number of Persons
									</label>
									<div className="control">
										<input
											className="input is-medium guests" id="guests"
											type="number" placeholder="Total number of Persons"
											onChange={(event) => setSplitCount(event.target.value)}
											value={splitCount}
										/>
									</div>
								</div>
								<div className="field">
									<label for="amount" className="label">
										Bill Amount
									</label>
									<div className="control">
										<input
											className="input is-medium amount" id="amount" type="number"
											placeholder="&#8377; Bill Amount to be Paid"
											onChange={(event) => setTipPercentage(event.target.value)}
											value={tipPercentage}
										/>
									</div>
								</div>

								<div className="field">
									<div className="control has-text-centered ">
										<button	className="button is-link calculate" onClick={handleCalculteTip}>
											Calculate
										</button>
									</div>
								</div>		
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default TipCalculator;
