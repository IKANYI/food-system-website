import React, { useState } from 'react';
import styled from 'styled-components';

const StyledTeam = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: #f9f9f9;
  width: 100%;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const TeamHeader = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: #27ae60;
    margin: 10px auto;
    border-radius: 2px;
  }
`;

const StyledMember = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  width: 250px;
  min-height: 350px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }
`;

const MemberImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
`;

const MemberInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MemberName = styled.h3`
  margin: 0 0 5px 0;
  font-size: 1.2rem;
  color: #2c3e50;
`;

const MemberTitle = styled.p`
  margin: 0 0 15px 0;
  font-weight: 600;
  color: #27ae60;
  font-size: 0.9rem;
`;

const MemberDescription = styled.div`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 20px;
  opacity: ${({ isExpanded }) => isExpanded ? 1 : 0};
  visibility: ${({ isExpanded }) => isExpanded ? 'visible' : 'hidden'};
  transform: ${({ isExpanded }) => isExpanded ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.3s ease;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #27ae60;
  color: white;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
`;

const OurTeam = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMember = (index) => {
    setExpandedMember(expandedMember === index ? null : index);
  };

  const members = [
    {
      name: "Patrick Kabui Njoroge",
      title: "Chief Executive Officer",
      photo: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743430722/WhatsApp_Image_2025-03-31_at_16.06.12_bxwovz.jpg",
      description: "Mr. Patrick Njoroge has over two decades of experience in agriculture, working with both private and public institutions. He has worked with Mastermind Tobacco Kenya Ltd as the Area Leaf Growing Manager for Western Kenya, overseeing over 3,000 farmers. Additionally, he worked with Nyayo Tea Zones Development Corporation, a state-owned entity focused on environmental conservation. He currently serves as the CEO of Community Food Systems Foundation and as a lecturer at Chuka University's Department of Plant Science."
    },
    {
      name: "Beatrice Muthoni Irungu",
      title: "Training Coordinator",
      photo: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743683936/passport_photo_eatzys.jpg",
      description: "Beatrice Irungu brings extensive expertise in organic farming education and farmer training. She holds a Diploma in Organic Agriculture from the Kenya Institute of Organic Farming (KIOF), where she specialized in sustainable crop production and soil management. Beatrice completed her professional internship at Grow Bio-Intensive Agriculture Centre of Kenya (GBIACK), gaining hands-on experience in biointensive farming techniques. As Training Coordinator at Community Food Systems Foundation, she designs and implements practical training programs that help small-scale farmers transition to organic methods. Her approach combines scientific organic farming principles with adaptable solutions for resource-limited farming communities across Kenya."
    },
    {
      name: "Meshack Waweru Itugi",
      title: "Field Officer",
      photo: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743430739/WhatsApp_Image_2025-03-31_at_16.06.10_lvoisr.jpg",
      description: "Mr. Waweru has over three years of experience in farmer education and agricultural extension, having worked with Organic Kenya Ltd in a similar capacity. He holds a Bachelor of Science degree in Agricultural Education and Extension from Chuka University."
    },
    {
      name: "Margaret Wambui",
      title: "Chief Accountant",
      photo: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743431035/WhatsApp_Image_2025-03-31_at_16.06.11_comlhf.jpg",
      description: "Ms. Wambui has over ten years of experience in accounting. She has worked with the Kenya Rural Roads Authority and was the Finance Manager for Pejom Contractors Ltd for six years. She holds a Bachelor's degree in Business Information Systems from the Technical University of Kenya and is a Certified Public Accountant (CPA-K) in Kenya."
    },
    {
      name: "Paul Ikanyi",
      title: "IT Support",
      photo: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743425027/user1_i5rn3w.jpg",
      description: "Paul Karanja is a passionate and self-driven tech enthusiast who loves using technology to educate people about agriculture. Paul holds a Degree in Software Engineering from Murang'a University Of Technology. He manages social media at CFSF."
    }
  ];

  return (
    <StyledTeam id="team">
      <TeamHeader>Our Team</TeamHeader>
      <StyledContainer>
        {members.map((member, index) => (
          <StyledMember key={index}>
            <MemberImage src={member.photo} alt={`Portrait of ${member.name}`} />
            <MemberInfo>
              <MemberName>{member.name}</MemberName>
              <MemberTitle>{member.title}</MemberTitle>
            </MemberInfo>
            <MemberDescription isExpanded={expandedMember === index}>
              <CloseButton onClick={(e) => {
                e.stopPropagation();
                setExpandedMember(null);
              }}>×</CloseButton>
              <h3>{member.name}</h3>
              <p><strong>{member.title}</strong></p>
              <p>{member.description}</p>
            </MemberDescription>
            <div 
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: '#27ae60',
                color: 'white',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: expandedMember === index ? 0 : 1,
                transition: 'opacity 0.3s ease'
              }}
              onClick={() => toggleMember(index)}
            >
              +
            </div>
          </StyledMember>
        ))}
      </StyledContainer>
    </StyledTeam>
  );
};

export default OurTeam;