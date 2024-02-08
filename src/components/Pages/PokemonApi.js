import React, { useEffect, useState } from "react";
import PokemonCard from "../Layout/Pokemon/PokemonCard";
const PokemonApi = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=151"
			);
			const data = await response.json();
			setPokemonList(data.results);
		};

		fetchData();
	}, []);
	return (
		<>
			<section>
				<div className="container p-5 has-text-centered">
					<h1 className="title ">Pokemon Api</h1>
				</div>

				<div className="container p-6 is-centered">
					<div className="columns is-mobile">
						<div className="column is-4 is-offset-one-quarter">
							{/*  */}
							<div className="container">
								<div className="columns is-multiline">
									{pokemonList.map((pokemon) => (
										<div className="column is-4" key={pokemon.name}>
											<PokemonCard pokemon={pokemon} />
										</div>
									))}
								</div>
							</div>
							{/*  */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PokemonApi;
