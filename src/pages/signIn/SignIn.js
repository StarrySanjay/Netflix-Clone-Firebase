import React, { useRef } from "react";
import './SignIn.css'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth"
import {auth} from '../../firebase'

const SignIn = () => {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register =(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value).then((authUser)=>{
      console.log(authUser);
    })
    .catch((error) =>{
      alert(error.message);
    });
  };
  const signIn=(e) =>{
    e.preventDefault();signInWithEmailAndPassword(
      auth,emailRef.current.value,passwordRef.current.value
    ).
    then((auth)=>{
      console.log(authUser);
    })
    .catch((error)=>{
      alert(error.message)
    });

  };
  return (
    <div className='signIn'>
          <h1>Sign In</h1>
          <form>
          <input type='email' placeholder='Email ' />
          <input type='password' placeholder='Password'/>
          <button className='signin_btn' >Sign In</button>
          <p>
            <span className='signIn_gray' >New to Netflix?</span>
            <span className='signIn_link' >SignUp now</span>
          </p>
          </form>
    </div>
  )
}

export default SignIn