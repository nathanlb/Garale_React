import React, {Component} from 'react'

import '../../../css/Sidebar.css'

import EventList from './EventList'
import EventFilterSearch from './EventFilterSearch'
import EventFilterForm from './EventFilterForm';

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
            <EventFilterSearch appState={this.props.appState} setAppState={this.props.setAppState} />
            <EventFilterForm appState={this.props.appState} setAppState={this.props.setAppState} />
            <EventList events={ this.props.events }/>
          </div>
          <div className="togglebar">
              <div className="toggle" onClick={this.toggleSidebar}>
                  <i className="fa fa-bars" style={{borderBottom: '1px solid rgb(255, 255, 255, 0.3)'}}></i>
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