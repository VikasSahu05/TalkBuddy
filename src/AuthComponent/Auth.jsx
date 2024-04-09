import { useState } from 'react'
import React from 'react'
import SignIn from '../SignInComponent/SignIn'
import SignUp from '../SignUpComponent/SignUp'

function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);
  const handleSignUpClick = () => {
    setIsSignUp(true);
  }

  const handleLoginClick = () => {
    setIsSignUp(false);
  }
  return (
   <>
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            {/* <h2 className="user_unregistered-title">Don't have an account?</h2> */}
            {/* <p className="user_unregistered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p> */}
            <button className="user_unregistered-signup" id="signup-button"  onClick={handleSignUpClick}>Sign up</button>
          </div>

          <div className="user_options-registered">
            {/* <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</p> */}
            <button className="user_registered-login" id="login-button" onClick={handleLoginClick} >Login</button>
          </div>
        </div>
        
        <div className={`user_options-forms ${isSignUp ? 'bounceLeft' : 'bounceRight'}`} id="user_options-forms">
          {isSignUp ? <SignUp /> : <SignIn />}
        </div>
      </div>
    </section>
   </>
  )
}

export default Auth