import styled from "styled-components"

export const Container = styled.div`
    flex-grow: 1;
	width: 24%;
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
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 6px 0;
`
export const Title = styled.h3`
    font-size: ${ (props) => props.theme.fontSizes.h3 };
    text-shadow: ${ (props) => props.theme.boxShadowStyles.blurCard };
    font-weight: bold;
    line-height: 0;
    margin-block-start: 0.6em;
    margin-block-end: 1.2em;
`
export const PropsContainer = styled.div`
    display: flex;
    gap: 12px;
`
export const PropContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
`
export const PropTitle = styled.div`
    color: #4B4B4B;
    font-size: ${ (props) => props.theme.fontSizes.h6 };
`
export const PropValue = styled.div`
    width: 36px;
    height: 36px;
    line-height: 36px;
    border: 3px solid black;
    border-radius: 50%;
    text-align: center;
    color: ${ (props) => props.theme.colors.pharagraph };
    font-size: 15px;
`
export const TagsContainer = styled.div`
    display: flex;
    gap: 6px;
`
export const Tag = styled.div`
    background-color: ${ (props) => props.backgroundColor };
    border-radius: 12px;
    box-shadow: 0px -2px 0px rgb(0, 0, 0, 0.18) inset;
    padding: 1px 12px;
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
export const Img = styled.img`
    object-fit: contain;
`