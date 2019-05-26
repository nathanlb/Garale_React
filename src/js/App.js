import React from 'react'
import PinCard from './components/PinCard'
import MapComponent from './components/MapComponent'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div
          style={{
            height: '100%',
            width: '100%',
            top: '0px',
            position: 'absolute',
          }}>
          <Sidebar />
          <MapComponent />
        </div>
    )
}

export default App