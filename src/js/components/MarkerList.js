import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react'

class MarkerList extends Component {

  constructor() {
    super()
    this.icons = {
      "Fitness": "../../../img/fitness_pin.png",
      "Environmental": "../../../img/eco_pin.png",
      "Food&Drink": "../../../img/drinks_pin.png",
      "Entertainment": "../../../img/entertainment_pin.png",
      "Culture": "../../../img/culture_pin.png"
    }
    this.state = {
      update: true
    }
  }

  shouldComponentUpdate(nextProps) {
    return this.state.update
  }

  componentDidMount() {
    this.setState( {update: false} )
  }

  render() {
    const events = this.props.events
    return (
      events.map( (event, index) =>
        <Marker
          key = { index }
          name = { event.title }
          position = { event.coord }
          event = { event }
          icon = {{
            url: this.icons[event.category],
            scaledSize: new google.maps.Size(35, 50),
          }}
          {...this.props}
        />
      )
    )
  }
}

export default MarkerList