import React from 'react';

import '../../css/MapSearchBox.css'

export default class MapSearchBox extends React.Component {

  constructor(){
    super()
  }
  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }
  componentDidMount() {
    var input = this.refs.input;
    this.searchBox = new this.props.google.maps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    this.searchBox.removeListener('places_changed', this.onPlacesChanged);
  }
  render() {
    return (
      <div id="places-search-wrapper">
        <input id="places-search" ref="input" {...this.props} type="text"/>
      </div>
    )
  }
}