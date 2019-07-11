import React, {Component} from 'react'
import MapComponent from './components/map/MapComponent'
import Sidebar from './components/sidebar/Sidebar'
import EventFetcher from './components/api/EventFetcher';

class App extends Component {

  constructor() {
    super()

    this.state = {
      sideBarOpen: false,
      events: [],
      selectedEvent: null,
    }

    this.eventFetcher = new EventFetcher()
    this.setAppState = this.setAppState.bind(this)
  }

  setSidebarState = (state) => { this.setState( { sideBarOpen: state } )}

  componentDidMount = () => this.setState( {events: this.eventFetcher.getEvents()} )

  setAppState = (stateChange) => this.setState(stateChange)

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          top: '0px',
          position: 'absolute',
        }}>
        <Sidebar sideBarOpen={ this.state.sideBarOpen } setSidebarState={ this.setSidebarState } events={ this.state.events } setAppState={ this.setAppState }/>
        <MapComponent sideBarOpen={ this.state.sideBarOpen } events={ this.state.events } setAppState={ this.setAppState } selectedEvent={ this.state.selectedEvent }/>
      </div>
    )
  }
}

export default App