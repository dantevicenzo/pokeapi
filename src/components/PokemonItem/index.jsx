/* eslint-disable react/prop-types */
import pokemonImage from '../../assets/PokemonImgTest.png'
import { Container, InfoContainer, Title, PropsContainer, PropContainer, PropValue, PropTitle, TagsContainer, Tag, ImageContainer, Img } from "./style"

export default function PokemonItem(props) {
  return (
    <Container backgroundColor={ props.pokemonItem.backgroundColor }>
        <InfoContainer>
            <Title>{ props.pokemonItem.name }</Title>
            <PropsContainer>
                <PropContainer>
                    <PropValue>{ props.pokemonItem.attack }</PropValue>
                    <PropTitle>Attack</PropTitle>
                </PropContainer>
                <PropContainer>
                    <PropValue>{ props.pokemonItem.defense }</PropValue>
                    <PropTitle>Deffense</PropTitle>
                </PropContainer>
            </PropsContainer>
            <TagsContainer>
                <Tag backgroundColor={ props.pokemonItem.tag1.color }>{ props.pokemonItem.tag1.name }</Tag>
                <Tag backgroundColor={ props.pokemonItem.tag2.color }>{ props.pokemonItem.tag2.name }</Tag>
            </TagsContainer>
        </InfoContainer>
        <ImageContainer>
            <Img src={pokemonImage} />
        </ImageContainer>
    </Container>
  )
}
