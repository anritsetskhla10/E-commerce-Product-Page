import React, { useRef, useState } from 'react';
import PlusIcon from '/images/icon-plus.svg';
import MinusIcon from '/images/icon-minus.svg';
import Cart from '/images/icon-cart.svg';

import 'swiper/css';
import Slider from "../Slider";
import { StyledMain } from "./StyledMain";
import { TItem } from '../../types';

interface IMain {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setItem: React.Dispatch<React.SetStateAction<TItem | undefined>>;
}

export default function Main({ counter, setCounter, setItem }: IMain) {
  const priceRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handlePlusCountClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setCounter(prevCounter => prevCounter + 1);
  };

  const handleMinusCountClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0)); 
  };

  const handleSetRefs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (priceRef.current && titleRef.current && selectedImage) {
      const priceText = priceRef.current.textContent;
      const priceValue = priceText ? parseFloat(priceText.replace('$', '')) : 0;
      const titleText = titleRef.current.textContent || '';

      const objItem = {
        title: titleText,
        price: priceValue,
        image: selectedImage,
      };

      setItem(objItem);
    }
  };

  return (
    <StyledMain>
      <div className='slider-container'>
        <Slider setSelectedImage={setSelectedImage} />
      </div>
      <div className="info-container">
        <span className="company">Sneaker Company</span>
        <h1 ref={titleRef}>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
        </p>
        <div className="price-wrapper">
          <div>
            <span ref={priceRef} className="price">$125.00</span>
            <span className="sale">50%</span>
          </div>
          <span>$250.00</span>
        </div>
        <div className='QBtn-wrapper'>
        <div className="quantity-container">
          <img className="minus" onClick={handleMinusCountClick} src={MinusIcon} alt="minus icon" />
          <span>{counter}</span>
          <img className="plus" onClick={handlePlusCountClick} src={PlusIcon} alt="plus icon" />
        </div>

        <button onClick={handleSetRefs}>
          <img src={Cart} alt="cart icon" />
          Add to cart
        </button>

        </div>
      </div>
    </StyledMain>
  );
}
