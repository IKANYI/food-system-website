import React from "react";
import styled from "styled-components";
import { FaXTwitter, FaSquareYoutube, FaFacebookF, FaInstagram } from "react-icons/fa6";

const FooterContainer = styled.footer`
  background: #008c45; /* Green background */
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 1rem;

  h3 {
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ffcc00;
    }
  }
`;

const Copyright = styled.div`
  background: #005a30; /* Dark green */
  padding: 1rem;
  font-size: 0.9rem;

  a {
    color: #ff4d6d;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          {/* OACK Brief */}
          <Section>
            <h3>CFSF Brief</h3>
            <p>
              CFSF is a non-profit public benefit organization (PBO) based in Kenya working with urban and rural organizations.
            </p>
          </Section>

          {/* Our Address */}
          <Section>
            <h3>Our Address</h3>
            <p>
              Community Food Systems Foundation <br />
              P.O. BOX 7343 – 00300 <br />
              Nairobi, Kenya
            </p>
          </Section>

          {/* Social Media Links */}
          <Section>
            <h3>Let's Connect</h3>
            <SocialIcons>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaSquareYoutube /></a>
              <a href="#"><FaInstagram /></a>
            </SocialIcons>
          </Section>

          {/* Contact Info */}
          <Section>
            <h3>Talk to Us</h3>
            <p>
              <strong>Call us:</strong> +254 720794573 <br />
              <strong>Email us:</strong> communityfoodsfdtn1@yahoo.com <br />
              bio_communityfoodsfdtn1@yahoo.com
            </p>
          </Section>
        </FooterContent>
      </FooterContainer>

      <Copyright>
        Copyright © {new Date().getFullYear()} Community Foods System Foundation. Designed by{" "}
        <a href="#">iQanny Ltd</a>
      </Copyright>
    </>
  );
};

export default Footer;
