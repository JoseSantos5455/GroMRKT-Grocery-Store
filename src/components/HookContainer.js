import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'
function HookContainer() {

    const dispatch = useDispatch()
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    return (
        <div>
            <h2>Number of Cakes : {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookContainer
