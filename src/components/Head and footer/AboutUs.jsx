import React from "react";
import styled from "styled-components";
import aboutImage from "../../assets/images/demo.jpeg"; // Update this with your correct image path

const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  font-family: Arial, sans-serif;
  @media screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

  h2 {
    color: #007c3e;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 3px solid #007c3e;
    display: inline-block;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
`;

const AboutUs = () => {
  return (
    <AboutSection>
      <TextContainer>
        <h2>ABOUT US</h2>
        <p>
          Community Food Systems foundation (CFSF) was registered in
          2025 under the Kenyan law as a Community Based Organization (CBO). It
          has its office at Nairobi, Kenya. It has its operations in
          countrywide. It works with
          other organization  and farmers to help them improve their
          livelihood security.
        </p>
        <p>
          CFSF envisions resilient communities living in a healthy environment
          and sustainably using local resources for their improved quality of
          whole life. Its mission is to facilitate local communities to build
          their resilience against the impacts of climate change through
          promoting agro-ecology and local enterprise development.
        </p>
      </TextContainer>
      <ImageContainer>
        <img src={aboutImage} alt="CFSF Community Work" />
      </ImageContainer>
    </AboutSection>
  );
};

export default AboutUs;
