import React from "react";
import styled from "styled-components";

const Section = styled.div`
  background-color: #008000; /* Green background */
  padding: 3rem 2rem;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  text-align: left;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  color: #008000;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  background-color: #008000;
  color: white;
  padding: 0.7rem;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #006400;
  }
`;

const services = [
  {
    title: "Livelihood",
    image: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587974/enviro_ow6oum.jpg" // Replace with actual image path
  },
  {
    title: "Food and Nutritional Security",
    image: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587974/coffee_pzirk7.jpg", // Replace with actual image path
  },
  {
    title: "Environmental Conservation",
    image: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587976/training_5_k5cqnb.jpg", // Replace with actual image path
  },
];

const WhatWeDo = () => {
  return (
    <Section>
      <Title>WHAT WE DO</Title>
      <CardsContainer>
        {services.map((service, index) => (
          <Card key={index}>
            <Image src={service.image} alt={service.title} />
            <CardContent>
              <CardTitle>{service.title}</CardTitle>
              <Button>Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default WhatWeDo;
