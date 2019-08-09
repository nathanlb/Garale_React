import React, {Component} from 'react'
import MapComponent from './components/map/MapComponent'
import Sidebar from './components/sidebar/Sidebar'
import EventFetcher from './components/api/EventFetcher'
import ModalComponent from './components/modal/ModalComponent'
import LoginForm from './components/account/LoginForm';

class App extends Component {

  constructor() {
    super()

    this.state = {
      sideBarOpen: false,
      modal: {
        open: false,
        type: null,
      },
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

  loginModal = () => {
    const {modal} = this.state
    if (modal.open){
      if (modal.type==='login') {
        const loginForm = <LoginForm />
        return <ModalComponent visible={modal.open} content={loginForm} setAppState={this.setAppState}/>
      }
    }
  }

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
        { this.loginModal() }
      </div>
    )
  }
}

export default App