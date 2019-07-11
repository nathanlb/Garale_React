import React, {Component} from 'react'

import EventList from './EventList'
import '../../../css/Sidebar.css'

export default class Sidebar extends Component {

  constructor(){
    super()
    this.state = {
      "showHideSidebar"  : "hide"
    }

    this.toggleNavbar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    const css = (this.state.showHideSidebar === "hide") ? "" : "hide"
    this.setState({"showHideSidebar":css})
    
    const state = (css === "hide") ? false : true
    this.props.setSidebarState(state)
  }

  render() {
    return (
      <div id="nav-container">
        <div id="navbar">
          <div id="offcanvas-left" className={this.state.showHideSidebar}>
            {/* Add navbar components here */}
            <EventList events={ this.props.events }/>
          </div>
          <div className="togglebar">
              <div className="toggle" onClick={this.toggleNavbar}>
                  <i className="fa fa-bars"></i>
              </div>
          </div>
        </div>
      </div>
    )
  }
}