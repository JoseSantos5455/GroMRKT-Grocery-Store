import React from 'react'
import styled from 'styled-components'
import { BoldFont, RegularFont } from './UiComponents'
import './Items.css'

const Container = styled.div`
    border:none;
    outline:none;
    box-sizing:border-box;
    padding:24px;
    background:#fff;
    border-radius:40px;
    display:grid;
    grid-template-columns:repeat(5,1fr);
    grid-auto-rows: repeat(8,1fr);
    box-shadow: 11px 10px 50px 10px rgba(111, 107, 107, 0.33);
`;

const RightAlignDiv = styled.div`
    text-align:right;
`;

function ItemContainer({ name, oldPrice, newPrice, qty }) {

    return (
        <Container>
            <BoldFont color="#121212" className="item-title" size="36px">{name}</BoldFont>
            <RightAlignDiv className="item-price">
                <RegularFont size="26px" color="#121212"><del>$ {oldPrice}</del></RegularFont>
                <BoldFont color="#121212" size="36px">$ {newPrice}</BoldFont>
                <BoldFont color="#121212" size="20px">{qty}</BoldFont>
            </RightAlignDiv>
            <img src={require(`../images/${name.toLowerCase()}.svg`)} alt="item" className="item-image" width="150px" />
        </Container>
    )
}

export default ItemContainer
