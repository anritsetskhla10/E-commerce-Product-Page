import Menu from '/images/icon-menu.svg';
import Logo from '/images/logo.svg';
import Cart from '/images/icon-cart.svg';
import Avatar from '/images/image-avatar.png';
import Close from '/images/icon-close.svg';
import ImagePr1 from '/images/image-product-1.jpg';
import DeleteIcon from '/images/icon-delete.svg'
import { StyledHeader } from './StyledHeader';
import { useState } from 'react';

export default function Header() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openCart, setOpenCart] = useState<boolean>(false);


    const handleMenuClick: React.MouseEventHandler<HTMLImageElement> = () => {
        setOpenMenu(!openMenu)
    };

    const handleCartClick: React.MouseEventHandler<HTMLImageElement> = () => {
      setOpenCart(!openCart)
    };
    
  return (
    <StyledHeader $openmenu = {openMenu} $opencart = {openCart}>
        <div className="ML-container">
        <img onClick={handleMenuClick} className="menu" src={Menu} alt="menu icon" />
        <img className="logo" src={Logo} alt="logo icon" />
        </div>

        <div className="CA-container">
          <div>
            <img className="cart" onClick={handleCartClick} src={Cart} alt="cart icon" />
            <span>{3}</span>
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
        <div className='blur'></div>
          <div className="cartPopup">
            <span>Cart</span>
            <hr />
            <div>
                <img className='cartItemImg' src={ImagePr1} alt="cart product" />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <div className='price-container'>
                    <p>$125.00 x 3</p>
                    <span>$375.00</span>
                    </div>
                </div>
                <img className='delete' src={DeleteIcon} alt="delete icon" />
            </div>
            <button className='checkoutBtn'>Checkout</button>
          </div>
    </StyledHeader>
  )
}


