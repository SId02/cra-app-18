import React, {useState} from "react";
const RandomColorGenerator = () => {
	const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",];
	const [color, setColor] = useState("#");
	const [copied, setCopied] = useState(false);

	const getRandomNumber = () => {
		return Math.floor(Math.random() * hex.length);
	};

	const generateColor = () => {
		let hexColor = "#";
		for (let i = 0; i < 6; i++) {
			hexColor += hex[getRandomNumber()];
		}
		setColor(hexColor);
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(color);
			setCopied(true);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<>
			<section className="hero is-large" style={{ backgroundColor: color }}>
				<div className="hero-body">
					<div className="container has-text-centered">
						<div className="columns is-mobile">
							<div className="column is-half is-offset-one-quarter">
								<div className="card">
									<div className="card-header field is-grouped has-background-grey-lighter">
										<h3 className="card-header-title is-justify-content-space-evenly ">
											Random Color Generator
											<span className="tag is-large is-pulled-right color">
												{color}
											</span>
										</h3>
										<button className="p-4 m-4 button" onClick={copyToClipboard}>
											<span className="icon is-small is-right">
												<svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
														d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container has-text-centered">
						<div className="p-5 ">
							<button className="button" onClick={generateColor}>
								Random Color
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default RandomColorGenerator;
