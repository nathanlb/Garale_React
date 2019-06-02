import React, {Component} from 'react'
import '../../css/EventCard.css'

export default class EventCard extends Component {

  constructor() {
    super()
  }

  render() {
    return(
        <div className="card">
          <img className="card-image" src={this.props.event.photo}/>
          <div className="card-info-wrapper">
            <p className="card-title"> {this.props.event.title} </p>
            <p className="card-description"> {this.props.event.description} </p>
            <p className="card-date"> Start: {this.props.event.start}</p>
            <p className="card-date"> End: {this.props.event.end}</p>
          </div>
        </div>
    )
  }
}