import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import PrivatRouter from './PrivatRouter';
import MyOrder from '../Pages/MyOrder/MyOrder';
import Order from '../Pages/MyOrder/Order';

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
        },
        {
          path:'myOrder',
          element:<PrivatRouter><MyOrder/></PrivatRouter>,
        },
        {
          path:'order',
          element:<PrivatRouter><Order/></PrivatRouter>,
          loader:({params})=>fetch(`products.json/${params.id}`)
        }
      ]
    },
  ]);


export default Routes;