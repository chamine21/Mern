import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axiosPokemon();
  }, []);

  const axiosPokemon = () => {
   
      axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
      .then((response) => {
        console.log(response.data);
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log('Got an Error =>', error);
      });
  };

  return (
    <div className="App">
      <button onClick={axiosPokemon}>Axios Pokemon</button>
     
      <ul>
        {pokemon.map((p, idx) => (
          <li key={idx}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
