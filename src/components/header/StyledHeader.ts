import styled from "styled-components";

interface IStyledHeader{
    $openmenu:boolean;
    $opencart:boolean;
}

export const StyledHeader = styled.header<IStyledHeader>`
    min-width: 375px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 28px;
    position: relative;
    
    .ML-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;

        .menu{
            width: 16px;
            height: 15px;
        }

        .logo{
            width: 137.5px;
            height: 20px;
        }
    }

    .CA-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 24px;
        
        & > div{
            position: relative;
            .cart{
                width: 21.8px;
                height: 20px;

                &:hover{
                  filter: brightness(0) saturate(100%) invert(0%) sepia(100%) saturate(20%) hue-rotate(39deg) brightness(93%) contrast(107%);
                }
            }

            span{
                font-size: 10px;
                font-weight: bold;
                color: #fff;
                padding: 3px 6px;
                border-radius: 6.5px;
                background-color: #ff7e1b;
                position: absolute;
                top: -10px;
                right: -5px;
            }
        }

        .avatar{
            width: 24px;
            height: 24px;

            &:hover{
              border: solid 2px #ff7e1b;
              border-radius: 50%;
            }
        }
    }
    nav{
        width: ${({ $openmenu }) => $openmenu ? '260px' : '0'};
        height: 100vh;
        padding: 25px 0 0 25px;
        background-color: #fff;
        visibility: ${({ $openmenu }) => $openmenu ? 'visible' : 'hidden'};
        position: absolute;
        z-index: 40;
        top: 0;
        left: -10px;
        transition: width 5s , visibility 1.5s;

        .close{
            width: 13.4px;
            height: 13.4px;
            margin-bottom: 54px;
        }

        & > ul{
            display: flex;
            flex-direction: column;
            gap: 20px;

            li{
                a{
                  font-size: 18px;
                  font-weight: bold;
                  line-height: 1.44;
                  color: #1d2026;
                  text-decoration: none;
                }
            }
        }
    }

    .blur{
        display: ${({$openmenu}) => $openmenu ? 'block' : 'none' };
        width: 100%;
        height: 100vh;
        opacity: 0.75;
        background-color: #000;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 5;
    }

    .cartPopup {
  display: ${({ $opencart }) => ($opencart ? 'block' : 'none')};
  width: 360px;
  padding: 24px 0 32px;
  border-radius: 10px;
  box-shadow: 0 20px 50px -20px rgba(29, 32, 38, 0.5);
  background-color: #fff;
  position: absolute;
  top: 76px;
  left: 50%;
  transform: translate(-50%);
  z-index: 50;

  & > span {
    font-size: 16px;
    font-weight: bold;
    color: #1d2026;
    padding: 0 24px;
  }

  hr {
    height: 1px;
    margin: 27px 0 0;
    background-color: #e4e9f2;
  }

  .cartContent {
    padding: 24px 24px 0;

    .cartItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      margin-bottom: 26px;

      .cartItemImg {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }

      & > div {
        display: flex;
        flex-direction: column;

        p {
          font-size: 16px;
          line-height: 1.63;
          color: #69707d;
          white-space: nowrap;
        }

        .price-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;

          span {
            font-size: 16px;
            font-weight: bold;
            line-height: 1.63;
            color: #1d2026;
          }
        }
      }

      .delete {
        width: 14px;
        height: 16px;
        cursor: pointer;
      }
    }

    .checkoutBtn {
      padding: 22px 120px 18px;
      border: none;
      border-radius: 10px;
      background-color: #ff7e1b;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;

      &:hover {
        box-shadow: 0 20px 50px -20px #ff7e1b;
        background-color: #ffab6a;
      }
    }
  }

  .emptyMessage {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.63;
    text-align: center;
    color: #69707d;
    padding: 77px 0 53px;
  }
}

@media only screen and  (min-width: 1200px ){
    min-width: 1200px;
    padding: 43px 0 34px;
    position: relative;
    justify-content: center;
    border-bottom: 1px solid  #e4e9f2;

    
    .ML-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        order: 1;

        .menu{
          display: none;
        }
    }

    .CA-container{
        gap: 46px; 
        order :3 ;

        .avatar{
            width: 50px;
            height: 50px;
        }
    }
    nav{
        width: fit-content;
        height: 100%;
        padding: 0;
        visibility: visible;
        position: unset;
        transition: unset;
        order: 2;

        .close{
           display: none;
        }

        & > ul{
            flex-direction: row;
            gap: 32px;
            margin: 0 402px 0 65.5px;
            

            li{
                a{
                  text-decoration: none;
                  color: #69707d;
                  font-size: 15px;
                  font-weight: normal;
                  line-height: 1.13;
                  color: #69707d;
                  padding-bottom: 49px;
                  
                  
                  &:focus{
                    color: #1d2026;
                    border-bottom: 4px solid #ff7e1b;
                  }
                }
            }
        }
    }

    .blur{
        display: none;
    }

    .cartPopup {
        top: 94px;
        left: unset;
        right: 89px;
        transform: unset;


    .cartItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
      margin-bottom: 26px;

      .cartItemImg {
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }

      & > div {
        display: flex;
        flex-direction: column;

        }
    }
    }
}

`