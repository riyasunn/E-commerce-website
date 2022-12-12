import styled from 'styled-components';

export const Products = styled.div`
  height: 180px;
  display: flex;
  padding-bottom: 20px;
  
  img {
    width: 30%;
  };


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