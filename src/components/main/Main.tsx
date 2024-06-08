import styled from "styled-components"

import PlusIcon from '/images/icon-plus.svg';
import MinusIcon from '/images/icon-minus.svg';
import Cart from '/images/icon-cart.svg';



import 'swiper/css';
import Slider from "../Slider";


export default function Main() {



  return (
    <StyledMain>

          <div className="slider">
            <Slider/>
          </div>

          <span>Sneaker Company</span>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
          <div>
            <div>
              <span>$125.00</span>
              <span>50%</span>
              </div>
              <span>$250.00</span>
          </div>

          <div>
            <img src={MinusIcon} alt="minus icon" />
            <span>0</span>
            <img src={PlusIcon} alt="plus icon" />
          </div>

          <button>
            <img src={Cart} alt="cart icon" />
            Add to cart
          </button>
    </StyledMain>
  )
}

const StyledMain = styled.main`
    


`
