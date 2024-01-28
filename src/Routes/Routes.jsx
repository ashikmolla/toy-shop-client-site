import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Login/SignUp';
import PrivatRouter from './PrivatRouter';
import MyOrder from '../Pages/MyOrder/MyOrder';
import SingleProductDetails from '../Pages/Home/Products/singleProductDetails';
import Checkout from '../Pages/Home/Products/Checkout';
import Order from '../Pages/MyOrder/Order';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, {
        path: 'login',
        element: <Login></Login>
      }, {
        path: 'signUp',
        element: <SignUp></SignUp>
      }, {
        path: 'singleProductDetails/:id',
        element: <SingleProductDetails />,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },{
        path: 'checkout/:id',
        element: <PrivatRouter><Checkout /></PrivatRouter>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
      {
       path:'order',
       element:<PrivatRouter><Order/></PrivatRouter>
      }
    ]
  },
]);


export default Routes;