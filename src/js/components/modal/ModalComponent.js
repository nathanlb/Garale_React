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

  closeModal = () => {
    this.setState({
      style : {
        visibility: "hidden",
        opacity: "0",
      }
    })
    this.props.setAppState({modal: {open: false, type: null}})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        style : {
          visibility: "visible",
          opacity: ".9",
        }
      })
    }, 0)
  }

  render(){
    const {style} = this.state
    return(
      <div>
        <div id="modal-wrapper" style={style}>
          <i className="fas fa-times" onClick={this.closeModal}></i>
          <div id="content-wrapper">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}