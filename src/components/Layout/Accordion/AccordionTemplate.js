import React, { useState } from "react";
import "./AccordionTemplate.css";
const AccordionTemplate = ({ title, children }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<div className="accordion-wrapper column is-10 is-8-desktop">
				<ul>
					<li
						className={`accordion-title mb-4  ${isOpen ? "open" : ""}`}
						onClick={() => setOpen(!isOpen)}
					>
				
						 <button
							className="button is-fullwidth is-flex is-justify-content-between is-align-items-center is-info has-text-left"
							style={{ height: "auto", whiteSpace: "unset" }}
							type="button"
						> 
							<h2 className="pr-4 mr-auto">{title}</h2>
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
						<div
							className={`accordion-item p-4	content ${
								!isOpen ? "collapsed" : ""
							}`}
						>
							{children}
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};

export default AccordionTemplate;
