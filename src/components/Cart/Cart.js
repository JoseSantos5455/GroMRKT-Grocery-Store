import React from 'react'
import './Cart.css'
import { Container, InnerContainer, BoldFont, CardDetials, ItemDetails, ItemList, CloseButton, Total, Input } from './StyledComponents'
import Items from './Items'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function Cart({ items }) {
    return (
        <Container>
            <InnerContainer>
                <ItemDetails className='item-details'>
                    <BoldFont className="big-font">Shopping Basket</BoldFont>
                    <ItemList>
                        {
                            items.map((item, index) => <Items key={index} name={item.name} itemQty={item.itemQty} qty={item.qty} totalPrice={item.totalCostForItem} />)
                        }
                    </ItemList>
                    <div className="bottom-bar">
                        <Link to="/" className="link">
                            <CloseButton className="button-back">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                <BoldFont className="big-font">Continue Shopping</BoldFont>
                            </CloseButton>
                        </Link>
                        <Total className='total'>
                            <BoldFont className="big-font">Grand Total : </BoldFont>
                            <div className="total-price">$ {
                                items.reduce((a, b) => a + b['totalCostForItem'], 0)
                            }</div>
                        </Total>
                    </div>
                </ItemDetails>
                <CardDetials className='card-details'>
                    <BoldFont className="big-font" color="#fff">Card Detials</BoldFont>
                    <img className='card' alt='card' src={require("../../images/card.svg")} />
                    <div className="input-grid">
                        <Input placeholder="Name on Card" className="name" />
                        <Input placeholder="Card Number" className="number" />
                        <Input placeholder="MM" className="mm" />
                        <Input placeholder="YY" className="yy" />
                        <Input placeholder="CVV" className="cvv" />
                        <button className="checkout">Check Out</button>
                    </div>
                </CardDetials>
            </InnerContainer>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    }
}

export default connect(mapStateToProps, null)(Cart)
