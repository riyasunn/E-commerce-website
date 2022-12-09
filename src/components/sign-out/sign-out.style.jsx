import styled from 'styled-components';
import { BaseButton } from '../button/button.styles';

export const SignOutIconContainer = styled.div`
  width: 80px;
  height: 50px;
  position: absolute;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: black ;
  top: 90px;
  right: 100px;
  z-index: 4;
  cursor: pointer;
  ${BaseButton}{
    min-width: 55px;
    font-size: 15px;
  }
`;



