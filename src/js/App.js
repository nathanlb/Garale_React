import React, {Component} from 'react'
import PinCard from './components/PinCard'
import MapComponent from './components/MapComponent'
import Sidebar from './components/Sidebar'

class App extends Component {

  constructor() {
    super()

    this.state = {
      sideBarOpen: false,
    }
  }

  setSidebarState = (state) => { this.setState( { sideBarOpen: state } )}

  render() {
      return (
          <div
            style={{
              height: '100%',
              width: '100%',
              top: '0px',
              position: 'absolute',
            }}>
            <Sidebar sideBarOpen={ this.state.sideBarOpen } setSidebarState={ this.setSidebarState }/>
            <MapComponent sideBarOpen={ this.state.sideBarOpen }/>
          </div>
      )
  }
}

export default App