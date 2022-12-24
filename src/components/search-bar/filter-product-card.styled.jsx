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
        font-size:13px;
    }
 }


  
  @media screen and (max-width: 800px) {
   

    .details {
    padding-left:40px;
    

      Button {
          min-width:50px;
          width: 125px;
          font-size:13px;
          padding: 0 10px 0 10px;
      }
    }

  };

  @media screen and (max-width: 400px) {
    img{
      width: 30%;
    };

    .details {
    padding-left:35px;
    

    Button {
        min-width:50px;
        width: 115px;
        font-size:13px;
        padding: 0 5px 0 5px;
    }
  }
}
  
`