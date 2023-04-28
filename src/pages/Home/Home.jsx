import './Home.css'
import banner from '../../assets/Banner-Home.png'
import { Button } from '../../components/styled/ButtonBig.styled'

export default function Home() {
  return (
    <div className='home'>
        <div className='coverText'>
            <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
            <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
            <Button backgroundColor="#73D677" onClick={ () => location.href="/pokeapi/#/pokedex" }>See pokemons</Button>
        </div>

        <img src={ banner }></img>
    </div>
  )
}
