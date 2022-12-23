import styled from "styled-components";

export const Title = styled.h2`
    font-size: 38px;
    text-align: center;
    margin-bottom: 28px;
    cursor: pointer;

  
`;

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`;