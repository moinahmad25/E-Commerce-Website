import React from 'react'
import './CSS/SigninSignup.css'

const SigninSignup = () => {
  return (
    <div className='sign_up'>
      <div className="box">
        <h1>Sign Up</h1>
        <div className="field">
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder='Email Address'/>
          <input type="text" placeholder='Password'/>
          <button>Continue</button>
        </div>
        <div className="exist">
          <p>Already have an account? <a className='login'>Login here</a></p>
        </div>
        <div className="terms">
          <input type="checkbox" className='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default SigninSignup
