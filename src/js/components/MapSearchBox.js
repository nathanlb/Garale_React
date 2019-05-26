import React from 'react';
import ReactDOM from 'react-dom';

export default class MapSearchBox extends React.Component {

  static propTypes = {
    placeholder: "Enter text",
    onPlacesChanged: React.PropTypes.func
  }

  render() {
    return <input ref="input" {...this.props} type="text"/>;
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new googlemaps.places.SearchBox(input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}