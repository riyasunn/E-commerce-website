import styled from "styled-components";

export const FilterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: ". a a .";
    column-gap: 20px;
    row-gap: 50px;
    h1 {
        grid-area: a;
        align-self: center;
        justify-self: center;
        margin-top:200px;
        font-size: 50px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-template-areas:"a a";
        overflow-x: hidden;
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-template-areas:"a";
    }

    h1{
        font-size: 40px;
        
    }
`;

