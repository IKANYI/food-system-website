import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;
  align-items: left;
  margin: 0;
  padding: 0;
  background-color:rgb(247, 247, 247);
  height:100vh;
  margin-top:1rem;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }
    li:hover {
      background-color: #029447;
    }
     a{
      style: none;
      text-decoration: none;
      text-underline: none;
      text-transform: uppercase;
      }

  // @media screen and (max-width: 768px) {
  //   flex-flow: column nowrap;
  //   background-color: rgb(37, 39, 255);
  //   position: fixed;
  //   transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  //   top: 0;
  //   right: 0;
  //   width: 300px;
  //   height: 100vh;
  //   padding-top: 3.5rem;
  //   transition: transform 0.3s ease-in-out;

    li {
      color: white;
      display: block; /* Ensures items are visible when menu opens */
      padding: 18px;
      text-align: center;
    }
   

    li:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const Rightnav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="">home</a></li>
      <li><a href="">about us</a></li>
      <li><a href="">what we do</a></li>
      <li><a href="">media and resources</a></li>
      <li><a href="">contact us</a></li>
    </Ul>
  );
};

export default Rightnav;
