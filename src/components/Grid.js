import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import vegetables from './Vegetables.json'

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(3,1fr);
    grid-template-rows:repeat(4,auto);
    gap:50px;
    padding:50px;
    box-sizing:border-box;
    overflow-y:scroll;
    grid-column:3/8;
    grid-row: 5/16 ;
    margin-right:24px;
    background:#fff;

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #5B6064;
        border: 4px solid transparent;
        background-clip: content-box; 
    }
    ::-webkit-scrollbar-thumb {
        background: #6B7278;
        border: 1px solid #6B7278;
        border-radius:5px;
    }
`;

function Grid() {
    return (
        <Container>
            {vegetables.map((vegetable, key) => (
                <ItemContainer
                    key={key}
                    name={vegetable.name}
                    oldPrice={vegetable.oldPrice}
                    newPrice={vegetable.newPrice}
                    qty={vegetable.qty}
                />
            ))}
        </Container>
    )
}

export default Grid
