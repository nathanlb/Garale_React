import React, {Component} from 'react';

import '../../css/MapSearchBox.css'

export default class MapSearchBox extends Component {

  constructor(){
    super()

    this.showHideSearchBox = this.showHideSearchBox.bind(this)
  }

  onPlacesChanged = () => {
    this.props.updatecenter(this.searchBox.getPlaces()[0].geometry.location)
  }

  componentDidMount() {
    console.log(this.props.center)
    var input = this.refs.input;
    this.searchBox = new this.props.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }

  showHideSearchBox() {
    if (this.props.sideBarOpen){
      return ({ visibility: "hidden",
                opacity: "0",
                transition: "visibility 0s 0.2s, opacity 0.2s linear"})
    }
  }

  render() {
    return (
      <div id="places-search-wrapper" style={this.showHideSearchBox()}>
        <input id="places-search" ref="input" {...this.props} type="text"/>
      </div>
    )
  }
}