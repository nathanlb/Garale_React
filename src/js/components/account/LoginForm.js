import React, {Component} from 'react'

import '../../../css/LoginForm.css'

export default class LoginForm extends Component{

  constructor() {
    super()
    this.state = {
      formData: {
        userName: '',
        password: '',
      }
    }
  }

  handleSignupClick = () => {
    const modal = this.props.appState.modal
    if (modal.open){
      this.props.setAppState({modal: {open: true, type: 'signup'}})
    }
  }

  handleInputChange = (event) => {
    const target = event.target
    const value = target.value
    const name = target.name
    const prevState = this.state
    this.setState({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    })
  }

  render() {
    return(
      <div className='login-form-container' style={{height: '300px', width: '400px'}}>
        <form>
          <h2>Log In</h2>
          <input type='text' name='userName' placeholder='Username' onChange={this.handleInputChange} />
          <br/>
          <input type='password' name='password' placeholder='Password' onChange={this.handleInputChange} />
          <br/>
          <button className='text-button'>Forgot your username/password?</button>
          <br/>
          <button type='submit' className='submit-button'>Continue</button>
          <br/>
          Not registered? <button className='text-button' onClick={this.handleSignupClick}>Sign up!</button>
        </form>
      </div>
    )
  }
}