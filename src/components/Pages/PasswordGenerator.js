import React from "react";

const PasswordGenerator = () => {
	return (
    <>
      <section>

      
			<div className="container p-5 has-text-centered">
				<h1 className="title ">Password Generator</h1>
			</div>

			<div classNameName="container p-6">
				<div className="columns is-mobile">
					<div className="column is-half is-offset-one-quarter">
						<form className="box">
							<div className="field is-grouped">
								<p className="control is-expanded">
									<input
										className="input"
										type="text"
										placeholder="Find a repository"
									/>
								</p>
								<button className="button">
									<span className="icon is-small">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="feather feather-clipboard"
										>
											<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
											<rect
												x="8"
												y="2"
												width="8"
												height="4"
												rx="1"
												ry="1"
											></rect>
										</svg>
									</span>
								</button>
							</div>
							<div className="condition p-3 field is-horizontal is-justify-content-space-evenly">
								<div>
									<input
										type="range"
										id="length"
										name="length"
										min="8"
										max="30"
										className="mr-2"
									/>
									<label for="length">Length</label>
								</div>
								<div>
									<label className="checkbox numbers">
										<input type="checkbox" className=" mr-2" />
										Numbers
									</label>
								</div>
								<div>
									<label className="checkbox symbols">
										<input type="checkbox" className=" mr-2" />
										Symbols
									</label>
								</div>
							</div>
						</form>
					</div>
				</div>
        </div>
        
        <div className="container m-6">
        <div className="columns is-mobile">
            <div className="column is-half is-offset-one-quarter">
              <div className="is-centered">
                <p className="is-text">Length Min 8  to Max 30</p>
                <p className="is-text">Numbers 0 to 9</p>
                <p className="is-text">Symbols !@#$%&*? </p>
              </div>
            </div>
            </div>
        </div>
      </section>
		</>
	);
};

export default PasswordGenerator;
