import React from 'react';
import { LOGO_URL, USER_ICON } from '../Utils/constants';
import {useNavigate} from "react-router-dom";
import {onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from 'react'
import { addUser, removeUser } from '../Utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) =>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
    
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); 
  }, [auth, dispatch, navigate]);
  


  return (
    <div className='w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
       className='w-44'
       src={LOGO_URL} alt="logo"></img>
       
      {user && (<div className='flex p-4'>
        <img 
        className='w-12 h-12'
        alt="user-icon" src={USER_ICON}></img>
        <button onClick={handleSignOut} className='font-bold text-white mx-2'>Sign Out</button>
       </div>)}
    </div>
  )
}

export default Header
