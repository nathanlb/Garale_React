import React, {Component} from 'react'

import EventCard from './EventCard'

import '../../css/EventList.css'

export default class EventList extends Component {
  
  constructor(){
    super()
  }

  render() {
    const events = this.props.events
    return (
      <ul className="event-list" >
        {events.map( (event, index) =>
          <li key={index}><EventCard key={index} event={event}/></li>
        )}
      </ul>
    )
  }
}