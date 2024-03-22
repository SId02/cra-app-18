
import React from 'react';

const PokemonCard = ({ pokemon }) => {
 return (
    <div className="card">
      <div className="card-image">
         <figure className="image is-4by3">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </figure> 
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{pokemon.name}</p>
          </div>
        </div>
      </div>
    </div>
 );
};

export default PokemonCard;