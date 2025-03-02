import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Sample partner logos (replace with actual image URLs)
const partnerLogos = [
  { src: require("../../assets/images/demo.png"), alt: "Partner: Organic Agriculture Centre of Kenya" },
  { src: require("../../assets/images/pelum.png"), alt: "Partner: Pelum Kenya" },
  { src: require("../../assets/images/coffee.jpeg"), alt: "Partner: Murang'a County" },
  { src: require("../../assets/images/logo-kalro.png"), alt: "Partner: KALRO" },
  { src: require("../../assets/images/UFSC-logo.jpg"), alt: "Partner: UFSC" },
];

const fallbackImage = "https://via.placeholder.com/150?text=Logo+Unavailable";

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
  max-width: 80%;
  margin: auto;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  margin: auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .swiper-slide img {
    max-width: 150px;
    height: auto;
    object-fit: contain;
    transition: transform 0.3s ease;
    border-radius: 8px;
  }

  .swiper-slide:hover img {
    transform: scale(1.05);
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
        aria-label="Partner logos carousel"
      >
        {partnerLogos.map((partner, index) => (
          <SwiperSlide key={index}>
            <img
              src={partner.src}
              alt={partner.alt}
              onError={(e) => (e.currentTarget.src = fallbackImage)}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default PartnersCarousel;
