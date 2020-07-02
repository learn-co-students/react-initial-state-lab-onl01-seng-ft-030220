import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        return (
            this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        )
    }

}



export default Bomb
