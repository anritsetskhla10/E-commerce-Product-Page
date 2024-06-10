import React, { useState } from 'react';
import Menu from '/images/icon-menu.svg';
import Logo from '/images/logo.svg';
import Cart from '/images/icon-cart.svg';
import Avatar from '/images/image-avatar.png';
import Close from '/images/icon-close.svg';
import DeleteIcon from '/images/icon-delete.svg';
import { StyledHeader } from './StyledHeader';
import { TItem } from '../../types';

interface IHeader {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setItem: React.Dispatch<React.SetStateAction<TItem | undefined>>;
  item?: TItem;
}

export default function Header({ counter, item, setItem, setCounter }: IHeader) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const handleMenuClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setOpenMenu(!openMenu);
  };

  const handleCartClick: React.MouseEventHandler<HTMLImageElement> = () => {
    setOpenCart(!openCart);
  };

  const handleCleanCart = () => {
    setItem(undefined);
    setCounter(0);
  }

  return (
    <StyledHeader $openmenu={openMenu} $opencart={openCart}>
      <div className="ML-container">
        <img onClick={handleMenuClick} className="menu" src={Menu} alt="menu icon" />
        <img className="logo" src={Logo} alt="logo icon" />
      </div>

      <div className="CA-container">
        <div>
          <img className="cart" onClick={handleCartClick} src={Cart} alt="cart icon" />
          <span>{counter}</span>
        </div>
        <img className="avatar" src={Avatar} alt="avatar image" />
      </div>

      <nav>
        <img className="close" onClick={handleMenuClick} src={Close} alt="close icon" />
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="blur"></div>
      <div className="cartPopup">
        <span>Cart</span>
        <hr />
        {item ? (
          <div className="cartContent">
            <div className="cartItem">
              <img className="cartItemImg" src={item.image} alt="cart product" />
              <div>
                <p>{item.title}</p>
                <div className="price-container">
                  <p>{item.price} x {counter}</p>
                  <span>${(item.price * counter).toFixed(2)}</span>
                </div>
              </div>
              <img className="delete" onClick={handleCleanCart} src={DeleteIcon} alt="delete icon" />
            </div>
            <button className="checkoutBtn">Checkout</button>
          </div>
        ) : (
          <p className="emptyMessage">Your cart is empty.</p>
        )}
      </div>
    </StyledHeader>
  );
}
