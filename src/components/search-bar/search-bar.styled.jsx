import styled from 'styled-components';

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 35%;
   /* margin-right: 2%; */
   input{
    width:250px;
    height:70%
   }
   input[type="search"] {
    font-size: 18px;
    padding-left: 1rem;
   }
   input::-webkit-search-cancel-button {
      display: none;
   }
   .clear-button {
    position: absolute;
    margin-left:200px;
    cursor: pointer;
   }

   @media screen and (max-width: 800px) {
      margin-left:5%;
      input{
         width: 150px;
      }
      input[type="search"] {
         font-size: 15px;
         padding-left: .5rem;
      }
      .clear-button {
         position: absolute;
         margin-left:120px;
         cursor: pointer;
      }
   }
`

