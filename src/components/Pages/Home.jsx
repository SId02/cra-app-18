import React from "react";

const Home = () => {
	const gradientBackground = {
		backgroundImage:"linear-gradient( 141deg, rgb(200, 124, 255) 0%, rgb(116, 92, 252) 50%, rgb(63, 241, 253) 100% )",
	  };
	
	return (
		<>			
			<div className="section " style={gradientBackground} >  
				<section className="section is-fullheight" >
					<div className="container">
						<div className="columns is-multiline is-centered">
							<div className="column is-8 has-text-centered">
								<span className="has-text-white is-size-1 is-bold">
									React App 18
								</span>
								<p className="mb-3 subtitle has-text-black">
									It's Web App using ReactJS 		
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container has-text-centered">
						<div className="is-vcentered columns is-multiline has-text-centered">
							<div className="mb-4 column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-3 is-bold" style={{ height: "128px" }}>
									React JS
								</div>
							</div>
							<div className="mb-4 column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold"	style={{ height: "128px" }}>
									Bulma CSS
								</div>
							</div>
							<div className="mb-4 column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={ { height: "128px" } }>
									Hooks
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
									React-Router-Dom									
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={ { height: "128px" } }>
									Axios
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
									React-Redux
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold"	style={ { height: "128px" } }>
									Reduxjs/Toolkit
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
								</div>
							</div>
							<div className="mb-4 column is-3">
							 	<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
								</div>
							</div>
							<div className="mb-4 column is-3">
								<div className="box is-flex is-align-items-center has-background-light is-size-3 is-bold" style={{ height: "128px" }}>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			
		</>
	);
};
export default Home;
