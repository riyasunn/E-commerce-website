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
  overflow: scroll;
  margin-left:35%;
  p {
    text-align:center;
    font-size:18px;
    cursor: pointer;
  }
`;

export const NoResultMessage = styled.p`
  font-size: 18px;
  margin: auto;

`;

