import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';

const Routes =  createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
  ]);


export default Routes;