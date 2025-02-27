import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  background-color: #008000; /* Green background */
  color: white;
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const DonateButton = styled.button`
  background-color: white;
  color: #008000; /* Green text */
  border: none;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DonationBanner = () => {
  return (
    <Banner>
      <span>Support CFSF Kenya's sustainable development efforts.</span>
      <DonateButton>Donate Now</DonateButton>
    </Banner>
  );
};

export default DonationBanner;
