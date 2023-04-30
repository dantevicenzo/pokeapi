import PokemonItem from '../../components/PokemonItem/PokemonItem'
import SearchBar from '../../components/SearchBar/SearchBar'
import SearchFilters from '../../components/SearchFilters/SearchFilters'
import './Pokedex.css'

export default function Pokedex() {
  return (
    <div className="pokedex">
      <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
      <SearchBar />
      <SearchFilters />
      <PokemonItem />
    </div>
  )
}
