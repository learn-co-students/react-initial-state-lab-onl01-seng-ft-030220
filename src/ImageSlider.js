import React, { Component } from 'react'

export default class ImageSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  render() {
    return (
      <h2 className="image-slider">I am on slide {this.state.currentSlideIndex}</h2>
    )
  }
}

