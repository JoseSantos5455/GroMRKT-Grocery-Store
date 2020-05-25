import React from 'react'
import styled from 'styled-components'
import { BoldFont, RegularFont } from './StyledComponents'
import './Items.css'
import { setItem } from '../redux'
import { connect } from 'react-redux'

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

function ItemContainer(props) {
    return (
        <Container>
            <BoldFont color="#121212" className="item-title">{props.name}</BoldFont>
            <RightAlignDiv className="item-price">
                <RegularFont color="#121212"><del>$ {props.oldPrice}</del></RegularFont>
                <BoldFont color="#121212" >$ {props.newPrice}</BoldFont>
                <BoldFont color="#121212">{props.qty}</BoldFont>
            </RightAlignDiv>
            <img src={require(`../images/${props.name.toLowerCase()}.svg`)} alt="item" className="item-image" />
            <button className="check-button"
                onClick={() => props.setItem({
                    name: props.name,
                    oldPrice: props.oldPrice,
                    newPrice: props.newPrice,
                    qty: props.qty,
                })}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z" /></svg>
            </button>
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setItem: (state) => dispatch(setItem(state))
    }
}

export default connect(null, mapDispatchToProps)(ItemContainer)
