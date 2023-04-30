import pokemonImage from '../../assets/PokemonImgTest.png'
import { PokemonItemContainer, PokemonItemInfoContainer, PokemonItemTitle, PokemonItemPropsContainer, PokemonItemPropContainer, PokemonItemPropValue, PokemonItemPropTitle, PokemonItemTagsContainer, PokemonItemTag, PokemonItemImageContainer, PokemonItemImg } from "../styled/styled"

export default function PokemonItem() {
  return (
    <PokemonItemContainer backgroundColor="#D93E30">
        <PokemonItemInfoContainer>
            <PokemonItemTitle>Pyroar</PokemonItemTitle>
            <PokemonItemPropsContainer>
                <PokemonItemPropContainer>
                    <PokemonItemPropValue>419</PokemonItemPropValue>
                    <PokemonItemPropTitle>Attack</PokemonItemPropTitle>
                </PokemonItemPropContainer>
                <PokemonItemPropContainer>
                    <PokemonItemPropValue>49</PokemonItemPropValue>
                    <PokemonItemPropTitle>Deffense</PokemonItemPropTitle>
                </PokemonItemPropContainer>
            </PokemonItemPropsContainer>
            <PokemonItemTagsContainer>
                <PokemonItemTag backgroundColor="#73D677">Grass</PokemonItemTag>
                <PokemonItemTag backgroundColor="#07D6F2">Poison</PokemonItemTag>
            </PokemonItemTagsContainer>
        </PokemonItemInfoContainer>
        <PokemonItemImageContainer>
            <PokemonItemImg src={pokemonImage} />
        </PokemonItemImageContainer>
    </PokemonItemContainer>
  )
}
