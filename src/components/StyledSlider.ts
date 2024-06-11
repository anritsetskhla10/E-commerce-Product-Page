import styled from "styled-components";
import NextArrow from '/images/icon-next.svg';
import PrevArrow from '/images/icon-previous.svg';
import CloseIcon from '/images/icon-close.svg';

export const StyledSwiper = styled.div`
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;

  img {
    width: 100%;
    border-radius: 15px;
    cursor: pointer;
  }

  .swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
}

.swiper-button-next {
  background-image: url(${NextArrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 6px 12px;
  right: 16px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${NextArrow}) center/6px 12px no-repeat;
    background-color: #000;
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: #ff7e1b; 
  }
}

.swiper-button-prev {
  background: url(${PrevArrow}) center/6px 12px no-repeat, #fff;
  left: 16px;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${PrevArrow}) center/6px 12px no-repeat;
    background-color: #000; 
    transition: background-color 0.3s ease;
  }

  &:hover::after {
    background-color: #ff7e1b; 
  }
}


  @media only screen and (min-width: 1200px) {
    max-width: 445px;
  }
`;

export const StyledThumbnails = styled.div`
 display: none;

  @media only screen and (min-width:1200px) {
    display: flex;
    align-items: center;
    gap: 31px;
    margin-top: 32px;
  }
`;

export const Thumbnail = styled.div`
  width: 88px;
  height: 88px;
  cursor: pointer;

  img {
    border-radius: 10px;
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
    border: solid 2px #ff7e1b;
    opacity: 0.25;
    }
  }
`;


export const CustomNextButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url(${NextArrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 8px 16px;
  position: absolute;
  top: 50%;
  right: calc(325px - 30%);
  transform: translateY(-50%);
  cursor: pointer;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${NextArrow}) center/8px 16px no-repeat;
    background-color: #000;
  }

  &:hover::after {
    background-color: #ff7e1b; 
  }
`;

export const CustomPrevButton = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url(${PrevArrow});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 8px 16px;
  position: absolute;
  top: 50%;
  left: calc(325px - 30%);
  transform: translateY(-50%);
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    mask: url(${PrevArrow}) center/8px 16px no-repeat;
    background-color: #000;
  }

  &:hover::after {
    background-color: #ff7e1b; 
  }
`;

export const CustomCloseButton = styled.div`
  width: 100%;
  height: 100%;
  filter: brightness(0) saturate(100%) invert(100%) sepia(11%) saturate(287%) hue-rotate(112deg) brightness(114%) contrast(98%);
  background: url(${CloseIcon}) center/20px 20px no-repeat;
  position: absolute;
  top:  55px;
  right:  calc(50% + 310px);
  cursor: pointer;

  &:hover{
    filter: brightness(0) saturate(100%) invert(67%) sepia(49%) saturate(5033%) hue-rotate(345deg) brightness(102%) contrast(105%);
  }
`;