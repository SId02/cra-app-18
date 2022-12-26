import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import axois from "axios";

const server = "https://api.coingecko.com/api/v3";

const Exchanges = () => {
	const [exchanges, setExchanges] = useState([]);
	const [loading, setLoading] = useState([true]);
	const [error, setError] = useState();
	useEffect(() => {
		const fetchExchanges = async () => {
			try {
				const { data } = await axois.get(`${server}/exchanges`);
				setExchanges(data);
				setLoading(false);
			} catch (error) {
				setError(true);
				setLoading(false);
			}
		};
		fetchExchanges();
	}, []);

	if (error) {
		return(
			<div className="container  has-background-white	has-text-centered m-5">
				<div className="errorMessage text-is-danger">
					{"Error While Fetching Exchanges"}
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="section has-background-light">
				<div className="conatiner">
					{loading ? (
						<Loader />
					) : (
						<>
							<div className="columns is-multiline ">
								{exchanges.map((i) => (
									<div className="column mb-8 has-text-centered is-3"key={i.name}>
										<div className="box">
											<span  className="is-flex is-align-items-center is-justify-content-center mb-8 mx-auto has-background-success"
												style={{width: "56px", height: "56px", borderRadius: "100%"}}>
												<img src={i.image} alt={"Exchanges"} />
											</span>
											<h2>{i.trust_score_rank}</h2>
											<h4 className="mb-4 title is-4">{i.name}</h4>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Exchanges;
