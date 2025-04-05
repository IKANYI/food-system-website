import React, { useState } from 'react';
import styled from 'styled-components';
import Rightnav from './RightNav.jsx';
import Logo from '../../assets/images/logo2.png';

const ImageStyled = styled.div`
 width:14em;
 overflow:hidden;

 img
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
     <img src="https://res.cloudinary.com/dklr77uyo/image/upload/v1743831167/new_logo_guj9k0.png" alt="logo" />
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