import React, { useRef, useState } from 'react'
import Header from './Header'
import { BACKGROUND_IMG } from '../Utils/constants'
import { checkValidData } from '../Utils/validate'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice'

const LoginPage = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    let message
    if (isSignInForm) {
      // Sign In validation
      message = checkValidData(null, email.current.value, password.current.value);
    } else {
      // Sign Up validation
      message = checkValidData(name.current.value, email.current.value, password.current.value);
    }
    setErrorMessage(message);

    if(message) return;
      
    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
       .then((userCredential) => {
       const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
        dispatch(addUser({uid: uid,email: email, displayName: displayName}));
       
       navigate("/browse")
      }).catch((error) => {
        setErrorMessage(error.message)
      });
      
      console.log(user)
      navigate("/browse")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-" +errorMessage)
  });

    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-" +errorMessage)
  });

    }


  }

  const toggleSignInForm = () => {
     setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute w-90  bg-gradient-to-b from-black'>
        <img
        className='w-full'
          src={BACKGROUND_IMG}></img>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" :"Sign Up" }</h1>

        {!isSignInForm &&
           <input
            ref={name}
            type="text" placeholder ='Full Name'
           className='p-4 my-4 w-full border border-gray-300 bg-black bg-opacity-80 rounded-lg'></input>
        }
        
        <input
        ref={email} type="text" placeholder ='Email ID'
        className='p-4 my-4 w-full border border-gray-300 bg-black bg-opacity-80 rounded-lg'></input>
        
        <input
        ref={password} type="password" placeholder='Password'
        className='p-4 my-4 w-full border border-gray-300 bg-black bg-opacity-80 rounded-lg'></input>

        {errorMessage && (
          <p className='text-red-500 text-lg py-2'>{errorMessage}</p>
        )}


        <button
        className='py-3 my-5 bg-red-700 w-full rounded-lg font-bold' onClick={handleButtonClick}
        >{isSignInForm ? "Sign In":"Sign Up"}</button>

        <p className='py-4 mx-5'>{isSignInForm ? "New to Netflix?":"Already Registered" }<b className='mx-1 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Sign Up":"Sign In "} now</b></p>

      </form>
    </div>
  )
}

export default LoginPage
