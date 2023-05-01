import banner from '../../assets/Banner-Home.png'
import { Button } from '../../components/Button/style'
import { Main, ImgBanner } from './style'
import { useTheme } from 'styled-components'

export default function Home() {

  const { colors } = useTheme();

  return (
    <Main>
        <div>
            <h1><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
            <h2>You can know the type of Pokemon, its strengths, disadvantages and abilities</h2>
            <Button backgroundColor={ colors.green } onClick={ () => location.href="/pokeapi/#/pokedex" }>See pokemons</Button>
        </div>

        <ImgBanner src={ banner }></ImgBanner>
    </Main>
  )
}
