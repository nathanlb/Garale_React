import React, {Component} from 'react'
import MapComponent from './components/map/MapComponent'
import Sidebar from './components/sidebar/Sidebar'
import EventFetcher from './components/api/EventFetcher'
import ModalComponent from './components/modal/ModalComponent'

class App extends Component {

  constructor() {
    super()

    this.state = {
      sideBarOpen: false,
      loginModalOpen: false,
      events: [],
      selectedEvent: null,
    }

    this.eventFetcher = new EventFetcher()
  }

  setSidebarState = (state) => { this.setState({ sideBarOpen: state }) }
  setLoginModalState = (state) => { this.setState({ loginModalOpen: state}) }

  componentDidMount = () => this.setState({ events: this.eventFetcher.getEvents() })

  setAppState = (stateChange) => this.setState(stateChange)

  render() {
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          top: '0px',
          position: 'absolute',
          overflow: 'hidden'
        }}>
        <Sidebar visible={this.state.sideBarOpen} events={ this.state.events } appState={this.state} setAppState={ this.setAppState }/>
        <MapComponent sideBarOpen={ this.state.sideBarOpen } events={ this.state.events } setAppState={ this.setAppState } selectedEvent={ this.state.selectedEvent }/>
        <ModalComponent visible={this.state.loginModalOpen}></ModalComponent>
      </div>
    )
  }
}

export default App