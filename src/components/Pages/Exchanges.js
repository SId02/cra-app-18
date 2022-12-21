import React ,{useEffect,useState}from "react";
import Loader from "./Loader"
import axois from "axios";

export const server = "https://api.coingecko.com/api/v3";



const Exchanges = () => {
	const [exchanges, setExchanges] = useState([]);
	const [loading, setLoading] = useState ([true]);
	const [error, setError] = useState;
	useEffect(() => {
		const   fetchExchanges = async () => {
			try {
				const { data } = await axois.get(`${server}/exchange`);
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
    return (
        <div className="errorMessage">
            { "ErrorFetchingExchanges" }
        </div>
    );
}





    return (
        <div className="conatiner">
            { loading ? (
                <Loader/>
            ) : (
                    <>
                        <main>
                            { exchanges.map((i) => (
                                <articles key={i.name}>
                                    <img src={ i.image } alt={ "Exchange" } />
                                    <h2>{ i.trust_score_rank }</h2>
                                    <p>{ i.name }</p>
                                </articles>
                            ))}
                    </main>
                    </>
            )}
        </div>
    
    )
};

export default Exchanges;
