import React, {Component} from 'react'
import '../../../css/EventFilterSearch.css'

export default class EventFilterSearch extends Component {

  constructor() {
    super()
  }

  render() {
    return(
        <input id="event-filter-search" ref="input" type="text"/>
    )
  }
}