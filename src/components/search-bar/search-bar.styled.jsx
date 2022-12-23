import styled from 'styled-components';

export const SearchContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   /* margin-left: 35%; */
   /* margin-right: 2%; */
   input{
    width:250px;
    height:2rem;
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
    margin-left:220px;
    cursor: pointer;
   }

   @media screen and (max-width: 800px) {
      /* margin-left:3%; */
      /* margin-right:60px; */
      input{
         width: 150px;
         height: 40px;
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

