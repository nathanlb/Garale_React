import React, {Component} from 'react'
import '../../../css/EventFilterSearch.css'

export default class EventFilterSearch extends Component {

  constructor() {
    super()
    this.state = {
      searchString: null,
    }
  }

  handleInputChange = (event) => {
    const prevState = this.props.appState
    this.props.setAppState({
      filters: {
        ...prevState.filters,
        searchString: event.target.value
      }
    })
  }

  render() {
    return(
      <input id="event-filter-search" ref="input" type="text" placeholder="Search events" onChange={this.handleInputChange} />
    )
  }
}