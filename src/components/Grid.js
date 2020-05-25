import React from 'react'
import styled from 'styled-components'
import ItemContainer from './ItemContainer';
import Groceries from './GroceryStore.json'
// import { viewCategory } from '../redux'
import { connect } from 'react-redux'

const Container = styled.div`
    padding:50px;
    box-sizing:border-box;
    overflow-y:scroll;
    
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

function Grid(props) {

    let GroceryItems = []
    switch (props.category) {
        case 'Vegetables': GroceryItems = Groceries[0]
            break;
        case 'Fruits': GroceryItems = Groceries[1]
            break;
        case 'Dairy': GroceryItems = Groceries[2]
            break;
        case 'Snacks': GroceryItems = Groceries[3]
            break;
        default: return
    }

    return (
        <Container className="grid-container">
            {GroceryItems.map((vegetable, key) => (
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

const mapStateToProps = state => {
    return {
        category: state.category.category
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         viewCategory: () => dispatch(viewCategory()),
//     }
// }
export default connect(mapStateToProps, null)(Grid)
