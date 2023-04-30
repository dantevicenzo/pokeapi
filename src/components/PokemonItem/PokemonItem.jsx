/* eslint-disable react/prop-types */
import pokemonImage from '../../assets/PokemonImgTest.png'
import { PokemonItemContainer, PokemonItemInfoContainer, PokemonItemTitle, PokemonItemPropsContainer, PokemonItemPropContainer, PokemonItemPropValue, PokemonItemPropTitle, PokemonItemTagsContainer, PokemonItemTag, PokemonItemImageContainer, PokemonItemImg } from "../styled/styled"

export default function PokemonItem(props) {
  return (
    <PokemonItemContainer backgroundColor={ props.pokemonItem.backgroundColor }>
        <PokemonItemInfoContainer>
            <PokemonItemTitle>{ props.pokemonItem.name }</PokemonItemTitle>
            <PokemonItemPropsContainer>
                <PokemonItemPropContainer>
                    <PokemonItemPropValue>{ props.pokemonItem.attack }</PokemonItemPropValue>
                    <PokemonItemPropTitle>Attack</PokemonItemPropTitle>
                </PokemonItemPropContainer>
                <PokemonItemPropContainer>
                    <PokemonItemPropValue>{ props.pokemonItem.defense }</PokemonItemPropValue>
                    <PokemonItemPropTitle>Deffense</PokemonItemPropTitle>
                </PokemonItemPropContainer>
            </PokemonItemPropsContainer>
            <PokemonItemTagsContainer>
                <PokemonItemTag backgroundColor={ props.pokemonItem.tag1.color }>{ props.pokemonItem.tag1.name }</PokemonItemTag>
                <PokemonItemTag backgroundColor={ props.pokemonItem.tag2.color }>{ props.pokemonItem.tag2.name }</PokemonItemTag>
            </PokemonItemTagsContainer>
        </PokemonItemInfoContainer>
        <PokemonItemImageContainer>
            <PokemonItemImg src={pokemonImage} />
        </PokemonItemImageContainer>
    </PokemonItemContainer>
  )
}
