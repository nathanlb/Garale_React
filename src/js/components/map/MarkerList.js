import React, { Component } from 'react'
import {Marker} from 'google-maps-react'
import * as ArrayUtils from '../../utils/ArrayUtils'

export default class MarkerList extends Component {

  constructor() {
    super()
    this.icons = {
      "Fitness": "../../../../img/fitness_pin.png",
      "Environmental": "../../../../img/eco_pin.png",
      "FoodnDrink": "../../../../img/drinks_pin.png",
      "Entertainment": "../../../../img/entertainment_pin.png",
      "Culture": "../../../../img/culture_pin.png"
    }
    this.state = {
      update: true
    }
  }
  
  shouldComponentUpdate(nextProps) {
    if (this.state.update === true){
      return true
    }
    else{
      return !ArrayUtils.compare(nextProps.events, this.props.events)
    }
  }

  componentDidMount() {
    this.setState( {update: false} )
  }

  render() {
    const {events, ...other} = this.props
    return (
      events.map( (event, index) =>
        <Marker
          key={ index }
          name={ event.title }
          position={ event.coord }
          event={ event }
          draggable={ false }
          icon={{
            url: this.icons[event.category],
            scaledSize: new google.maps.Size(35, 50),
          }}
          onClick={ this.props.onClick }
          {...other}/>
      )
    )
  }
}