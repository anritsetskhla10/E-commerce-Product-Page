import styled from "styled-components";

interface IHeader{
    $openmenu:boolean;
    $opencart:boolean;
}

export const StyledHeader = styled.header<IHeader>`
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
        }
    }
    nav{
        width: ${({ $openmenu }) => $openmenu ? '250px' : '0'};
        height: 100vh;
        padding: 25px 0 0 25px;
        background-color: #fff;
        visibility: ${({ $openmenu }) => $openmenu ? 'visible' : 'hidden'};
        position: absolute;
        z-index: 10;
        top: 0;
        left: 0;
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
                font-size: 18px;
                font-weight: bold;
                line-height: 1.44;
                color: #1d2026;
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

    .cartPopup{
        display: ${({$opencart}) => $opencart? 'block' : 'none' };
        width: 360px;
        height: 256px;
        padding: 24px 0 32px;
        border-radius: 10px;
        box-shadow: 0 20px 50px -20px rgba(29, 32, 38, 0.5);
        background-color: #fff;
        position: absolute;
        top: 76px;
        left: 8px;
        
        & > span{
            font-size: 16px;
            font-weight: bold;
            color: #1d2026;
            padding: 0 24px;
        }

        hr{
            height: 1px;
            margin: 27px 0 0;
            background-color: #e4e9f2;
        }

        & > div{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            padding: 24px;
            
            .cartItemImg{
                width: 50px;
                height: 50px;
                border-radius: 4px;
            }

            & > div{
                display: flex;
                flex-direction: column;

               p{
                    font-size: 16px;
                    line-height: 1.63;
                    color: #69707d;
                }

                .price-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 10px;
                  span{
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 1.63;
                    color: #1d2026;
                  }

                }
            }

            .delete{
                width: 14px;
                height: 16px;
                cursor: pointer;
            }
        }

        .checkoutBtn{
            margin: 0 24px ;
            padding: 22px 120px 18px ;
            border: none;
            border-radius: 10px;
            background-color: #ff7e1b;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;

            &:hover{
                box-shadow: 0 20px 50px -20px #ff7e1b;
                background-color: #ffab6a;
            }
        }
    }
`