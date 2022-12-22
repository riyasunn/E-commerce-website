import styled from "styled-components";
import { useState } from "react";
import RightNav from "./right-nav";

const StyledBurger = styled.div`
    width: 2rem;
    height: 1.3rem;
    position: fixed;
    top: 40px;
    right: 40px;
    display: none;
    z-index: 1000;
  /* width: 70px; */

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
        
    }
    div {
        width: 1.3rem;
        height: .2rem;
        background-color: ${({open})=> open ? '#ccc' : ' #333'};         
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .2s linear;
        /* b2afa1 */

        &:nth-child(1) {
            transform: ${({open}) => open? 'rotate(45deg)' : 'rotate(0)'}; 
        }
        &:nth-child(2) {
            transform: ${({open}) => open? 'translatex(100%)' : 'translatex(0)'}; 
            opacity:${({open}) => open? '0' : '1'};
        }
        &:nth-child(3) {
            transform: ${({open}) => open? 'rotate(-45deg)' : 'rotate(0)'}; 
        }
    }
`;


const Burger = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <>
            <StyledBurger open={isOpen} onClick={()=>setIsOpen(!isOpen)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            <RightNav open={isOpen}/>
        </>
    )
};

export default Burger
