import React, { Component } from 'react'
import Map, {Marker, GoogleApiWrapper} from 'google-maps-react'

import MarkerList from './MarkerList'
import MapSearchBox from './MapSearchBox'
import MarkerInfoWindow from './MarkerInfoWindow';
import Keys from '../../secret'
import mapStyles from '../../../json/mapStyles'

import '../../../css/MapComponent.css'

export class MapComponent extends Component {

  constructor() {
    super()
    this.state = {
      center: { lat: 45.4856441, lng: -73.5792103 },
      zoom: 18,
      newMarker: null,
      activeMarker: {},
      showInfoWindow: false,
    }
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

  onMarkerClick = (marker) => {
    this.setState({
      showInfoWindow: false,
    })
    this.setState({
      activeMarker: marker,
      showInfoWindow: true,
    })
    this.props.setAppState( {selectedEvent: marker.event} )
  }

  onMapClicked = () => {
    this.setState({
      activeMarker: null,
      showInfoWindow: false,
    })
    this.props.setAppState( {selectedEvent: null} )
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

  markerInfoWindow = () => {
    const {activeMarker, showInfoWindow} = this.state
    if (activeMarker && showInfoWindow){
      return(
        <MarkerInfoWindow 
          marker={ activeMarker }
          visible={ showInfoWindow }/>)
    }
  }

  render() {
    return (
      <div id='map-component-container'>
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
          onClick={ this.onMapClicked }
          onDblclick={ (t, map, c) => this.positionNewMarker(c.latLng) }
          disableDoubleClickZoom={ true }
          mapTypeControl={ false }
          streetViewControl={ false }
          fullscreenControl={ false }
          styles={ mapStyles }>
          <MarkerList events={ this.props.events } onClick={ this.onMarkerClick }/>
          { this.newMarker() }
          { this.markerInfoWindow() }
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey:Keys.MapsAPIKey
})(MapComponent);