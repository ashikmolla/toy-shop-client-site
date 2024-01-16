import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';

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
        }
      ]
    },
  ]);


export default Routes;