import React, { useState } from 'react'
import { buyCake, getUser, setUser } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {

    const [state, setstate] = useState('')

    return (
        <div>
            <h2>No of Cakes : {props.numOfCakes}</h2>
            <h2>User Name : {props.userName}</h2>
            <input type="text" value={state} onChange={(e) => setstate(e.target.value)} ></input>
            <button onClick={props.getUser}>Buy Cake</button>
            <button onClick={() => props.setUser(state)}>set state</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes,
        userName: state.user.userName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake()),
        getUser: () => dispatch(getUser()),
        setUser: (state) => dispatch(setUser(state))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
