import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import { InfoWindow } from 'google-maps-react'

export default class MarkerInfoWindow extends Component {

  constructor(props) {
    super(props)
    //this.infoWindowRef = React.createRef();
    //this.contentElement = document.createElement(`div`);
  }

  /*componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      ReactDOM.render(
        React.Children.only(this.props.children),
        this.contentElement
      );
      this.infoWindowRef.current.infowindow.setContent(this.contentElement);
    }
  }

  render() {
    return <InfoWindow ref={this.infoWindowRef} {...this.props} />;
  }*/

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