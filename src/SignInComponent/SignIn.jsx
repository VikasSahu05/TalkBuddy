import React from 'react'

function SignIn() {
  return (
    <>
     <div className="user_forms-login">
      <h2 className="forms_title">Login</h2>
      <form className="forms_form">
        <fieldset className="forms_fieldset">
          <div className="forms_field">
            <input type="email" placeholder="Email" className="forms_field-input" required autoFocus />
          </div>
          <div className="forms_field">
            <input type="password" placeholder="Password" className="forms_field-input" required />
          </div>
        </fieldset>
        <div className="forms_buttons">
          <button type="button" className="forms_buttons-forgot">Forgot password?</button>
          <input type="submit" value="Log In" className="forms_buttons-action" />
        </div>
      </form>
    </div>
    </>
  )
}

export default SignIn