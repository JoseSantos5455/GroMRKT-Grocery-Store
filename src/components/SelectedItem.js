import React, { useState } from 'react'
import styled from 'styled-components'
import { BoldFont, RegularFont, ExtraBoldFont } from './StyledComponents';
import { connect } from 'react-redux'
import { addToCart } from '../redux'

const SelectQtyDiv = styled.div`
    display:grid;
    grid-template-columns:repeat(8,1fr);
    grid-column: 1/3;
    grid-row: 3/4;
`;

const Button = styled.button`
    border:none;
    outline:none;
    background:${props => props.background ? props.background : "#5B6064"};
    border-radius:${props => props.radius ? props.radius : "0px"};
    color:#fff;
    padding:12px 24px;
    
    svg{
        margin-left:15px;
    }
    &:hover{
        cursor: pointer;
    }
`;

const Qty = styled.div`
    background:#fff;
    padding:12px 24px;
`;

const Div = styled.div`
    background:linear-gradient(to top  right,#fecb02,#fcc101);
    padding:32px;
    border-radius:40px;
    box-shadow: 2px 2px 10px rgba(111, 107, 107, 0.25);
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:repeat(4,minmax(auto));
    gap:18px;
`;

function SelectedItem({ name, oldPrice, newPrice, qty, addToCart, cartItems }) {
    const [itemQty, updateQty] = useState(1)

    const checkAndAddToCart = cartObj => {
        if (!cartItems.some(item => item.name === cartObj.name)) {
            addToCart(cartObj)
        }
        else {
            console.log('Item already added.')
        }

    }

    return (
        <Div>
            <ExtraBoldFont color="#121212" className="item-title">{name}</ExtraBoldFont>
            <BoldFont color="#040404" className='item-discount-label'> {Math.round(100 - ((newPrice * 100) / oldPrice))} % OFF</BoldFont>
            <div className="item-price-tag">
                <RegularFont size="26px" color="#121212"><del>$ {oldPrice}</del></RegularFont>
                <BoldFont color="#121212" size="36px">$ {newPrice}</BoldFont>
                <BoldFont color="#121212" size="20px"> {qty}</BoldFont>
            </div>
            <img src={require(`../images/${name.toLowerCase()}.svg`)} alt="item" className="item-image-add" width="150px" />
            <SelectQtyDiv>
                <ExtraBoldFont className="qty-item">Qty in {qty}</ExtraBoldFont>
                <Button className="sub-qty-item" radius="50px 0 0 50px" onClick={() => updateQty(prevCount => prevCount - 1)} disabled={itemQty === 1 ? true : false}>
                    <ExtraBoldFont color="#fff" >-</ExtraBoldFont>
                </Button>
                <Qty className="qty-item-val">
                    <ExtraBoldFont >{itemQty}</ExtraBoldFont>
                </Qty>
                <Button className="add-qty-item" radius="0 50px 50px 0" onClick={() => updateQty(prevCount => prevCount + 1)}>
                    <ExtraBoldFont color="#fff" >+</ExtraBoldFont>
                </Button>
            </SelectQtyDiv>
            <Button radius="50px" className="add-to-basket"
                onClick={() => checkAndAddToCart({
                    name,
                    newPrice,
                    qty,
                    itemQty,
                    totalCostForItem: newPrice * itemQty
                })}>
                <ExtraBoldFont color="#fff" className="add-to-basket-button" >Add to Basket</ExtraBoldFont>
                <svg width="36" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-basket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z"></path></svg>
            </Button>
        </Div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.view.name,
        oldPrice: state.view.oldPrice,
        newPrice: state.view.newPrice,
        qty: state.view.qty,
        cartItems: state.cart.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (state) => dispatch(addToCart(state)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem)
