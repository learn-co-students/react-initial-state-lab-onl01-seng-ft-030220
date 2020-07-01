import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  outputText = () => {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return 'Boom!'
    }
  }

  render() {
    return (
    <h3>{this.outputText()}</h3>
    )
  }
}

