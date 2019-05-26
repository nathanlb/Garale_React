import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react'

import MarkerList from './MarkerList'
import Keys from '../secret'

export class MapComponent extends Component {

  constructor() {
    super()
    this.state = {
      center: { lat: 37.3596049, lng: -122.0665 },
      zoom: 11,
      markers: []
    }

    this.addMarker = this.addMarker.bind(this)
  }

  addMarker = (location, map) => {
    this.setState( prevState => ({
      markers: [...prevState.markers, {lat: location.lat(), lng: location.lng()}]
    }))
  }

  render() {
    return (
      <div 
        style={{ 
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: '200px',
          top: '0px',
          float: 'right'
        }}>
        <Map
          google={this.props.google}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }
          onDblclick={(t, map, c) => this.addMarker(c.latLng, map) }
          disableDoubleClickZoom={ true }
          >
          <MarkerList markers={ this.state.markers }/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:Keys.GoogleAPIKey
  })(MapComponent);