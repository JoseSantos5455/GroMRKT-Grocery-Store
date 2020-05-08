import React, { useState } from 'react'
import { BoldFont, CategoryDiv } from './StyledComponents'
import styled from 'styled-components'
const Tab = styled.button`
    border:none;
    outline:none;
    font-family:'GoogleSansBold';
    background:${props => props.background ? props.background : "#f9c907"};
    padding:18px 32px;
    border-radius:50px;
    &:hover{
        cursor: pointer;
    }
`;
function CategoryBar() {
    const [state, setstate] = useState({ veg: true, fru: false, gro: false, dai: false, sna: false })
    return (
        <CategoryDiv>
            <Tab onClick={() => setstate({ veg: true, fru: false, gro: false, dai: false, sna: false })}
                background={state.veg ? "#f9c907" : "none"}>
                <BoldFont color={state.veg ? "#fff" : "#5B6064"}>Vegetables</BoldFont>
            </Tab>
            <Tab onClick={() => setstate({ veg: false, fru: true, gro: false, dai: false, sna: false })}
                background={state.fru ? "#f9c907" : "none"}>
                <BoldFont color={state.fru ? "#fff" : "#5B6064"}>Fruits</BoldFont>
            </Tab>
            <Tab onClick={() => setstate({ veg: false, fru: false, gro: true, dai: false, sna: false })}
                background={state.gro ? "#f9c907" : "none"}>
                <BoldFont color={state.gro ? "#fff" : "#5B6064"}>Groceries</BoldFont>
            </Tab>
            <Tab onClick={() => setstate({ veg: false, fru: false, gro: false, dai: true, sna: false })}
                background={state.dai ? "#f9c907" : "none"}>
                <BoldFont color={state.dai ? "#fff" : "#5B6064"}>Dairy</BoldFont>
            </Tab>
            <Tab onClick={() => setstate({ veg: false, fru: false, gro: false, dai: false, sna: true })}
                background={state.sna ? "#f9c907" : "none"}>
                <BoldFont color={state.sna ? "#fff" : "#5B6064"}>Snacks</BoldFont>
            </Tab>

        </CategoryDiv>
    )
}

export default CategoryBar
