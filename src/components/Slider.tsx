import  { useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

import ItemImage1 from '/images/image-product-1.jpg';
import ItemImage2 from '/images/image-product-2.jpg';
import ItemImage3 from '/images/image-product-3.jpg';
import ItemImage4 from '/images/image-product-4.jpg';
import NextArrow from '/images/icon-next.svg';
import PrevArrow from '/images/icon-previous.svg';

interface SliderProps {
  setSelectedImage: (image: string) => void;
}

function Slider({ setSelectedImage }: SliderProps) {
  useEffect(() => {
    setSelectedImage(ItemImage1);
  }, [setSelectedImage]);

  return (
    <StyledSwiper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide onClick={() => setSelectedImage(ItemImage1)}>
          <img src={ItemImage1} alt="Product 1" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedImage(ItemImage2)}>
          <img src={ItemImage2} alt="Product 2" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedImage(ItemImage3)}>
          <img src={ItemImage3} alt="Product 3" />
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelectedImage(ItemImage4)}>
          <img src={ItemImage4} alt="Product 4" />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </StyledSwiper>
  );
}

export default Slider;

const StyledSwiper = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .swiper-button-next {
    background: url(${NextArrow}) center/ 6px 12px no-repeat, #fff;
    right: 16px;
  }

  .swiper-button-prev {
    background: url(${PrevArrow}) center/ 6px 12px no-repeat, #fff;
    left: 16px;
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after {
    all: unset;
  }

  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    all: unset;
  }

  @media only screen and (min-width: 1220px) {
    max-width: 445px;
  }
`;
