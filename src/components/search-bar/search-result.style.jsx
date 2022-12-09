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
`;

