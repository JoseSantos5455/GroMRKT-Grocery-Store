import React from 'react'
import { BoldFont } from './UiComponents'
import styled from 'styled-components';
import { ExtraBoldFont } from './StyledComponents';

const Div = styled.div`
    display:grid;
    grid-template-columns:repeat(2,auto);
    padding:30px 0;
    width:inherit;
    box-sizing:border-box;
`;

const Avatar = styled.img`
    height:40px;
    width:40px;
    border-radius:20px;
    margin-right:15px;
    border:2px solid #000;
`;

const Basket = styled.div`
    justify-self:end;
    grid-column:2/3;
    z-index:1;
    img{
        height:40px;
        width:40px;
    }
`;
const CartItem = styled.div`
    padding:5px;
    border-radius:20px;
    background:#f9c907;
    grid-column:2/3;
    z-index:3;
    width:20px;
    height:20px;
    text-align:center;
    position: relative;
    transform:translate(-50%,-50%);
    top:0;
    right:0;
`;

const User = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
`;

const LandingArea = styled.div`
    display:grid;
    grid-template-columns:repeat(5,1fr);
`;

function Header() {
    return (
        <Div>
            <User>
                <Avatar src={require("../images/avatar.png")} alt="dp" />
                <BoldFont>John Doe</BoldFont>
            </User>
            <Basket>
                <img src={require("../images/basket.svg")} alt="basket" />
                <CartItem>
                    <ExtraBoldFont size="18px">{5}</ExtraBoldFont>
                </CartItem>
            </Basket>
        </Div>
    )
}

export { Header, LandingArea }
