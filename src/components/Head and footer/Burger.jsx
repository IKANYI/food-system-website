import React, { useState } from 'react';
import styled from 'styled-components';
import Rightnav from './Rightnav';
import Logo from '../assets/logo.png';

const ImageStyled = styled.div`
 width:7rem;
 img{
 width:100%;
 }
`

const Burgerstyled = styled.div`
  width: 7rem;
  height: 2rem;
  position: absolute;

  right: 1px;
  top: 5rem;
  z-index: 100;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  cursor: pointer;


  @media screen and (max-width: 768px) {
    width: 3rem;
    height: 2rem;
  }

  div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    margin-bottom: 0.5rem;
    transform-origin: 13px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translate(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <ImageStyled>
     <img src={Logo} alt="logo" />
    </ImageStyled>
    
      <Burgerstyled open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burgerstyled>
      {open && <Rightnav open={open} />}
    </>
  );
};

export default Burger;
