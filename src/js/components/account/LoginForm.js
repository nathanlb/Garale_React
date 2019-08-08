import React, {Component} from 'react'

import '../../../css/LoginForm.css'

export default class LoginForm extends Component{

  constructor() {
    super()
  }

  render(){
    return(
      <div className='login-form-container' style={{height: '300px', width: '400px', backgroundColor: '#393939'}}>
        <h2>Log In</h2>
        <input type='text' placeholder='Username'></input>
        <br/>
        <input type='text' placeholder='Password'></input>
        <br/>
        <a href="">Forgot your username/password?</a>
        <br/>
        <button type='submit'>Continue</button>
        <br/>
        Not registered? <a href=''>Sign up!</a>
      </div>
    )
  }
}