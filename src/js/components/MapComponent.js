import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react'

import MarkerList from './MarkerList'
import MapSearchBox from './MapSearchBox'
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
    this.updateCenter = this.updateCenter.bind(this)
  }

  addMarker = (location, map) => {
    this.setState( prevState => ({
      markers: [...prevState.markers, {lat: location.lat(), lng: location.lng()}]
    }))
  }

  updateCenter = (position) => {
    this.setState({center: position})
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: '50px',
          top: '0px',
          float: 'right',
          zIndex: 1,
        }}>
        <MapSearchBox google={ this.props.google } updateCenter={ this.updateCenter }/>
        <Map
          google={this.props.google}
          defaultCenter={ this.state.center }
          center={this.state.center}
          defaultZoom={ this.state.zoom }
          onDblclick={(t, map, c) => this.addMarker(c.latLng, map) }
          disableDoubleClickZoom={ true }
          mapTypeControl={ false }
          >
          <MarkerList
            markers={ this.state.markers }
            google={ this.props.google }/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:Keys.MapsAPIKey
})(MapComponent);

//apiKey:Keys.GoogleAPIKey