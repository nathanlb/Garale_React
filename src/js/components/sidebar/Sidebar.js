import React, {Component} from 'react'

import EventList from './EventList'
import '../../../css/Sidebar.css'

export default class Sidebar extends Component {

  constructor(){
    super()
  }

  toggleSidebar = () => {
    const state = !this.props.appState.sideBarOpen
    this.props.setAppState({sideBarOpen: state})
  }

  toggleLoginModal = () => {
    const modal = this.props.appState.modal
    if (!modal.open){
      this.props.setAppState({modal: {open: true, type: 'login'}})
    }
  }

  showHideSidebar = () => {
    const visible = this.props.appState.sideBarOpen
    if (!visible){
      return({
        marginLeft: '-550px'
      })
    }
  }

  render() {
    return (
      <div id="nav-container">
        <div id="navbar">
          <div id="offcanvas-left" style={this.showHideSidebar()}>
            {/* Add navbar components here */}
            <EventList events={ this.props.events }/>
          </div>
          <div className="togglebar">
              <div className="toggle" onClick={this.toggleSidebar}>
                  <i className="fa fa-bars" style={{marginBottom: '20px'}}></i>
              </div>
              <div className="toggle" onClick={this.toggleLoginModal}>
                  <i className="far fa-user"></i>
              </div>
          </div>
        </div>
      </div>
    )
  }
}