import { useEffect } from 'react';
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
    <div>
      <StyledSwiper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          pagination={{ clickable: true }}
        >
          {[ItemImage1, ItemImage2, ItemImage3, ItemImage4].map((image, index) => (
            <SwiperSlide key={index} onClick={() => setSelectedImage(image)}>
              <img src={image} alt={`Product ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </StyledSwiper>

      <Thumbnails>
        {[ItemImage1, ItemImage2, ItemImage3, ItemImage4].map((image, index) => (
          <Thumbnail key={index} >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </Thumbnail>
        ))}
      </Thumbnails>
    </div>
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
    border-radius: 15px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .swiper-button-next {
    background: url(${NextArrow}) center/6px 12px no-repeat, #fff;
    right: 16px;
  }

  .swiper-button-prev {
    background: url(${PrevArrow}) center/6px 12px no-repeat, #fff;
    left: 16px;
  }

  .swiper-button-next:after,
  .swiper-rtl .swiper-button-prev:after,
  .swiper-button-prev:after,
  .swiper-rtl .swiper-button-next:after {
    display: none;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 445px;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  align-items: center;
  gap: 31px;
  margin-top: 32px;

  @media only screen and (max-width:1199px) {
    display: none;
  }
`;

const Thumbnail = styled.div`
  width: 88px;
  height: 88px;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100%;
    transition: background-color 0.3s;

    &:focus {
      border: solid 2px #ff7e1b;
      background-color: rgba(255, 255, 255, 0.75);
    }

    &:hover{
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;
