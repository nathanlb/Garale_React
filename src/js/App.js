import React, {Component} from 'react'
import MapComponent from './components/map/MapComponent'
import Sidebar from './components/sidebar/Sidebar'
import EventFetcher from './components/api/EventFetcher'
import ModalComponent from './components/modal/ModalComponent'
import LoginForm from './components/account/LoginForm'
import SignupForm from './components/account/SignupForm'

class App extends Component {

  constructor() {
    super()

    this.state = {
      sideBarOpen: false,
      modal: {
        open: false,
        type: null,
      },
      selectedEvent: null,
      filters: {
        categories: [],
        searchString: "",
      }
    }
    this.events = []
    this.eventFetcher = new EventFetcher()
  }

  setAppState = (stateChange) => this.setState(stateChange)

  loginModal = () => {
    const {modal} = this.state
    if (modal.open){
      switch(modal.type){
        case 'login':
          const loginForm = <LoginForm appState={this.state} setAppState={this.setAppState}/>
          return <ModalComponent visible={modal.open} content={loginForm} appState={this.state} setAppState={this.setAppState}/>
        case 'signup':
          const signupForm = <SignupForm appState={this.state} setAppState={this.setAppState}/>
          return <ModalComponent visible={modal.open} content={signupForm} appState={this.state} setAppState={this.setAppState}/>
      }
    }
  }

  render() {
    const filters = this.state.filters
    this.events = this.eventFetcher.getEvents(filters)
    return (
      <div
        style={{
          height: '100%',
          width: '100%',
          top: '0px',
          position: 'absolute',
          overflow: 'hidden'
        }}>
        <Sidebar visible={this.state.sideBarOpen} events={ this.events } appState={this.state} setAppState={ this.setAppState }/>
        <MapComponent sideBarOpen={ this.state.sideBarOpen } events={ this.events } setAppState={ this.setAppState } selectedEvent={ this.state.selectedEvent }/>
        { this.loginModal() }
      </div>
    )
  }
}

export default App