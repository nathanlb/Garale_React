import React, {Component} from 'react'

import EventCard from './EventCard'
import Events from '../../../sampledata/sampledata'

import '../../css/EventList.css'

export default class EventList extends Component {
  
  constructor(){
    super()
  }

  render() {
    return (
      <ul className="event-list" >
        {Events.map( (event, index) =>
          <li key={index}><EventCard key={index} event={event}/></li>
        )}
      </ul>
    )
  }
}