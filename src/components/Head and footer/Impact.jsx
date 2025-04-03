import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ImpactContainer = styled.section`
  background: linear-gradient(135deg, #006400, #008000);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: #7cb342;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: #7cb342;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ImpactCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.6s ease forwards;
  animation-delay: ${props => props.delay * 0.1}s;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #ffffff, #d1ffd1);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const PlusSign = styled.span`
  font-size: 2rem;
  vertical-align: top;
  margin-right: 5px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.9);
`;

const Impact = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [animated, setAnimated] = useState(false);

  const impactData = [
    { number: 100, text: "Water Tanks Installed" },
    { number: 50000, text: "Trees Planted" },
    { number: 200, text: "Women Empowered" },
    { number: 5, text: "Strategic Partnerships" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("impact-section");
      if (element && window.scrollY > element.offsetTop - window.innerHeight / 1.5) {
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (animated) {
      const durations = [1500, 2000, 1800, 1000];
      const increments = impactData.map((item, i) => {
        const increment = item.number / (durations[i] / 16);
        return increment;
      });

      const interval = setInterval(() => {
        setCounters(prev => prev.map((val, i) => {
          const target = impactData[i].number;
          if (val < target) {
            return Math.min(val + increments[i], target);
          }
          return target;
        }));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [animated]);

  return (
    <ImpactContainer id="impact-section">
      <Title>Our Impact</Title>
      <Subtitle>
        Measuring success through tangible results and community transformation
      </Subtitle>
      
      <ImpactGrid>
        {impactData.map((item, index) => (
          <ImpactCard key={index} delay={index}>
            <Number>
              {index !== 3 && <PlusSign>+</PlusSign>}
              {Math.floor(counters[index]).toLocaleString()}
              {index === 3 && <PlusSign>+</PlusSign>}
            </Number>
            <Description>{item.text}</Description>
          </ImpactCard>
        ))}
      </ImpactGrid>
    </ImpactContainer>
  );
};

export default Impact;