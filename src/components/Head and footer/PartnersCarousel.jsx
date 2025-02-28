import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Sample partner logos (replace with actual image URLs)
const partnerLogos = [
  { src: "../../assets/images/oack-logo.png", alt: "Partner organic agriculture centre of kenya" },
  { src: "../../assets/images/pelum.png", alt: "Partner pelum kenya" },
  { src: "../../assets/images/muranga.png", alt: "Partner murang'a county" },
  { src: "../../assets/images/logo-kalro.png", alt: "Partner kalro" },
  { src: "../../assets/images/UFSC-logo.jpg", alt: "Partner ufsc" },
];

const Section = styled.div`
  background: #ffffff;
  padding: 2rem;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  color: green;
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  background: #f0f0f0;
  padding: 1rem;
  width: 250px;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  margin: auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 150px;
    height: auto;
    object-fit: contain;
  }
`;

const PartnersCarousel = () => {
  return (
    <Section>
      <TitleContainer>
        <Title>OUR PARTNERS</Title>
      </TitleContainer>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {partnerLogos.map((partner, index) => (
          <SwiperSlide key={index}>
            <img src={partner.src} alt={partner.alt} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default PartnersCarousel;
