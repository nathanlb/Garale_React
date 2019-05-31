import React, { Component } from 'react'
import Map, {Marker} from 'google-maps-react'
import Events from '../../../sampledata/sampledata'

class MarkerList extends Component {

  constructor() {
    super()
    this.icons = {
      "Fitness": "../../../img/fitness_pin.png",
      "Environmental": "../../../img/eco_pin.png",
      "Food&Drink": "../../../img/drinks_pin.png",
      "Entertainment": "../../../img/entertainment.png"
    }

    this.getEvents = this.getEvents.bind(this)
  }

  getEvents() {
    return Events
  }

  render() {
    const events = this.getEvents()
    return (
      events.map( (event, index) =>
        <Marker
          key = { index }
          position = { event.coord }
          animation = {this.props.google.maps.Animation.DROP}
          icon = {{
            url: this.icons[event.category],
            scaledSize: new google.maps.Size(35, 50)
           }}
          {...this.props}
        />
      )
    )
  }
}

export default MarkerList