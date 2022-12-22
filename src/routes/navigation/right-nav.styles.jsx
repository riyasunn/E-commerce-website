import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
        flex-flow: column nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: #fff9de ;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 40vw;
        padding-top: 3.5rem;
        transform: ${({open}) => open? 'translatex(0)' : 'translatex(100%)'};
        transition: transform .3s ease-in-out;
        z-index:10;
        opacity: 0.980;
       
  }
`
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding: 20px 10px;
    font-weight: bold;
  }
`