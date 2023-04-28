import "./Header.css"
import logo from "../../assets/Logo.png"

export default function Header() {
  return (
    <div className="header">
        <img src={logo}></img>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pokedex">Pokédex</a></li>
            <li><a href="/legendaries">Legendaries</a></li>
            <li><a href="/documentation">Documentation</a></li>
        </ul>    
    </div>
  )
}
