import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";

const TopBar = styled.div`
  background: #2e7d32;
  color: white;
  padding: 0.6rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    text-align: center;
    display: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  background: rgba(255, 255, 255, 0.1);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Icon = styled.span`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

function Head() {
  return (
    <TopBar>
      <ContactInfo>
        <InfoItem>
          <Icon><IoLocationOutline /></Icon>
          <span>Nairobi, Kenya</span>
        </InfoItem>
        
        <InfoItem>
          <Icon><MdOutlineMailOutline /></Icon>
          <a href="mailto:cfsfoundation1@yahoo.com" aria-label="Email CFSF">cfsfoundation1@yahoo.com</a>
        </InfoItem>
        
        <InfoItem>
          <Icon><FaPhoneAlt /></Icon>
          <a href="tel:+254720794573" aria-label="Call CFSF">+254 720 794 573</a>
        </InfoItem>
      </ContactInfo>

      <SocialLinks>
        <SocialLink 
          href="https://twitter.com/cfsfkenya" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Follow us on Twitter"
        >
          <FaXTwitter />
        </SocialLink>
        
        <SocialLink 
          href="https://facebook.com/cfsfkenya" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Like us on Facebook"
        >
          <FaFacebookF />
        </SocialLink>
        
        <SocialLink 
          href="https://linkedin.com/company/cfsfkenya" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Connect with us on LinkedIn"
        >
          <FaLinkedinIn />
        </SocialLink>
      </SocialLinks>
    </TopBar>
  );
}

export default Head;