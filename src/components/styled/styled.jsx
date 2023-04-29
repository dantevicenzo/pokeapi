import styled from 'styled-components'

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