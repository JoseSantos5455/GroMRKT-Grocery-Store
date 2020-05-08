import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'
function IceCreamContainer() {

    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dipatch = useDispatch()
    return (
        <div>
            <h2>No of Ice Creams : {numOfIceCreams} </h2>
            <button onClick={() => dipatch(buyIceCream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamContainer
