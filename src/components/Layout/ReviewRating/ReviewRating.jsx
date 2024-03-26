import React from "react";

const ReviewRating = () => {
	return (
		<>
			<section className="py-6 section">
				<div className="container pb-5 has-text-centered">
					<h1 className="title ">Review Rating</h1>
				</div>
				<div className="container pt-5 is-horizontal">
					<div className="columns is-multiline is-centered is-desktop">
						<div className="column is-5 is-8-desktop is-half">
							<ul>
							<li>*</li>
							<li>*</li>
							<li>*</li>
							<li>*</li>
							<li>*</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ReviewRating;
