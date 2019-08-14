import React, {Component} from 'react'

import '../../../css/SignupForm.css'

export default class SignupForm extends Component{

  constructor() {
    super()
  }

  render(){
    return(
      <div className='signup-form-container' style={{height: '390px', width: '400px'}}>
        <form>
        <h2>Sign Up</h2>
        <input type='text' placeholder='First Name' required></input>
        <br/>
        <input type='text' placeholder='Last Name' required></input>
        <br/>
        <input type='text' placeholder='Username' required></input>
        <br/>
        <input type='password' placeholder='Password' minLength='8' required></input>
        <br/>
        <input type='email' placeholder='Email' required></input>
        <br/>
        <button type='submit' className='submit-button'>Continue</button>
        </form>
      </div>
    )
  }
}