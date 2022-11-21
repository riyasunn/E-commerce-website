import styled from 'styled-components';
// import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const SearchDropdownContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  left: 300px;
  z-index: 5;
  overflow: scroll;
`;

export const NoResultMessage = styled.p`
  font-size: 18px;
  margin: auto;

`;
export const Products = styled.div`
  height: 280px;
  display: flex;
  padding-bottom: 20px;
  
  img {
    width: 30%;
  }


 .details {
    display: grid;
    justify-self: end;
    padding-left:50px;

    && span {
    font-size: 16px;
    display: grid;
   
    }
    Button {
        min-width: 135px;
        font-size:11px
    }
 }
  
  
`
