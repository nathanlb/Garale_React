import React, {Component} from 'react'
import '../../../css/EventCard.css'

export default class EventCard extends Component {

  constructor() {
    super()
    this.colors = {
      "Fitness": "#f352a3",
      "Environmental": "#67d414",
      "Culture": "#46648f",
      "Entertainment": '#52c3f4',
      "FoodnDrink": "#fdd501",
    }
  }

  readableTimestamp = (ts) => {
    var date = new Date(ts)
    return date.toString().substring(0, 21)
  }

  render() {
    return(
      <div className="card">
        <div className="card-catband" style={ {backgroundColor: this.colors[this.props.event.category]} }/>
        <img className="card-image" src={this.props.event.photo}/>
        <div className="card-info-wrapper">
          <p className="card-title"> {this.props.event.title} </p>
          <p className="card-description"> {this.props.event.description} </p>
          <p className="card-date-start"> <b>Start:</b> {this.readableTimestamp(this.props.event.start)}</p>
          <p className="card-date-end"> <b>End:</b> {this.readableTimestamp(this.props.event.end)}</p>
        </div>
      </div>
    )
  }
}