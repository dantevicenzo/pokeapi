import "./Header.css"
import logo from "../../assets/Logo.png"

export default function Header() {
  return (
    <div className="header">
        <img src={logo}></img>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Pokédex</a></li>
            <li><a href="/">Legendaries</a></li>
            <li><a href="/">Documentation</a></li>
        </ul>    
    </div>
  )
}
