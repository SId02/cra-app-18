import React, { useState } from "react";


const Accordion = () => {
	
	return (
		<>
			<section className="section">
				<div className="container">
					<div className="mb-5 columns is-multiline is-centered">
						<div className="column is-10 is-6-desktop has-text-centered">
						
							<h2 className="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
								Accordion
							</h2>
							
						</div>
					</div> 
					<div className="columns mt-5	is-multiline is-centered">
						<div className="column is-10 is-8-desktop">
							<ul>
								<li className="mb-4">
									<button
										className="button is-fullwidth is-flex is-justify-content-between is-align-items-center is-info has-text-left"
										style={{height: 'auto',whiteSpace: 'unset'}}
										type="button"
									>
										<h2 className="pr-4 mr-auto">
											Fusce eget nunc et libero accumsan rutrum quis nec lectus?
										</h2>
										<svg
											className="is-flex-shrink-0 ml-auto"
											width="20"
											height="20"
											viewbox="0 0 20 20"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M19.2498 10C19.2498 4.892 15.1088 0.75 9.99976 0.75C4.89176 0.75 0.749756 4.892 0.749756 10C0.749756 15.108 4.89176 19.25 9.99976 19.25C15.1088 19.25 19.2498 15.108 19.2498 10Z"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
											<path
												d="M13.4709 11.4423L9.99995 7.95626L6.52895 11.4423"
												stroke="white"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</button>
									<div className="p-4	content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Nullam euismod orci sed tristique placerat. Fusce in ligula
										urna. Fusce eget nunc et libero accumsan rutrum quis nec
										lectus. Quisque luctus sem nibh, quis ornare neque
										consectetur varius. Maecenas rhoncus consectetur rutrum.
									</div>
								</li>
								
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Accordion;
