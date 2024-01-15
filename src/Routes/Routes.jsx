import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';

const Routes =  createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);


export default Routes;