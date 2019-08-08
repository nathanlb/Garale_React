import React, {Component} from 'react'

import '../../../css/ModalComponent.css'

export default class Modal extends Component{

  constructor() {
    super()
  }

  showHideModal = () => {
    if (!this.props.visible){
      return({
        visibility: "hidden",
        opacity: "0",
      })
    }
  }

  render(){
    return(
      <div>
        <div id="modal-wrapper" style={this.showHideModal()}>
          {/*this.props.contents*/}
          <div style={{height: '500px', width: '400px', backgroundColor: 'purple'}}></div>

        </div>
      </div>
    )
  }
}