import styled from "styled-components";

export const Container = styled.div`
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