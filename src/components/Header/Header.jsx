import "./Header.css"
import logo from "../../assets/Logo.png"

export default function Header() {
  return (
    <header>
        <img src={logo}></img>
        <ul>
            <li><a href="/pokeapi/">Home</a></li>
            <li><a href="/pokeapi/#/pokedex">Pokédex</a></li>
            <li><a href="/pokeapi/#/legendaries">Legendaries</a></li>
            <li><a href="/pokeapi/#/documentation">Documentation</a></li>
        </ul>    
    </header>
  )
}
