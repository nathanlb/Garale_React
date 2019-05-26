import React, {Component} from 'react'

class PinCard extends Component {

  constructor() {
    super()

    this.state = {
      title: "Yard Sale",
      description: "you know what it is",
      startTime: "Now",
      endTime: "Never!!",
      coord: [],
      photos: ["img/cat.jpg"]
    }
  }

  render() {
    return (
      <div className="pin-card">
        <img src={this.state.photos[0]}/>
        <h3> {this.state.title} </h3>
        <p> {this.state.description} </p>
        <p> Start Time: {this.state.startTime}</p>
        <p> End Time: {this.state.endTime}</p>
      </div>
    )
  }
}

export default PinCard