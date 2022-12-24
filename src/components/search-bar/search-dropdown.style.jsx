import styled from 'styled-components';

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
  z-index: 5;
  overflow-x: hidden;
  margin-left:35%;
  /* margin-left: 17rem; */
  /* margin-left: 100px; */
  p {
    text-align:center;
    font-size:18px;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 20%;
    /* margin-right:40px;
    width: 300px; */
    }
  @media screen and (max-width: 800px) {
    margin-left: 40px;
    margin-right:40px;
    width: 300px;
    }
  @media screen and (max-width: 800px) {
    margin-right:30px;
    width: 270px;
  }
  
`;

export const NoResultMessage = styled.p`
  font-size: 18px;
  margin: auto;
  cursor: pointer;

`;

