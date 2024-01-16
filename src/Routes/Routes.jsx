import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';

const Routes =  createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },{
          path:'login',
          element:<Login></Login>
        },{
          path:'signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);


export default Routes;