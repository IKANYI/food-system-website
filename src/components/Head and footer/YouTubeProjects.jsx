import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f8f9fa;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    flex-direction: column;
  }
`;

const SectionTitle = styled.h2`
  color: #2e7d32;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  width: 100%;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: #7cb342;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const ProjectsContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

const ProjectBox = styled.div`
  border: 1px solid #e0e0e0;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background: ${({ active }) => (active ? '#f1f8e9' : '#fff')};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  color: ${({ active }) => (active ? '#2e7d32' : '#333')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
`;

const ProjectContent = styled.div`
  margin-top: 1rem;
  color: #555;
  line-height: 1.7;
  display: ${({ active }) => (active ? 'block' : 'none')};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ExpandIcon = styled.span`
  font-size: 1.2rem;
  color: ${({ active }) => (active ? '#2e7d32' : '#666')};
`;

const VideoFrame = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 6px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const projects = [
  {
    title: "Enhancing Communities' Resilience for Livelihoods Improvement",
    description: "This program improves resilience in vulnerable communities by addressing challenges in accessing basic needs like food, water, shelter, and health services. Through sustainable agriculture training and resource management, we empower communities to build long-term food security and economic stability."
  },
  {
    title: "Sustainable Water Management Initiative",
    description: "Our water management projects focus on creating sustainable water sources through rainwater harvesting, borehole rehabilitation, and community water education. We've implemented systems serving over 5,000 households across Murang'a County."
  },
  {
    title: "Establishment of Water Catchments",
    description: "We design and construct water catchments to combat drought and water scarcity. These systems provide clean water for both household use and agricultural irrigation, significantly improving crop yields and reducing waterborne diseases."
  },
  {
    title: "Bio-cultural Diversity Conservation",
    description: "This initiative strengthens community and ecosystem resilience by preserving indigenous crops and farming methods. We work with local elders and agricultural experts to document and promote traditional knowledge while integrating modern sustainable practices."
  },
  {
    title: "School Fruit Forests Program",
    description: "We establish fruit forests in schools to provide nutrition education, sustainable food sources, and environmental awareness. Each forest includes a variety of fruit trees selected for their nutritional value and adaptability to local conditions."
  }
];

const YouTubeProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <SectionTitle>Our Media & Projects</SectionTitle>
      <Section>
        <VideoContainer>
          <h3>Latest From Our YouTube Channel</h3>
          <VideoFrame>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Community Food Systems Foundation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoFrame>
          <p style={{ marginTop: '1rem', color: '#666' }}>
            Subscribe to our channel for more updates on sustainable agriculture and community development.
          </p>
        </VideoContainer>

        <ProjectsContainer>
          <h3>Our Ongoing Projects</h3>
          {projects.map((project, index) => (
            <ProjectBox 
              key={index} 
              onClick={() => setActiveIndex(index === activeIndex ? null : index)}
              active={index === activeIndex}
            >
              <ProjectTitle active={index === activeIndex}>
                {project.title}
                <ExpandIcon active={index === activeIndex}>
                  {index === activeIndex ? "−" : "+"}
                </ExpandIcon>
              </ProjectTitle>
              <ProjectContent active={index === activeIndex}>
                {project.description}
              </ProjectContent>
            </ProjectBox>
          ))}
        </ProjectsContainer>
      </Section>
    </>
  );
};

export default YouTubeProjects;