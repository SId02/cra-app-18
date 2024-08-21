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
								<span className="has-text-white is-size-1 is-bold mb-5 pb-5">
									React App 
								</span>
								<p className="mb-3 subtitle has-text-black pt-5 mt-5">
									It's Web App using React JS 18 , React Router Version 6 , Axios and Bulma CSS. 	
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container has-text-centered">
						<div className="columns is-multiline is-centered">
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>React JS 18</p>
								</div>
							</div>

							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>Hooks</p>
								</div>
							</div>
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>React Router Version 6</p>
								</div>
							</div>

							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>Axios</p>
								</div>
							</div>

							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>React-Redux</p>
								</div>
							</div>

							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>Bulma CSS</p>
								</div>
							</div>
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>API Call</p>
								</div>
							</div>
							{/* <div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>Chart JS</p>
								</div>
							</div> */}
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p>Vite JS</p>
								</div>
							</div>
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p></p>
								</div>
							</div>
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p></p>
								</div>
							</div>
							<div className="column is-3 has-text-centered">
								<div className="box is-flex is-align-items-center has-background-light is-justify-content-center is-size-4 is-bold">
									<p></p>
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
