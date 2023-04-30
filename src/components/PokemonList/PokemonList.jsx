import PokemonItem from "../PokemonItem/PokemonItem";
import { PokemonListContainer } from "../styled/styled";

const pokemonItem = {
    name: 'Pyroar',
    attack: '419',
    defense: '49',
    tag1: 
    {
        name: 'Grass',
        color: '#73D677'
    },
    tag2:
    {
        name: 'Poison',
        color: '#07D6F2'
    },
    backgroundColor: '#D93E30',
    imageURL: ''
}

export default function PokemonList() {
  return (
    <PokemonListContainer>
        <PokemonItem pokemonItem = { pokemonItem }/>
        <PokemonItem pokemonItem = { pokemonItem }/>
        <PokemonItem pokemonItem = { pokemonItem }/>
        <PokemonItem pokemonItem = { pokemonItem }/>
        <PokemonItem pokemonItem = { pokemonItem }/>
        <PokemonItem pokemonItem = { pokemonItem }/>
    </PokemonListContainer>
  )
}
