import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react'

import MarkerList from './MarkerList'
import MapSearchBox from './MapSearchBox'
import Keys from '../secret'
import mapStyles from '../../json/mapStyles'

export class MapComponent extends Component {

  constructor() {
    super()
    this.state = {
      center: { lat: 45.4856441, lng: -73.5792103 },
      zoom: 18,
      newMarker: null,
    }

    this.addMarker = this.addMarker.bind(this)
    this.updateCenter = this.updateCenter.bind(this)
    this.positionNewMarker = this.positionNewMarker.bind(this)

    // Conditional components
    this.newMarker = this.newMarker.bind(this)
  }

  componentDidMount() {
    this.map = this.refs.map
  }

  addMarker = (position, map) => {
    this.setState( prevState => ({
      markers: [...prevState.markers, {lat: position.lat(), lng: position.lng()}]
    }))
  }

  updateCenter = (position) => { 
    this.setState({center: {lat: position.lat(), lng: position.lng()}}) 
    this.positionNewMarker(position)
  }

  positionNewMarker = (position) => { this.setState({newMarker: {lat: position.lat(), lng: position.lng()}}) }

  newMarker = () => {
    const nm = this.state.newMarker
    if (nm) {
      return (
        <Marker
          position = { this.state.newMarker }
          animation = { this.props.google.maps.Animation.DROP }
          draggable = { true }
        />)
    }
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: '0px',
          top: '0px',
          float: 'right',
          zIndex: 1,
        }}>
        <MapSearchBox 
          google={ this.props.google }
          updatecenter={ this.updateCenter }
          sideBarOpen={ this.props.sideBarOpen }/>
        <Map
          ref="map"
          google={ this.props.google }
          initialCenter={ this.state.center }
          center={ this.state.center }
          defaultZoom={ this.state.zoom }
          onDblclick={ (t, map, c) => this.positionNewMarker(c.latLng) }
          disableDoubleClickZoom={ true }
          mapTypeControl={ false }
          streetViewControl={ false }
          fullscreenControl={ false }
          styles={ mapStyles }>
          { this.newMarker() }
          <MarkerList google={ this.props.google }/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:Keys.MapsAPIKey
})(MapComponent);

//apiKey:Keys.GoogleAPIKey