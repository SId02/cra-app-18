import React from "react";
import AccordionTemplate from "../Layout/Accordion/AccordionTemplate"
const Accordion = () => {
	return (
		<>

			<section className="section">
				<div className="container">
					<div className="mb-5 columns is-multiline is-centered ">
						<div className="column is-10 is-6-desktop has-text-centered">
							<h2 className="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">
								FAQ's
							</h2>
						</div>
					</div>

					<div className="wrapper	columns mt-3 is-multiline is-centered ">
						<AccordionTemplate title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
							eget nunc et libero accumsan rutrum quis nec lectus. Quisque
							luctus sem nibh, quis ornare neque consectetur varius. Maecenas
							rhoncus consectetur rutrum.1
						</AccordionTemplate>
						<AccordionTemplate title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
							eget nunc et libero accumsan rutrum quis nec lectus. Quisque
							luctus sem nibh, quis ornare neque consectetur varius. Maecenas
							rhoncus consectetur rutrum.2
						</AccordionTemplate>
						<AccordionTemplate title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							euismod orci sed tristique placerat. Fusce in ligula urna. Fusce
							eget nunc et libero accumsan rutrum quis nec lectus. Quisque
							luctus sem nibh, quis ornare neque consectetur varius. Maecenas
							rhoncus consectetur rutrum.3
						</AccordionTemplate>
					</div>
				</div>
			</section>
		</>
	);
};

export default Accordion;
