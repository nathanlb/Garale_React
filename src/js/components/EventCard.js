import React, {Component} from 'react'
import '../../css/EventCard.css'

export default class EventCard extends Component {

  constructor() {
    super()
    this.colors = {
      "Fitness": "#f352a3",
      "Environmental": "#67d414",
      "Culture": "#46648f",
      "Entertainment": '#52c3f4',
      "Food&Drink": "#fdd501",
    }

    this.readableTime = this.readableTime.bind(this)
    this.readableTimestamp = this.readableTimestamp.bind(this)
  }

  readableTime = (time) => {
    if (time.charAt(0) == '0')
      var t = time.substr(1)
    var t = t.slice(0,-1)
    return t
  }

  readableTimestamp = (ts) => {
    var date = new Date(ts)
    //return `${date.getHours()}:${date.getMinutes()} - ${date.getDay()}, ${date.getMonth()} ${date.getDate()} ${date.getFullYear()}`
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
            <p className="card-date-start"> Start: {this.readableTimestamp(this.props.event.start)}</p>
            <p className="card-date-end"> End: {this.readableTimestamp(this.props.event.end)}</p>
          </div>
        </div>
    )
  }
}