import React, {Component} from 'react'
import '../../css/Sidebar.css'

class Sidebar extends React.Component {

  constructor(){
    super()
    this.state = {
      "showHideSidebar"  : "hide"
    }

    this.toggleNavbar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    var css = (this.state.showHideSidebar === "hide") ? "" : "hide"
    this.setState({"showHideSidebar":css})
  }

  render() {
    return (
      <div id="nav-container">
        <div id="navbar">
          <div id="offcanvas-left" className={this.state.showHideSidebar}>
            {/* Add navbar components here */}
            <ul>
                <li><a href="#" >Item 1 </a></li>
                <li><a href="#" >Item 2 </a></li>
                <li><a href="#" >Item 3 </a></li>
            </ul>
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

export default Sidebar