import SearchBar from '../../components/SearchBar/SearchBar'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import './Pokedex.css'

export default function Pokedex() {
  return (
    <div className="pokedex">
      <h1>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
      <SearchBar />
      <SearchFilter />
    </div>
  )
}
