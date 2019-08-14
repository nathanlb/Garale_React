import React, { Component } from 'react'
import {InfoWindow} from 'google-maps-react'

export default class MarkerInfoWindow extends Component {

  constructor() {
    super()
  }

  render() {
    return (
      <InfoWindow
        {...this.props}>
        <div style={{height: '50px', width: '100px'}}>
          <h1>{ 'this.props.marker.name' }</h1>
        </div>
      </InfoWindow>
    )
  }
}