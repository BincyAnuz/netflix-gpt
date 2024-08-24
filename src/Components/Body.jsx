import React, { useEffect } from 'react'
import LoginPage from './LoginPage'
import Browse from './Browse'
import {createBrowserRouter, useNavigate} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase'
import {useDispatch} from "react-redux";
import { addUser,removeUser } from '../Utils/userSlice'


const Body = () => {

  const dispatch = useDispatch();
  


  const appRouter = createBrowserRouter([
    {
       path:"/",
       element:<LoginPage/>
    },
    {
      path:"/browse",
      element: <Browse/>
    }
  ]);



  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
