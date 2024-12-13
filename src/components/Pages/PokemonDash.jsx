
import { useEffect, useState } from "react";
import axios from "axios";

 const PokemonDash = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(API);
        const detailedPokemonData = await Promise.all(
          res.data.results.map(async (curPokemon) => {
            const pokemonRes = await axios.get(curPokemon.url);
            return pokemonRes.data;
          })
        );
        setPokemon(prevPokemon => [...prevPokemon, ...detailedPokemonData]);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [API, offset]);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="container has-text-centered">
        <h1 className="title is-size-1">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container has-text-centered">
        <h1 className="title is-size-1">{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <header className="has-text-centered">
          <h1 className="title is-size-1">Let's Catch Pokémon</h1>
        </header>
        <div className="field has-addons has-addons-centered">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search Pokémon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="columns is-multiline is-centered">
          {searchData.map((curPokemon) => (
            <div className="column is-one-quarter" key={curPokemon.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={curPokemon.sprites.other.dream_world.front_default}
                      alt={curPokemon.name}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <h1 className="title">{curPokemon.name}</h1>
                  <p className="subtitle">
                    {curPokemon.types.map((curType) => curType.type.name).join(', ')}
                  </p>
                  <div className="content">
                    <p><strong>Height:</strong> {curPokemon.height}</p>
                    <p><strong>Weight:</strong> {curPokemon.weight}</p>
                    <p><strong>Speed:</strong> {curPokemon.stats[5].base_stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="has-text-centered">
          <button className="button is-primary" onClick={() => setOffset(prevOffset => prevOffset + limit)}>
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};
export default PokemonDash;