import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const partnerLogos = [
  { 
    src: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587975/oack-logo_rvm3ik.png", 
    alt: "Organic Agriculture Centre of Kenya",
    name: "OACK"
  },
  { 
    src: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587975/pelum_qknjk1.png", 
    alt: "Pelum Kenya",
    name: "PELUM Kenya"
  },
  { 
    src: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587976/muranga_vvxail.png", 
    alt: "Murang'a County",
    name: "Murang'a County"
  },
  { 
    src: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587974/logo-kalro_rzkxda.png", 
    alt: "KALRO",
    name: "KALRO"
  },
  { 
    src: "https://res.cloudinary.com/dklr77uyo/image/upload/v1743587975/UFSC-logo_ksahjr.jpg", 
    alt: "UFSC",
    name: "UFSC"
  },
];

const fallbackImage = "https://via.placeholder.com/150?text=Logo+Unavailable";

const Section = styled.section`
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  color: #2e7d32;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;

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

const StyledSwiper = styled(Swiper)`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    height: auto;
    transition: all 0.3s ease;
  }

  .swiper-slide:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
  }

  .partner-logo {
    max-width: 180px;
    max-height: 100px;
    object-fit: contain;
    margin-bottom: 1rem;
    filter: grayscale(1%);
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .swiper-slide:hover .partner-logo {
    filter: grayscale(0%);
    opacity: 1;
  }

  .partner-name {
    color: #333;
    font-weight: 600;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #2e7d32;
    background: rgba(255, 255, 255, 0.8);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .swiper-pagination-bullet {
    background: #ccc;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #2e7d32;
  }

  @media (max-width: 768px) {
    width: 95%;
    
    .swiper-slide {
      padding: 1rem;
    }
    
    .partner-logo {
      max-width: 120px;
    }
  }
`;

const PartnersCarousel = () => {
  return (
    <Section aria-labelledby="partners-heading">
      <Title id="partners-heading">Our Valued Partners</Title>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ 
          delay: 3000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }}
      >
        {partnerLogos.map((partner, index) => (
          <SwiperSlide key={index}>
            <img
              className="partner-logo"
              src={partner.src}
              alt={partner.alt}
              onError={(e) => (e.currentTarget.src = fallbackImage)}
              loading="lazy"
            />
            <span className="partner-name">{partner.name}</span>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Section>
  );
};

export default PartnersCarousel;