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
        }

        .minus{
            width: 12px;
            height: 3.3px;
            cursor: pointer;
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
    }
}




`