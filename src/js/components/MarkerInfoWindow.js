import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper, InfoWindow} from 'google-maps-react'

export default class MarkerInfoWindow extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <InfoWindow
        marker={this.props.marker}
        visible={this.props.visible}>
        <div>
          <h1>Marker Info Window</h1>
        </div>
      </InfoWindow>
    )
  }
}