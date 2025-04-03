import React from "react";
import styled from "styled-components"; // Update this with your correct image path
import OurTeam from "./OurTeam";

const AboutSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 2rem;

  h2 {
    color: #2e7d32;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 4px;
      background: #7cb342;
      bottom: -10px;
      left: 0;
    }
  }

  h3 {
    color: #388e3c;
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #444;
    margin-bottom: 1.5rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: '•';
      color: #7cb342;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: sticky;
  top: 2rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    position: static;
    margin-top: 2rem;
  }
`;

const HighlightList = styled.div`
  background: #f1f8e9;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;

  h4 {
    color: #2e7d32;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 1.8rem;
    position: relative;

    &:before {
      content: '✓';
      color: #7cb342;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;

const AboutUs = () => {
  return (
    <>
      <AboutSection>
        <TextContainer>
          <h2>About Community Food Systems Foundation</h2>
          
          <h3>Our Foundation</h3>
          <p>
            The Community Food Systems Foundation (CFSF) is a Kenyan-based nonprofit organization established in 2017 to advance sustainable food systems in Kenya. We bridge the gap between agricultural research, education, and on-the-ground implementation to empower farmers and strengthen food security.
          </p>

          <h3>Our Mission</h3>
          <p>To transform Kenya's food systems through:</p>
          <HighlightList>
            <ul>
              <li><strong>Education</strong> – Training farmers in climate-smart, sustainable practices</li>
              <li><strong>Innovation</strong> – Promoting research-driven agricultural solutions</li>
              <li><strong>Community Impact</strong> – Supporting smallholder farmers for improved livelihoods</li>
              <li><strong>Policy Engagement</strong> – Advocating for sustainable food policies</li>
            </ul>
          </HighlightList>

          <h3>Our Approach</h3>
          <p>We focus on:</p>
          <ul>
            <li><strong>Sustainable Farming</strong> – Eco-friendly techniques to boost yields</li>
            <li><strong>Farmer Training</strong> – Hands-on workshops and extension services</li>
            <li><strong>Partnerships</strong> – Collaborating with universities and policymakers</li>
            <li><strong>SDG Alignment</strong> – Contributing to Kenya's Vision 2030 and UN Sustainable Development Goals</li>
          </ul>

          <h3>Why We Matter</h3>
          <p>CFSF plays a critical role in:</p>
          <ul>
            <li>Enhancing food security through resilient farming methods</li>
            <li>Empowering smallholder farmers with knowledge and tools</li>
            <li>Promoting environmental conservation via sustainable agriculture</li>
            <li>Strengthening rural economies for long-term growth</li>
          </ul>

          <p>
            By upholding our values of sustainability, education, and community-driven development, CFSF is shaping a future where Kenya's food systems are productive, equitable, and environmentally sound.
          </p>
        </TextContainer>
        <ImageContainer>
          <img src="https://res.cloudinary.com/dklr77uyo/image/upload/v1743587974/demo_fexxy4.jpg" alt="CFSF Community Work" />
        </ImageContainer>
      </AboutSection>
      <OurTeam/>
    </>
  );
};

export default AboutUs;