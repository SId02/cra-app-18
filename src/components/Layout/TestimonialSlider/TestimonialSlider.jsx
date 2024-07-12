import { useState } from "react";

const TestimonialSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const testimonials = [
		{
			name: "Jagan Mohan",
			position: "CEO, ABC Inc.",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
		},
		{
			name: "Jatin K",
			position: "COO, YU Inc.",
			text: "Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
		},
		{
			name: "Aditya Desai",
			position: "CTO, AAAD.",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.consectetur adipiscing elit. Integer nec odio. Praesent libero.consectetur adipiscing elit.",
		},
	];

	const nextSlide = () => {
		setCurrentSlide((currentSlide + 1) % testimonials.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(currentSlide - 1 + testimonials.length) % testimonials.length
		);
	};

	return (
		<>
		
      <div className="container has-text-centered p-5">
				<h3 className="is-size-4"> Testimonial Slider </h3>
			</div>

			<div className="p-5">
				<div className="columns is-desktop mt-5 has-text-centered">
					<div className="column is-6 is-half is-offset-one-quarter ">
						<div className="card">
							<div className="card-content">
								<div className="content testimonial">
									<p className="subtitle is-4">
										{testimonials[currentSlide].text}
									</p>
									<p className="has-text-grey is-size-6">
										{testimonials[currentSlide].name} -{" "}
										{testimonials[currentSlide].position}
									</p>
								
								</div>
							</div>
							<div className="buttons is-centered">
								<button className="button" onClick={prevSlide}>
									Previous
								</button>
								<button className="button" onClick={nextSlide}>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialSlider;
