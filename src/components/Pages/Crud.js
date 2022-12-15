import React from "react";

const Crud = () => {
	return (
		<>
			<div className="container">
				<h2>CRUD</h2>
				<hr />
				<div className="container">
					<h1 className="mb-5 has-text-centered  is-size-3">CRUD</h1>
					<button className="button is-medium">
						<span>Add User</span>
						<span className="icon">
							<i className="fa-solid fa-user-plus"></i>
						</span>
					</button>
					<div className="columns is-desktop  mt-5  is-half  has-text-centered">
						<div className="column  is-5">
							<div className="card">
								<div className="card-content">
									<p className="card-header-title">Component</p>
									<div className="content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Phasellus nec iaculis mauris.
										<br />
									</div>
								</div>
								<footer className="card-footer">
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-pen-to-square"></i>
											</span>
										</button>
									</a>
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-pen-to-square"></i>
											</span>
										</button>
									</a>
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-trash"></i>
											</span>
										</button>
									</a>
								</footer>
							</div>
						</div>
						<div className="column  is-5">
							<div className="card">
								<div className="card-content">
									<p className="card-header-title">Component</p>
									<div className="content">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Phasellus nec iaculis mauris.
									</div>
								</div>
								<footer className="card-footer">
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-pen-to-square"></i>
											</span>
										</button>
									</a>
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-pen-to-square"></i>
											</span>
										</button>
									</a>
									<a href="#" className="card-footer-item">
										<button className="button">
											<span className="icon">
												<i className="fa-solid fa-trash"></i>
											</span>
										</button>
									</a>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Crud;
