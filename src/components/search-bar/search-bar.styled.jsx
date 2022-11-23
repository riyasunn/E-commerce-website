import styled from 'styled-components';

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 28%;
   margin-right: 28%;
   input{
    width:250px;
    height:70%
   }
   input[type="search"] {
    font-size: 18px;
    padding-left: 1rem;
   }
   .clear-button {
    position: absolute;
    margin-left:200px;
    cursor: pointer;
   }
`