import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper, SearchBox} from 'google-maps-react'

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
          left: '50px',
          top: '0px',
          float: 'right',
          zIndex: 1,
        }}>
        <Map
          google={this.props.google}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom }
          onDblclick={(t, map, c) => this.addMarker(c.latLng, map) }
          disableDoubleClickZoom={ true }
          mapTypeControl={ false }
          >
          <SearchBox
            ref={this.props.onSearchBoxMounted}
            bounds={this.props.bounds}
            controlPosition={this.props.google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={this.props.onPlacesChanged}
          >
            <input
              type="text"
              placeholder="Customized your placeholder"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                marginTop: `27px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
              }}
            />
          </SearchBox>
          <MarkerList markers={ this.state.markers} google={this.props.google}/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:Keys.GoogleAPIKey
})(MapComponent);

//apiKey:Keys.GoogleAPIKey