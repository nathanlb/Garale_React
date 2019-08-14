import React, {Component} from 'react'

import '../../../css/SignupForm.css'

export default class SignupForm extends Component{

  constructor() {
    super()
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',
      }
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
      <div className='signup-form-container' style={{height: '390px', width: '400px'}}>
        <form>
          <h2>Sign Up</h2>
          <input type='text' name='firstName' placeholder='First Name' onChange={this.handleInputChange} required></input>
          <br/>
          <input type='text' name='lastName' placeholder='Last Name' onChange={this.handleInputChange} required></input>
          <br/>
          <input type='text' name='userName' placeholder='Username' onChange={this.handleInputChange} required></input>
          <br/>
          <input type='password' name='password' placeholder='Password' minLength='8' onChange={this.handleInputChange} required></input>
          <br/>
          <input type='email' name='email' placeholder='Email' onChange={this.handleInputChange} required></input>
          <br/>
          <button type='submit' className='submit-button'>Continue</button>
        </form>
      </div>
    )
  }
}