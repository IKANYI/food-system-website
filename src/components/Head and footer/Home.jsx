import React, { useState, useEffect } from "react";
import styled from "styled-components";
import coffeeImage from "../../assets/images/coffee.jpeg"
import foodImage from "../../assets/images/food.jpeg";
import enviroImage from "../../assets/images/enviro.jpeg";
import demoImage from "../../assets/images/demo.jpeg";

const HomeStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  transition: background-image 2s ease-out;
  position: relative;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

/* Wrapper for the text area to apply the overlay */
const TextContainer = styled.div`
  background: rgba(0, 17, 0, 0.8); /* Dark overlay only on text */
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  max-width: 60%;
  text-align: center;
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin: 10px;

  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 5px black;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-shadow: 1px 1px 3px black;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.2rem;
    background-color: green;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: 3px solid white;
    transition: transform 0.8s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }

  /* Responsive Styles */
  @media (max-width: 1024px) {
    max-width: 70%;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 1.2rem;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    a {
      font-size: 1rem;
      padding: 0.4rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1rem;

    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }

    a {
      font-size: 0.9rem;
      padding: 0.3rem;
    }
  }
`;

const contentArray = [
  {
    title: "Food and Nutritional Security",
    description:
      "At CFSF, we work to improve food security and nutritional outcomes through sustainable farming practices, community education, and improved access to nutritious food.",
    points: [
      "✔ Sustainable agriculture techniques",
      "✔ Community nutrition programs",
      "✔ Food storage and distribution initiatives",
    ],
    image: foodImage,
    link: "#",
  },
  {
    title: "CFSF Demo Farms",
    description:
      "Our demonstration farms serve as hands-on learning centers where farmers and community members can learn modern, sustainable farming techniques.",
    points: [
      "✔ Organic farming best practices",
      "✔ Water-efficient irrigation systems",
      "✔ Livestock management training",
    ],
    image: demoImage,
    link: "#",
  },
  {
    title: "Environmental Conservation",
    description:
      "We focus on environmental sustainability by promoting afforestation, soil conservation, and eco-friendly farming methods to combat climate change.",
    points: [
      "✔ Tree planting initiatives",
      "✔ Soil and water conservation programs",
      "✔ Climate-smart agriculture techniques",
    ],
    image: enviroImage,
    link: "#",
  },
  {
    title: "Community Training",
    description:
      "Empowering local communities through hands-on training in agriculture, financial literacy, and entrepreneurship for sustainable development.",
    points: [
      "✔ Practical workshops & skill-building",
      "✔ Business and financial training",
      "✔ Youth and women empowerment programs",
    ],
    image: coffeeImage,
    link: "#",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { title, description, points, image, link } = contentArray[currentIndex];

  return (
    <HomeStyled style={{ backgroundImage: `url(${image})` }}>
      <TextContainer>
        <h1>{title}</h1>
        <p>{description}</p>
        {points.map((point, index) => (
          <p key={index}>{point}</p>
        ))}
        <a href={link}>Learn More</a>
      </TextContainer>
    </HomeStyled>
  );
};

export default Home;
