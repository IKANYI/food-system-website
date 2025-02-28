import React from "react";
import styled from "styled-components";

const ImpactContainer = styled.div`
  background: #008000;
  padding: 2rem;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const ImpactGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ImpactCard = styled.div`
  background: #029402; 
  padding: 1.5rem;
  width: 200px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Number = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const Impact = () => {
  const impactData = [
    { number: 10, text: "Water Tanks" },
    { number: 500, text: "Trees Planted" },
    { number: 250, text: "Women Trained" },
    { number: 5, text: "Organizations Partners " },
  ];

  return (
    <ImpactContainer>
      <Title>IMPACT MADE</Title>
      <ImpactGrid>
        {impactData.map((item, index) => (
          <ImpactCard key={index}>
            <Number>{item.number}</Number>
            <Description>{item.text}</Description>
          </ImpactCard>
        ))}
      </ImpactGrid>
    </ImpactContainer>
  );
};

export default Impact;
