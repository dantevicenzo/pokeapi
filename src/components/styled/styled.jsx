import styled from 'styled-components'

// Home

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 12px 12%;
    background-color: var(--third);
    font-size: large;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    min-height: 0px;

    & ul {
        list-style: none;
        display: flex;
        gap: 48px;
    }

    & a {
        font-size: 18px;
        color: var(--dark);
    }

    & a:link {
        text-decoration: none;
    }
    
    & a:visited {
        text-decoration: none;
    }
  
    & a:hover {
        text-decoration: underline;
    }
  
    & a:active {
        text-decoration: underline;
    }
`
export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 0px 12%;
    min-height: 12px;

    & h3 {
        font-weight: bold;
    }
`
export const Button = styled.button`
    background-color: ${ (props) => props.backgroundColor };
    height: 66px;
    width: 231px;

    border: none;
    border-radius: 12px;
    box-shadow: 0px -9px 0px rgb(0, 0, 0, 0.18) inset;

    font-size: 23px;
    font-weight: bold;
    line-height: 16px;
    color: ${(props) => props.theme.colors.paragraph};

    &:hover {
        cursor: pointer;
        transform: scale(1.01);
    }

    &:active {
        transform: scale(1.02);
    }
`
export const Main = styled.main`
    display: flex;
    flex-direction: row;
    padding: 12px 0px 0px 12%;
    justify-content: space-between;
    flex: 1;
`
export const ImgBanner = styled.img`
    height: 75vh;
    object-fit: contain;
`

//404 Error Page

export const NotFoundContainer = styled.div`
    padding: 3% 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.danger};
    justify-content: space-between;

    & img {
        width: 80%;
    }

    & span {
        font-size: 48px;
    }
`

// Pokedex

export const PokemonItemContainer = styled.div`
    /* height: 135px; */
    /* width: 350px; */
    background: linear-gradient(
        to right,
        ${ (props) => props.theme.colors.grey } 0%,
        ${ (props) => props.theme.colors.grey } 39%,
        ${ (props) => props.backgroundColor } 39%,
        ${ (props) => props.backgroundColor } 100%
    );
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