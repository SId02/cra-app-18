import React, { useEffect, useState } from "react";
import axois from "axios";
import Loader from "../Loader";
export const server = "https://api.coingecko.com/api/v3";

const Coins = () => {
	const [coins, setCoins] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const coinsFetch = async () => {
			try {
				const { data } = await axois.get(`${server}/coins/markets?vs_currency=usd`);
				setCoins(data);
				setLoading(false);
			} catch (e) {
				setError(true);
				setLoading(false);
			}
		};
		coinsFetch();
	}, []);

	if (error) {
		return (
			<div className="container  has-background-white	has-text-centered m-5">
				<div className="errorMessage text-is-danger">
					{"Error While Fetching Coins"}
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="section has-background-light">
				<div className="container ">
					{loading ? (
						<Loader />
					) : (
						<>
							<div className="columns is-multiline ">
								{coins.map((i) => (
									<div className="column mb-8 has-text-centered  is-3 "key={i.name}>
										<div className="box">
											<span className="is-flex is-align-items-center is-justify-content-center mb-8 mx-auto has-background-light"
													style={{width: "56px",height: "56px",borderRadius: "100%",}}>
												<img src={i.image} alt={"Img"} />
											</span>
											<h2>{i.rank}</h2>
											<h4 className="mb-4 title is-4">{i.name}</h4>
											<p className="is-size-5 has-text-grey-dark">${i.current_price}</p>
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

export default Coins;
