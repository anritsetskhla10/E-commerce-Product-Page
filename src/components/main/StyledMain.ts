import styled from "styled-components";

interface IStyledMain{
   
}

export const StyledMain = styled.main<IStyledMain>`
    .info-container{
        width: 375px;
        padding: 0 24px;
    
        .company{
            display: block;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 1.85px;
            color: #ff7e1b;
            margin: 24px 0 19px;
        }

    & > h1{
        font-size: 28px;
        font-weight: bold;
        line-height: 1.14;
        color: #1d2026;
    }

    & > p{
        font-size: 15px;
        line-height: 1.67;
        color: #69707d;
        margin: 15px 0 24px;
    }

    .price-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > span{
            font-size: 16px;
            font-weight: bold;
            line-height: 1.63;
            color: #b6bcc8;
            text-decoration: line-through;
        }

        & > div{
            display: flex;
            align-items: center;
            gap: 16px;

            .price{
                font-size: 28px;
                font-weight: bold;
                color: #1d2026;
            }

            .sale{
                font-size: 16px;
                font-weight: bold;
                color: #ff7e1b;
                padding: 7px 8px 4px;
                border-radius: 6px;
                background-color: #ffeee2;
            }
        }
    }

    .quantity-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 122.5px;
        margin: 24px 0 16px;
        padding: 22px 24px 18px;
        border-radius: 10px;
        background-color: #f6f8fd;

        .plus{
            width: 12px;
            height: 12px;
            cursor: pointer;

            &:hover{
                filter: brightness(0) saturate(100%) invert(71%) sepia(34%) saturate(768%) hue-rotate(332deg) brightness(101%) contrast(102%);
            }
        }

        .minus{
            width: 12px;
            height: 3.3px;
            cursor: pointer;

            &:hover{
                filter: brightness(0) saturate(100%) invert(71%) sepia(34%) saturate(768%) hue-rotate(332deg) brightness(101%) contrast(102%);
            }
        }

        & > span{
            font-size: 16px;
            font-weight: bold;
            color: #1d2026;
        }
    }

    button{
        padding: 19px 104px 18px;
        border-radius: 10px;
        border: none;
        box-shadow: 0 20px 50px -20px #ff7e1b;
        background-color: #ff7e1b;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        cursor: pointer;
        margin-bottom: 88px;

        & > img{
            width: 17.5px;
            height: 16px;
            margin-right: 15.5px;
            filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
        }

        &:hover{
            background-color: #ffab6a;
        }
    }
}

@media only screen and (min-width:1200px){
    
    display: flex;
    flex-direction: row;
    gap: 125px;
    padding: 90px 96px;

    
    .info-container{
        width: 445px;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    
        .company{
            font-size: 13px;
            letter-spacing: 2px;
            margin: 0 0 27px;
        }

    & > h1{
        font-size: 44px;
        line-height: 1.09;
    }

    & > p{
        font-size: 16px;
        line-height: 1.63;
        margin: 32px 0 28px;
    }

    .price-wrapper{
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .QBtn-wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
        margin-top: 32px;

        .quantity-container{
        gap: 45.5px;
        margin: 0;
        padding: 17px 16px;


        & > span{
            font-size: 16px;
            font-weight: bold;
            color: #1d2026;
        }
    }

    button{
        padding: 19px 76px 18px;
        margin-bottom: 0;
        white-space: nowrap;

    }
    }
}
}


`