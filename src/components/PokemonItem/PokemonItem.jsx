import styled from "styled-components"

import pokemonImage from '../../assets/PokemonImgTest.png'

export const PokemonItemContainer = styled.div`
    /* height: 135px; */
    /* width: 350px; */
    background-color: ${ (props) => props.theme.colors.grey };
    box-shadow: ${ (props) => props.theme.boxShadowStyles.blurCard };
    border-radius: 12px;
    padding: 0 27px;
    display: flex;
    flex-direction: row;
    gap: 6px;
`
export const PokemonItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px 0;
`


export const PokemonItemTitle = styled.h3`
    font-size: ${ (props) => props.theme.fontSizes.h3 };
    text-shadow: ${ (props) => props.theme.boxShadowStyles.blurCard };
    font-weight: bold;
    line-height: 0;
    margin-block-start: 0.6em;
    margin-block-end: 1.2em;
`
export const PokemonItemPropsContainer = styled.div`
    display: flex;
    gap: 12px;
`
export const PokemonItemPropContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`
export const PokemonItemPropTitle = styled.div`
    color: #4B4B4B;
    font-size: ${ (props) => props.theme.fontSizes.h6 };
`

export const PokemonItemPropValue = styled.div`
    width: 36px;
    height: 36px;
    line-height: 36px;
    border: 3px solid black;
    border-radius: 50%;
    text-align: center;
    color: ${ (props) => props.theme.colors.pharagraph };
    font-size: 15px;
`

export const PokemonItemTagsContainer = styled.div`
    display: flex;
    gap: 6px;
`

export const PokemonItemTag = styled.div`
    background-color: ${ (props) => props.backgroundColor };
    border-radius: 12px;
    box-shadow: 0px -2px 0px rgb(0, 0, 0, 0.18) inset;
    padding: 1px 12px;
`
export const PokemonItemImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PokemonItemImg = styled.img`
    height: 100%;
`

export default function PokemonItem() {
  return (
    <PokemonItemContainer>
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
