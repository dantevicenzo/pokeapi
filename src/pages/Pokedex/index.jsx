import { useState } from 'react'
import PokemonList from '../../components/PokemonList'
import SearchBar from '../../components/SearchBar'
import SearchFilters from '../../components/SearchFilters'
import { api } from '../../services/api'
import './Pokedex.css'



// const [pokemonList, setPokemonList] = useState([]);

export default function Pokedex() {

  const [pokemonInput, setPokemonInput] = useState('pikachu');

  const handleSearch = async () => {

    const {data} = await api.get(`pokemon`);
  
    console.log(data);
    // console.log(data);
  }

  return (
    <div className="pokedex">
      <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
      <SearchBar value={ pokemonInput } onKeyUp={handleSearch} onChange={ (e) => setPokemonInput(e.target.value) }/>
      <SearchFilters />
      <PokemonList />
    </div>
  )
}
