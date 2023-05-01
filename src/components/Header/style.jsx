import styled from "styled-components";

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