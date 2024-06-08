
import { Navigation} from 'swiper/modules';
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

const StyledSwiper = styled.div`
    position: relative;
    width: 100%;
    max-width: 375px;
    margin: 0 auto;

  .swiper-button-next, .swiper-button-prev {
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

  .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
    all:unset;
}

.swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
    all:unset;
}
`;

function Slider() {
  return (
    <StyledSwiper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={ItemImage1} alt="Product 1" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ItemImage2} alt="Product 2" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ItemImage3} alt="Product 3" style={{ width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ItemImage4} alt="Product 4" style={{ width: "100%" }} />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </StyledSwiper>
  );
}

export default Slider;
