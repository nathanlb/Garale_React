import React, {Component} from 'react'

import '../../../css/ModalComponent.css'

export default class Modal extends Component{

  constructor() {
    super()
    this.state = {
      style : {
        visibility: "hidden",
        opacity: "0",
      }
    }
  }

  showHideModal = () => {
    if (!this.props.visible){
      return({
        
      })
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style : {
          visibility: "visible",
          opacity: "1",
        }
      })
    }, 0)
  }

  render(){
    const {style} = this.state
    return(
      <div>
        <div id="modal-wrapper" style={style}>
          {this.props.content}
        </div>
      </div>
    )
  }
}