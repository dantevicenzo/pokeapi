import './Home.css'
import banner from '../../assets/banner.png'
import ButtonBig from '../../components/ButtonBig/ButtonBig'

export default function Home() {
  return (
    <div className='home'>
        <div className='coverText'>
            <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
            <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
            <ButtonBig href="/pokeapi/#/pokedex" text="See pokemons" color="#73D677" />
        </div>

        <img src={ banner }></img>
    </div>
  )
}
