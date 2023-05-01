import styled from 'styled-components'

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