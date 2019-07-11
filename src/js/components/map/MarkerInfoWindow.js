import React, { Component } from 'react'
import {InfoWindow} from 'google-maps-react'

export default class MarkerInfoWindow extends Component {

  constructor() {
    super()
  }

  render() {
    console.log(this.props)
    return (
      <InfoWindow
        {...this.props}>
        <div>
          <h1>{ 'this.props.marker.name' }</h1>
        </div>
      </InfoWindow>
    )
  }
}