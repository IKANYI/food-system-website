import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3rem 2rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: #008000;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const VideoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
`;

const ProjectsContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  padding-left: 2rem;
`;

const ProjectBox = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  cursor: pointer;
  background: #f9f9f9;

  &:hover {
    background: #f0f0f0;
  }
`;

const ProjectTitle = styled.div`
  font-weight: bold;
  color: ${(props) => (props.active ? "#008000" : "#000")};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 0.5rem;
  display: ${(props) => (props.active ? "block" : "none")};
  color: #333;
`;

const projects = [
  {
    title: "1. Enhancing communities’ Resilience for Livelihoods Improvement Programmes.",
    description:
      "The Enhancing Communities’ Resilience for Livelihoods Improvement  programme is a development initiative aimed at improving the resilience of communities in vulnerable areas. The program seeks to address challenges faced by vulnerable communities in accessing basic needs such as food, water, shelter, and health services.",
  },
  { title: "2." },
  { title: "3. Establishment of water catchments" },
  {
    title: "4. Conserving Bio-cultural Diversity through strengthening community and ecosystem resilience.",
  },
  { title: "5. Establishment of school fruit forests." },
  { title: "6. The  project." },
];

const YouTubeProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Section>
      {/* YouTube Section */}
      <VideoContainer>
        <Title>YOUTUBE CHANNEL</Title>
        <iframe
          width="100%"
          height="300px"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </VideoContainer>

      {/* Projects Section */}
      <ProjectsContainer>
        <Title>OUR PROJECTS</Title>
        {projects.map((project, index) => (
          <ProjectBox key={index} onClick={() => setActiveIndex(index)}>
            <ProjectTitle active={index === activeIndex}>
              {project.title}
              <span>{index === activeIndex ? "−" : "+"}</span>
            </ProjectTitle>
            {project.description && (
              <Content active={index === activeIndex}>{project.description}</Content>
            )}
          </ProjectBox>
        ))}
      </ProjectsContainer>
    </Section>
  );
};

export default YouTubeProjects;
