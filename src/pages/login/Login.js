import React, { useState } from 'react'
import "./login.css"
import SignIn from '../signIn/SignIn';

const Login = () => {
    const [login,setLogin] = useState(false);

  return (
    <div className='login'>
        <div className='login_contents'> 
        <img className='login_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png"/>
        <button className='login_btn' onClick={()=>{setLogin(true)}}>Sign In</button>
        <div className='login_gradient' />
        </div>
        <div className='login_body' >
          {
            login ? (
              <SignIn/>
            ) : (
              <>
              <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='login_input'>
                <form>
                  <input type='email' placeholder='Email Address'/>
                  
                  <button className='login_start' onClick={()=>{setLogin(true)}}>Get Started</button>
                </form>
            </div>
              </>
            )
          }
        </div>
    </div>
  )
}

export default Login