import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 35px;
  margin-top: 25px;
  

  @media screen and (max-width: 800px) {
    height: 85px;
    margin-top: 0px;
    /* margin-bottom: 500px; */
    position: fixed;
    top: 0;
    left: 0;
    justify-content: flex-start;
    background-color: #F8F8F8;
    z-index: 99;
    
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 25px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
    margin-left:40px;
    margin-right:20px;

  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;

`