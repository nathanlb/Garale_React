import React, {Component} from 'react'

import '../../../css/LoginForm.css'

export default class LoginForm extends Component{

  constructor() {
    super()
  }

  handleSignupClick = () => {
    const modal = this.props.appState.modal
    if (modal.open){
      this.props.setAppState({modal: {open: true, type: 'signup'}})
    }
  }

  render(){
    return(
      <div className='login-form-container' style={{height: '300px', width: '400px'}}>
        <form>
        <h2>Log In</h2>
        <input type='text' placeholder='Username'></input>
        <br/>
        <input type='password' placeholder='Password'></input>
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