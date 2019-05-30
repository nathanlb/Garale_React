import React, { Component } from 'react'
import Map, {Marker} from 'google-maps-react'

class MarkerList extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      this.props.markers.map( (marker, index) =>
        <Marker
          key = {index}
          position = {marker}
          animation={this.props.google.maps.Animation.DROP}
          {...this.props}
        />
      )
    )
  }
}

export default MarkerList